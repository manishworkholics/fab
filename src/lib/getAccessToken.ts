interface DecodedToken {
  exp: number;
  iat: number;
  userId: string;
  email: string;
}
export const getAccessToken = () => {
  const accessToken = localStorage.getItem("accessToken");
  if (!accessToken) {
    return "";
  }
  
  const decodedToken = parseJwt(accessToken);
  const currentTime = Date.now() / 1000;

  if (decodedToken.exp < currentTime) {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("user");
    window.location.href = "/login";
    return "";
  }
  return accessToken;
};

const parseJwt = (token: string): DecodedToken => {
  const base64Url = token.split(".")[1];
  const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  const jsonPayload = decodeURIComponent(
    window
      .atob(base64)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join(""),
  );

  return JSON.parse(jsonPayload);
};
