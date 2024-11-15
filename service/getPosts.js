import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "@/connection/firebaseConfig";
async function fetchPosts() {
  const snapshot = await getDocs(collection(db, "my-blog"));
  const posts = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return posts;
}

export const fetchPostById = async (id) => {
  const docSnap = await getDoc(doc(db, "my-blog", id));
  return docSnap.exists() ? { id: docSnap.id, ...docSnap.data() } : null;
};

export default fetchPosts;
