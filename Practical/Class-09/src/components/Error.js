import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <h2>Opps something went wrong!!</h2>
      <h3>{err?.data}</h3>
      <h3>{err?.status + " " + err?.statusText}</h3>
    </div>
  );
};

export default Error;
