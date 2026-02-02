import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";
import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBPr8ZmxwYLyH1j8EygyMH78_4fAyu0xFo",
  authDomain: "tsjcatrp.firebaseapp.com",
  projectId: "tsjcatrp",
  storageBucket: "tsjcatrp.firebasestorage.app",
  messagingSenderId: "858193188422",
  appId: "1:858193188422:web:3b5118e1022a44faad9c47"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

window.protegerRuta = function (rolesPermitidos = []) {
  onAuthStateChanged(auth, async (user) => {
    if (!user) {
      window.location.href = "/modulo_acceso/identificacion.jsp";
      return;
    }

    const snap = await getDoc(doc(db, "users", user.uid));
    if (!snap.exists()) {
      window.location.href = "/modulo_acceso/controlador.html";
      return;
    }

    const rolesUsuario = snap.data().role || [];

    const autorizado = rolesPermitidos.some(r => rolesUsuario.includes(r));

    if (!autorizado) {
      alert("No tiene permisos para acceder a esta sección");
      window.location.href = "/modulo_acceso/controlador.html";
    }
  });
};
