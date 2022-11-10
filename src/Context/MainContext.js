import React, { createContext, useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";

const auth = getAuth(app);

export const authContext = createContext();

const googleProvider = new GoogleAuthProvider();

const MainContext = ({ children }) => {
  // loading

  const [loading, setLoading] = useState(true);
  // user

  const [user, setUser] = useState();
  // Registration
  const RegForm = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // Sign In
  const LogForm = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Registration with google

  const RegWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // sign out
  const LogOut = () => {
    return signOut(auth);
  };

  // update user

  const UpdateUSer = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  // get all user

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currenUser) => {
      setLoading(false);
      setUser(currenUser);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    user,
    loading,
    setLoading,
    RegForm,
    LogForm,
    RegWithGoogle,
    LogOut,
    UpdateUSer,
  };

  return (
    <authContext.Provider value={authInfo}>{children}</authContext.Provider>
  );
};

export default MainContext;
