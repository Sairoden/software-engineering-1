import { useEffect } from "react";
import { useState, createContext } from "react";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext({
  user: false,
  firstName: "",
  lastName: "",
});

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    navigate("/");
  }, [user]);

  const value = {
    user,
    setUser,
    firstName,
    lastName,
    setFirstName,
    setLastName,
  };
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
