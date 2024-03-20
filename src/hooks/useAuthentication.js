import { useState } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
  signOut,
} from "firebase/auth";

import { auth } from "../utils/firebase.config";

const useAuthentication = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleLogin = (email, password, callback) => {
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        setError(null);
        callback();
      })
      .catch((error) => {
        setError({ message: error.message, code: error.code });
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleSignUp = (email, password, fullName) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        console.log(userCredentials);
        const user = userCredentials.user;
        return updateProfile(user, { displayName: fullName });
      })
      .then((user) => {
        console.log(user);
        setError(null);
        callback();
      })
      .catch((error) => {
        console.log(error.code);
        setError({ message: error.message, code: error.code });
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleLogout = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        setError({ message: error.message, code: error.code });
      });
  };

  const resetError = () => setError(null);

  return {
    isLoading,
    error,
    resetError,
    handleLogin,
    handleSignUp,
    handleLogout,
  };
};

export default useAuthentication;
