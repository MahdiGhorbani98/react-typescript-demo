type StatusProps = {
  status: "loading" | "success" | "error";
};
export const Status = (props: StatusProps) => {
  let message;
  if (props.status === "loading") message = "loading...";
  else if (props.status === "success") message = "Data fetched";
  else if (props.status === "error") message = "something is wrong";

  return <div>{message}</div>;
};
