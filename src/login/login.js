

const CLIENT_ID = "d9e6c1bb271e4f1d8be1695dd6a3acdb";
const scopes ="user-top-read user-follow-read playlist-read-private user-library-read"
const REDIRECT_URI = "http://localhost:3000/login/login.html";

const authorizeUser = ()=>{
    const url = `https://accounts.spotify.com/authorize?client_id=${CLIENT_ID}&response_type=token&redirect_uri=${REDIRECT_URI}&scope=${scopes}&show_dialog=true`;
    window.open(url,"login","width=800,height=600");

}

document.addEventListener("DOMContentLoaded",()=>{
    const loginButton = document.getElementById("login-to-spotify");
    loginButton.addEventListener("click",authorizeUser);


})