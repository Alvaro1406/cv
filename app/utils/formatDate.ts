export const formatDateAndTime = (props: Date) => {
  const date = new Date(props);
  const mes = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  const year = date.getFullYear();
  return `${day}-${mes}-${year}`;
};
