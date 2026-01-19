import axios from "axios";

const BASE_URL = import.meta.env.VITE_BOM_API_URL;
const accessToken = localStorage.getItem("accessToken");

export interface UploadResponse {
  file_name: string;
  row_count?: number;
  columns?: any[];
  uploadId: number;
}

export interface DashboardRequest {
  uploadId: string | number;
  qty: number | string;
}

export async function getDashboardData({ uploadId, qty }: DashboardRequest): Promise<any> {
  const token = localStorage.getItem("accessToken");

  const url = `${BASE_URL}/dashboard?uploadId=${uploadId}&qty=${qty}`;
  const response = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch dashboard data: ${response.statusText}`);
  }

  return await response.json();
}

export const uploadBOMFile = async (file: File): Promise<UploadResponse> => {
  const formData = new FormData();
  formData.append("file", file);

  console.log("accessToken", accessToken);

  const response = await axios.post(`${BASE_URL}/upload`, formData, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "multipart/form-data",
    },
  });

  return response.data;
};

export const processBOM = async (
  uploadId: number,
  columns: { name: string; mapping: string }[],
  buildQuantities: string,
  buildDate: string,
) => {
  const payload = {
    uploadId,
    buildQuantities,
    buildDate,
    columns,
  };

  const response = await fetch(`${BASE_URL}/process`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error("Failed to process BOM");
  }

  return response.json();
};

export interface StreamCallbacks {
  [event: string]: (data: any) => void;
  httpError: (err: Error) => void;
}

export interface StreamInitOverride extends RequestInit {
  headers?: Record<string, string>;
}

// Streaming logic uses fetch (not Axios) for SSE support
export async function streamResults(
  rowData: any,
  callbacks: StreamCallbacks,
  endpoint: string = "/stream-digikey",
  initOverride: StreamInitOverride = {},
  signal?: AbortSignal,
): Promise<void> {
  const token = localStorage.getItem("accessToken");

  const mergedHeaders: Record<string, string> = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
    ...(initOverride.headers || {}),
  };

  try {
    const res = await fetch(`${BASE_URL}${endpoint}`, {
      method: "POST",
      headers: mergedHeaders,
      body: JSON.stringify(rowData),
      signal,
      ...initOverride,
    });

    if (!res.ok) {
      callbacks.httpError?.(new Error(`Streaming failed with status ${res.status}`));
      return;
    }

    const reader = res.body?.getReader();
    if (!reader) {
      callbacks.httpError?.(new Error("No response body"));
      return;
    }

    const decoder = new TextDecoder();
    let buffer = "";

    while (true) {
      const { value, done } = await reader.read();
      if (done) break;
      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split("\n");
      buffer = lines.pop() || "";
      lines.forEach((line) => dispatch(line.trim(), callbacks));
    }

    if (buffer.trim()) dispatch(buffer.trim(), callbacks);
  } catch (err) {
    if ((err as any).name === "AbortError") {
      console.log("Fetch aborted");
      return;
    }
    callbacks.httpError?.(err instanceof Error ? err : new Error(String(err)));
  }
}

function dispatch(line: string, callbacks: StreamCallbacks): void {
  if (!line) return;
  try {
    const evt = JSON.parse(line);
    const { data } = evt;
    if (callbacks.log) {
      callbacks.log(data);
    }
  } catch (err) {
    console.error("Failed to parse line:", line, err);
  }
}

export async function streamDigikeyResults(
  rows: any[],
  uploadId: number,
  callbacks: StreamCallbacks,
  initOverride: StreamInitOverride = {},
): Promise<void> {
  const payload = { rows, uploadId };
  await streamResults(payload, callbacks, "/stream-digikey", initOverride);
}

export async function streamMouserResults(
  rows: any[],
  uploadId: number,
  callbacks: StreamCallbacks,
  initOverride: StreamInitOverride = {},
): Promise<void> {
  const payload = { rows, uploadId };
  await streamResults(payload, callbacks, "/stream-mouser", initOverride);
}
