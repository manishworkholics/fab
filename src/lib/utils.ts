// import { QuoteStateProps } from "@/pages/NewQuote/hooks";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { QuoteStateProps } from "@/pages/NewQuote/hooks";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function hasAllRequiredPropertiesStrict(obj: QuoteStateProps): obj is QuoteStateProps {
  if (!obj || typeof obj !== 'object') {
    return false;
  }
  
  const checks = {
    title: typeof obj.title === 'string',
    description: typeof obj.description === 'string',
    quoteMaterials: Array.isArray(obj.quoteMaterials),
    turnTime: typeof obj.turnTime === 'string',
    quoteFiles: Array.isArray(obj.quoteFiles),
    quoteType: typeof obj.quoteType === 'string',
    budget: typeof obj.budget === 'number',
    assignedEMSId: typeof obj.assignedEMSId === 'number',
    hasNDA: typeof obj.hasNDA === 'boolean',
    quoteName: typeof obj.quoteName === 'string',
    pcbBoards: typeof obj.pcbBoards === 'number' || obj.pcbBoards === undefined,
  };
  
  return Object.values(checks).every(check => check === true);
}

export function addToLocalStorage (key: string, newData: object, mode = 'replace') {
  try {
    // Check if localStorage is available
    if (typeof Storage === 'undefined') {
      console.error('localStorage is not supported in this environment');
      return false;
    }

    let existingData = null;
    
    // Try to get existing data
    const existingItem = localStorage.getItem(key);
    if (existingItem) {
      try {
        existingData = JSON.parse(existingItem);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (e) {
        // If parsing fails, treat as string
        existingData = existingItem;
      }
    }

    let finalData;

    switch (mode) {
      case 'append':
        // For arrays - append new data
        if (Array.isArray(existingData)) {
            finalData = [...existingData, newData];
        } else if (existingData === null) {
            finalData = [newData];
        } else {
            // Convert existing data to array and append
            finalData = [existingData, newData];
        }
        break;

      case 'merge':
        // For objects - merge properties
        if (typeof existingData === 'object' && existingData !== null && !Array.isArray(existingData)) {
            finalData = { ...existingData, ...newData };
        } else if (existingData === null) {
            finalData = newData;
        } else {
            // Can't merge non-objects, so replace
            finalData = newData;
        }
        break;

      case 'replace':
      default:
        // Simply replace the existing data
        finalData = newData;
        break;
    }

    // Store the data
    localStorage.setItem(key, JSON.stringify(finalData));
    return true;

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return false;
  }
}

export const getFromLocalStorage = (key: string, defaultValue = null) => {
  try {
    const item = localStorage.getItem(key);
    
    if (!item) {
      return defaultValue;
    }
    
    const parsedItem = JSON.parse(item);
    
    // Check if item has expired
    if (parsedItem.expiration && Date.now() > parsedItem.expiration) {
      localStorage.removeItem(key);
      return defaultValue;
    }
    
    return parsedItem;
  } catch (error) {
    console.error('Error reading from localStorage:', error);
    return defaultValue;
  }
};

export const deleteFromLocalStorage = (key: string) => {
  try {
    localStorage.removeItem(key);
    return true;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return false;
  }
};

export const existsInLocalStorage = (key: string) => {
  try {
    const item = localStorage.getItem(key);
    
    if (!item) {
      return false;
    }
    
    const parsedItem = JSON.parse(item);
    
    // Check if item has expired
    if (parsedItem.expiration && Date.now() > parsedItem.expiration) {
      localStorage.removeItem(key);
      return false;
    }
    
    return true;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return false;
  }
};

export const getAllLocalStorageKeys = () => {
  try {
    return Object.keys(localStorage);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return [];
  }
};

export const getLocalStorageInfo = () => {
  try {
    const keys = Object.keys(localStorage);
    let totalSize = 0;
    
    keys.forEach(key => {
      const item = localStorage.getItem(key);
      totalSize += item ? item.length : 0;
    });
    
    return {
      totalKeys: keys.length,
      totalSize: totalSize,
      totalSizeFormatted: `${(totalSize / 1024).toFixed(2)} KB`
    };
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return {
      totalKeys: 0,
      totalSize: 0,
      totalSizeFormatted: '0 KB'
    };
  }
};
