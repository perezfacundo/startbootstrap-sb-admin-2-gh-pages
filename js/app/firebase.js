import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";

import {
    getFirestore, //adquiere la funcionalidad de usar la base de datos
    collection, //base de datos no relacional
    addDoc, //agregar registro a tabla
    getDocs, //traer lista de registros de la tabla
    deleteDoc, //eliminar registro de la base de datos
    onSnapshot, //instantánea de la db
    doc, //buscar registro en la tabla
    getDoc, //traer registro de la tabla
    updateDoc, //actualizar registro en la tabla
} from "https://www.gstatic.com/firebasejs/10.13.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyDRoOmhfS0hjyLadwl967RzZNnMdAgjt_g",
    authDomain: "js-coder-40f5f.firebaseapp.com",
    projectId: "js-coder-40f5f",
    storageBucket: "js-coder-40f5f.appspot.com",
    messagingSenderId: "857784251830",
    appId: "1:857784251830:web:7579ecc4e1fbd2bad2fd17"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const saveCyclist = (firstName, lastName, email, birthdate, category) =>
    addDoc(collection(db, 'cyclists'), {firstName, lastName, email, birthdate, category})


