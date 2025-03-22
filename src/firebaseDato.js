
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, getDoc, doc } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDmtg39ZmcSXg0soujFWMc4yif79HSJ_Sg",
  authDomain: "clazado-react.firebaseapp.com",
  projectId: "clazado-react",
  storageBucket: "clazado-react.firebasestorage.app",
  messagingSenderId: "218988331443",
  appId: "1:218988331443:web:fb823aa56b5da4274f8bc6"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export const obtenerProductos = async () => {
  try {
    const productosCol = collection(db, "productos");
    const productoSnapshot = await getDocs(productosCol);
    const productosList = productoSnapshot.docs.map((doc) => ({
      id: doc.id, 
      ...doc.data(), 
    }));
    return productosList;
  } catch (error) {
    console.error("Error obteniendo productos: ", error);
    return [];
  }
};


export { db, collection, getDocs, getDoc, doc };