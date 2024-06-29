import {createContext, useContext, useEffect, useState} from "react";
import {onAuthStateChanged} from "firebase/auth";
import {auth, db} from "../util/firebaseConfig";
import {doc, getDoc} from "firebase/firestore";
import { SearchContext } from "./SearchContext";


export const AuthContext = createContext();


const AuthContextProvider = ({children}) => {

  
  const [currentUser, setCurrentUser] = useState(null);
  
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setCurrentUser(user)
          });
    }, [])
   
  return (
    <AuthContext.Provider value={{currentUser}}>{children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;

/*

import { createContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../util/firebaseConfig";


export const AuthContext = createContext();

const AuthContextProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null)
    const [userData, setUserData] = useState(null)
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setCurrentUser(user)
          });
    }, [])
    return(
        <AuthContext.Provider value={currentUser}>
            {children}
        </AuthContext.Provider>
    )
}


export default AuthContextProvider;


*/



/*

import {createContext, useEffect, useState} from "react";
import {onAuthStateChanged} from "firebase/auth";
import {auth, db} from "../util/firebaseConfig";
import {doc, getDoc} from "firebase/firestore";

export const AuthContext = createContext();

const AuthContextProvider = ({children}) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        setCurrentUser(user);
        const userDoc = await getDoc(doc(db, "users", user.uid));
        if (userDoc.exists()) {
          setUserData(userDoc.data());
        }
      } else {
        setCurrentUser(null);
        setUserData(null);
      }
    });
  }, []);

  return (
    <AuthContext.Provider value={{currentUser, userData}}>{children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;

*/
