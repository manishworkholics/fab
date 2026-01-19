export const getTurnTimeLabel = (value: number) => {
  switch (value) {
    case 3:
      return "3 days";
    case 5:
      return "5 days";
    case 10:
      return "10 days";
    default:
      return "";
  }
};
