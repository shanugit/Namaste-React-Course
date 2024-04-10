import { createContext } from "react";

const userContext = createContext({
  user: {
    name: "Dummy",
    mail: "Dummy@gmail.com",
  },
});

export default userContext;
