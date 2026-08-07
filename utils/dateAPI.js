const dateAPI = () => {
  return new Date()
    .toLocaleString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    })
    .replace(/,/g, "");
};

export default dateAPI;
