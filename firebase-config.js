import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// 🔐 Nueva configuración Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCm0Qs37XjolZzhPrA8Yg5GPHdRe081rvw",
  authDomain: "santapolapd.firebaseapp.com",
  projectId: "santapolapd",
  storageBucket: "santapolapd.firebasestorage.app",
  messagingSenderId: "20230073687",
  appId: "1:20230073687:web:f3b86467705cad8380a212",
  measurementId: "G-BGXRW3Y2H9"
};

// Inicializar Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Login
document.getElementById("loginBtn").addEventListener("click", () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const errorDiv = document.getElementById("error");

  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      window.location.href = "accesoConcedido.html";
    })
    .catch(() => {
      errorDiv.textContent = "Email o contraseña incorrectos";
    });
});