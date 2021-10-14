import { GoogleAuthProvider, signOut, signInWithPopup, getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import initializeAuthentication from "../Firebase/Firebase.init";

const GoogleProvider = new GoogleAuthProvider();
initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const auth = getAuth();
  const signInGoogle = () => {
    signInWithPopup(auth, GoogleProvider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => setError(error.message));
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
    });
  }, [auth]);

  const logOut = () => {
    signOut(auth).then(() => {});
  };
  return {
    user,
    error,
    signInGoogle,
    logOut,
  };
};

export default useFirebase;
