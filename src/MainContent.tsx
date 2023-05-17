import { useState, useEffect, useCallback } from "react";
import Button from "@mui/material/Button";

import { collection, onSnapshot } from "firebase/firestore";
import firebase, { database, signOut, signInWithGoogle } from "./firebase";

import "./styles.css";
import { CalendarApp } from "./Calendar";
import { Statistics } from "./statistics";

export const MainContent = () => {
  const [user, setUser] = useState<firebase.User | null>(null);
  const [dates, setDates] = useState({});

  const uid = user?.uid;

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    });
  }, []);

  const fetchPost = useCallback(async (uid: string) => {
    const docRef = collection(database, uid);
    const unsub = onSnapshot(docRef, (doc) => {
      let newObj = {};
      doc.forEach((doc) => {
        newObj = { ...doc.data(), ...newObj };
      });
      setDates(newObj);
      console.log(newObj);
    });

    return unsub;
  }, []);

  useEffect(() => {
    if (uid) {
      fetchPost(uid);
    }
  }, [uid, fetchPost]);

  const handleLogout = () => {
    signOut();
    setDates({});
  };

  return (
    <>
      <div style={{ textAlign: "right" }}>
        {user && <Button onClick={handleLogout}>Logout</Button>}
        {!user && <Button onClick={() => signInWithGoogle()}>Login</Button>}
      </div>

      <CalendarApp dates={dates} user={user} />
      <Statistics dates={dates} />
    </>
  );
};
