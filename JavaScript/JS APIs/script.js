const API_URL = "https://v2.jokeapi.dev/joke/Dark";
async function getJoke() {
    

const response = await fetch(API_URL);
const res = await response.json();

document.getElementById("setup").innerText = res.joke || res.setup;
document.getElementById("delivery").innerText = res.delivery || "";

}

document.getElementById("getJoke").addEventListener('click',getJoke);