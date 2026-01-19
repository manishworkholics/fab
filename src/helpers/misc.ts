export const isWithinContainer = (
  child: Node | null,
  parentClass: string
): boolean => {
  let node: Node | null = child;
  while (node) {
    if (node instanceof HTMLElement && node.classList.contains(parentClass)) {
      return true;
    }
    node = node.parentNode;
  }
  return false;
};

export const getItemFromStorage = (key: string): string | null => {
  return localStorage.getItem(key);
};

// utils/dateFormatter.js
export const formatDateTime = (isoString: string, locale = "en-US") => {
  const dateObj = new Date(isoString);

  const formattedDate = dateObj.toLocaleDateString(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const formattedTime = dateObj.toLocaleTimeString(locale, {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  return {
    date: formattedDate,
    time: formattedTime,
  };
};
export const formatTurnTime = (value: string) => {
  return value.replace(/_/g, ' ');
};
