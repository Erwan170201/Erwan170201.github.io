// Identifiants valides
const validUsername = "admin";
const validPassword = "1234";

// Fonction pour vérifier la connexion
function checkLogin(event) {
    event.preventDefault(); // Empêche le rechargement de la page

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let errorMessage = document.getElementById("error-message");

    if (username === validUsername && password === validPassword) {
        // Stocker l'information de connexion
        localStorage.setItem("authenticated", "true");
        window.location.href = "index.html"; // Redirection vers la page principale
    } else {
        errorMessage.textContent = "Nom d'utilisateur ou mot de passe incorrect.";
    }
}

// Vérifier si l'utilisateur est authentifié avant d'accéder à index.html
if (window.location.pathname.includes("index.html")) {
    if (localStorage.getItem("authenticated") !== "true") {
        window.location.href = "login.html"; // Redirige vers la page de connexion
    }
}
const countries = {
    "europe": {
        title: "Europe",
        list: {
            "France": "pdf/france.pdf",
            "Allemagne": "pdf/allemagne.pdf",
            "Italie": "pdf/italie.pdf"
        }
    },
    "afrique": {
        title: "Afrique",
        list: {
            "Maroc": "pdf/maroc.pdf",
            "Sénégal": "pdf/senegal.pdf",
            "Afrique du Sud": "pdf/afrique-du-sud.pdf"
        }
    },
    "amerique": {
        title: "Amérique",
        list: {
            "USA": "pdf/usa.pdf",
            "Canada": "pdf/canada.pdf",
            "Brésil": "pdf/bresil.pdf"
        }
    },
    "asie": {
        title: "Asie",
        list: {
            "Chine": "pdf/chine.pdf",
            "Japon": "pdf/japon.pdf",
            "Inde": "pdf/inde.pdf"
        }
    },
    "oceanie": {
        title: "Océanie",
        list: {
            "Australie": "pdf/australie.pdf",
            "Nouvelle-Zélande": "pdf/nouvelle-zelande.pdf"
        }
    }
};

function showCountries(continent) {
    document.getElementById("continents").classList.add("hidden");
    document.getElementById("countries").classList.remove("hidden");

    const continentData = countries[continent];
    document.getElementById("continent-title").innerText = continentData.title;

    const countryList = document.getElementById("country-list");
    countryList.innerHTML = "";

    for (let country in continentData.list) {
        let li = document.createElement("li");
        li.innerText = country;
        li.onclick = () => window.open(continentData.list[country], "_blank");
        countryList.appendChild(li);
    }
}

function goBack() {
    document.getElementById("countries").classList.add("hidden");
    document.getElementById("continents").classList.remove("hidden");
}
