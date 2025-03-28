import { useRouteError } from "react-router";
export const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <>
      <h1>error</h1>
      {/* <h2>{err.status}</h2>
      <h3>{err.error.message}</h3> */}
    </>
  );
};
