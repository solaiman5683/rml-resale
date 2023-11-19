
export default  function DateFormatter({ dateString }) {
  // Parse the input date string
  const parsedDate = new Date(dateString);

  // Options for formatting the date
  const options = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
  };

  // Format the date using toLocaleDateString
  const formattedDate = parsedDate.toLocaleDateString("en-US", options);

  return (
    <>{formattedDate}</>
  );
}

