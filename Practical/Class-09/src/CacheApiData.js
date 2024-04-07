import React from "react";
import ReactDOM from "react-dom/client";
import { PROFILE_URL } from "./config";

const makeApiCall = (time) => {
  const cache = {};

  return async (url, config = {}) => {
    const key = `${url}${JSON.stringify(config)}`;
    console.log(Date.now(), cache[key]);
    if (cache[key] == null || Date.now() > cache["expiry"]) {
      // make api call and send data
      console.log("New API call");
      try {
        let data = await fetch(url, config);
        data = data.json();
        cache[key] = data;
        cache["expiry"] = Date.now() + time;
      } catch (error) {
        console.error(error);
      }
    }
    return cache[key];
  };
};

const AppLayout = () => {
  function apiCall() {
    const call = makeApiCall(1500);
    call(PROFILE_URL, {}).then((a) => console.log("Call 1 - ", a));
    setTimeout(() => {
      call(PROFILE_URL, {}).then((a) => console.log("call 2 - ", a));
    }, 1000);
  }
  return (
    <div>
      <button onClick={() => apiCall()}>Make API Call</button>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
