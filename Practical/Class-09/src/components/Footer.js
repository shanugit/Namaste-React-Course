import { useContext } from "react";
import UserContext from "../utils/UserContext";

export const Footer = () => {
  const { user } = useContext(UserContext);
  return (
    <div className="h-24 py-8 w-full text-center bg-pink-300 rounded-lg">
      <p>&#169; Everything owned by Suman Das</p>
      <p className="font-bold text-pink-600">
        This site is developed by {user.name}, Mail ID {user.mail}
      </p>
    </div>
  );
};
