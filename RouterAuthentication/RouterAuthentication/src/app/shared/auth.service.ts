import { User } from './user.interface';

declare  var firebase:any;
export class AuthService{
    signupUser(user: User){
        firebase.auth().createUserWithEmailAndPassword(user.email, user.password).catch(function(error) {
            console.log(error);
});
    }

    signinUser(user: User){
        firebase.auth().signInWithEmailAndPassword(user.email, user.password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});
    }
logout(){
    firebase.auth().signOut();
}


    isAuthenticated(){
        var user = firebase.auth().currentUser;

if (user) {
  return true;
} else {
  return false;
}
    }

}