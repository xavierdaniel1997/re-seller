import {createContext, useContext, useEffect, useState} from "react";
import {AuthContext} from "./AuthContextProvider";
import {doc, getDoc} from "firebase/firestore";
import {db} from "../util/firebaseConfig";

export const UserContext = createContext();

const UserContextProvider = ({children}) => {
  const [userData, setUserData] = useState(null);
  const {currentUser} = useContext(AuthContext);

  useEffect(() => {
    const getUserData = async () => {
      if (currentUser) {
        const userDoc = await getDoc(doc(db, "users", currentUser.uid));
        if (userDoc.exists()) {
          setUserData(userDoc.data());
        }
      } else {
        setUserData(null);
      }
    };
    getUserData();
  }, [currentUser]);
  return (
    <UserContext.Provider value={{userData}}>{children}</UserContext.Provider>
  );
};

export default UserContextProvider;
