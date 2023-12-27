"use server";

import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";

export async function createUser({ clerkId, name, email, picture }: any) {
  try {
    console.log("exist : false");
    const user = await setDoc(doc(db, "users", clerkId), {
      id: clerkId,
      email: email,
      profilePic: picture,
      userName: name,
      friends: [],
    });
    return user;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
