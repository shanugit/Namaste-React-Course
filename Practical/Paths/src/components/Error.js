import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div id="error-component">
      <h2>Opps Something went wrong</h2>
      <p>{err?.data}</p>
      <p>
        <b>{err?.status + " " + err?.statusText}</b>
      </p>
    </div>
  );
};

export default Error;
