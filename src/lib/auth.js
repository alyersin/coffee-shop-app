import {
  signInWithPopup,
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth, googleProvider, facebookProvider } from "./firebase";

// GOOGLE SIGN-IN
export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    console.log("User signed in with Google:", result.user);
    return result.user;
  } catch (error) {
    console.error("Error signing in with Google:", error.message);
  }
};

// FACEBOOK SIGN-IN
export const signInWithFacebook = async () => {
  try {
    const result = await signInWithPopup(auth, facebookProvider);
    console.log("User signed in with Facebook:", result.user);
    return result.user;
  } catch (error) {
    console.error("Error signing in with Facebook:", error.message);
  }
};

// LOGIN EMAIL AND PASSWORD
export const signInWithEmail = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential.user;
  } catch (error) {
    console.error("Error signing in with email:", error.message);
    throw error;
  }
};

// REGISTER EMAIL AND PASSWORD
export const registerWithEmail = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    return userCredential.user;
  } catch (error) {
    console.error("Error registering user:", error.message);
    throw error;
  }
};

// LOGOUT
export const logout = async () => {
  try {
    await signOut(auth);
    console.log("User signed out");
  } catch (error) {
    console.error("Error signing out:", error.message);
  }
};
