import { User } from "./class.js";

const form = document.getElementById("form");

form.addEventListener("submit", (e) => {

    e.preventDefault();

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const user = new User(username, email, password);

    console.log(user);
});