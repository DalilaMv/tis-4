import app from 'firebase/app';
import 'firebase/firestore';


const config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
};


export default class FirebaseService {


    constructor() {

        app.initializeApp(config);
        this.db = app.firestore();

    }

    login_email(email, senha) {

        app.auth().setPersistence(app.auth.Auth.Persistence.SESSION)
            .then(function () {
                // Existing and future Auth states are now persisted in the current
                // session only. Closing the window would clear any existing state even
                // if a user forgets to sign out.
                // ...
                // New sign-in will be persisted with session persistence.
                return app.auth().signInWithEmailAndPassword(email, senha);
            })
            .catch(function (error) {
                // Handle Errors here.

                alert(error.message);
            });


    }

     async getUser() {
         return await app.auth().currentUser;
     };


}
