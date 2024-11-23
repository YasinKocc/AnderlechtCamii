<script type="module">
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.1/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyATgyZMEJIv3wDLkabjC61EgRlEtCj0gFM",
    authDomain: "anderlecht-merkez-camii.firebaseapp.com",
    projectId: "anderlecht-merkez-camii",
    storageBucket: "anderlecht-merkez-camii.appspot.com",
    messagingSenderId: "994023460256",
    appId: "1:994023460256:web:0aa71ec27e62fa24fce8c5",
    measurementId: "G-Q9SF8CT7XL"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
</script>