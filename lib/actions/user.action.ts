"use server";

import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  query,
  setDoc,
  updateDoc,
  where,
} from "firebase/firestore";
import { db } from "../firebase";
import { revalidatePath } from "next/cache";
import { utapi } from "@/server/uploadthing";

export async function createUser({ clerkId, name, email, picture }: any) {
  try {
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

export async function addProject({
  title,
  description,
  imageUrl,
  userId,
  path,
}: any) {
  try {
    const project = await addDoc(collection(db, "Projects"), {
      title: title,
      description: description,
      imageUrl: imageUrl,
      userId: userId,
    });
    revalidatePath(path);
    //toast
    return project.id;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function updateProject({
  title,
  description,
  imageUrl,
  userId,
  projectId,
  path,
}: any) {
  try {
    const project = await updateDoc(doc(db, "Projects", projectId), {
      title: title,
      description: description,
      imageUrl: imageUrl,
      userId: userId,
    });
    revalidatePath(path);
    return project;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getProjects({ userId }: any) {
  const projectRef = collection(db, "Projects");

  // Create a query against the collection.
  const q = query(projectRef, where("userId", "==", `${userId}`));
  try {
    const querySnapshot = await getDocs(q);
    const result: any = [];
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      const values = doc.data();

      result.push({ ...values, id: doc.id });
    });
    //toast
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

function getFileName(url: string) {
  return url.substring(url.lastIndexOf("/") + 1);
}

export async function deleteProjectWithId({
  id,
  imageId,
  path,
}: {
  id: string;
  imageId: string;
  path: string;
}) {
  try {
    await utapi.deleteFiles([`${getFileName(imageId)}`]);
    const result = await deleteDoc(doc(db, "Projects", `${id}`));
    revalidatePath(path);
    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
