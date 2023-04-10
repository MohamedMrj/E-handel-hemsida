export function truncate(str, maxLength) {
    return str.length > maxLength ? `${str.substring(0, maxLength)} ...` : str;
  }
  
  export function toDateTimeString(string) {
    const dateObj = new Date(string);
    return `${dateObj.toLocaleDateString()} ${dateObj.toLocaleTimeString()}`;
  }

