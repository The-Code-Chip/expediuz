import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBQOLRWePgDeIoHFPq6Wjl87A5VD-VJdvk",
    authDomain: "expediuz-thecodechip.firebaseapp.com",
    projectId: "expediuz-thecodechip",
    storageBucket: "expediuz-thecodechip.appspot.com",
    messagingSenderId: "221027561245",
    appId: "1:221027561245:web:45c65eddc1c96182507bf4",
    measurementId: "G-K4YW1PMNJ4"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const provider = new GoogleAuthProvider();

const SignInWithGoogle = () => {
    signInWithPopup(auth, provider).then((result) => {
        const UserName = result.user.displayName;
        const UserEmail = result.user.email;
        const UserProfilePic = result.user.photoURL;

        localStorage.setItem("UserName", UserName);
        localStorage.setItem("UserEmail", UserEmail);
        localStorage.setItem("UserProfilePic", UserProfilePic);

    }).catch((error) =>{
        alert(error)
        console.log(error);
    });
}