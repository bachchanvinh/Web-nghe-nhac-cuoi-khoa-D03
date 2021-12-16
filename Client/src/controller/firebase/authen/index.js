import * as authfire from "firebase/auth";//getAuth, createUserWithEmailAndPassword
import { addDataUser } from "../firestore";
import { upLoadphoto } from "../storage";

const auth = authfire.getAuth();
export const signupFunc = (email, password, username, imgfile) => {
    authfire.createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;

            upLoadphoto(user.uid, imgfile).then((res) => {
                addDataUser(username, res, user.uid)
            })
            // 
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode)
            console.log(errorMessage)
            // return errorCode
        });
}


export const signinFunc = (email, password) => {

    return authfire.signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            console.log(user)
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(typeof errorCode === "string")
            console.log(errorMessage)

            return errorCode
        })


}
