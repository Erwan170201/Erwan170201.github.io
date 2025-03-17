// Vérifier si l'utilisateur est authentifié avant d'accéder à index.html
if (window.location.pathname.includes("index.html")) {
    if (localStorage.getItem("authenticated") !== "true") {
        window.location.href = "login.html"; // Redirige vers la page de connexion
    }
}
// Fonction de connexion
function checkLogin(event) {
    event.preventDefault();

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let errorMessage = document.getElementById("error-message");

    if (username === validUsername && password === validPassword) {
        localStorage.setItem("authenticated", "true");
        window.location.href = "index.html"; // Redirige vers la page principale
    } else {
        errorMessage.textContent = "Nom d'utilisateur ou mot de passe incorrect.";
    }
}

// Liste des pays par continent
const countries = {
    europe: {
        title: "Europe",
        list: {
            "France": "pdf/france.pdf",
            "Allemagne": "pdf/allemagne.pdf",
            "Italie": "pdf/italie.pdf"
        }
    },
    afrique: {
        title: "Afrique",
        list: {
            "Maroc": "pdf/maroc.pdf",
            "Sénégal": "pdf/senegal.pdf",
            "Afrique du Sud": "pdf/afrique-du-sud.pdf"
        }
    },
    amerique: {
        title: "Amérique",
        list: {
            "USA": "pdf/usa.pdf",
            "Canada": "pdf/canada.pdf",
            "Brésil": "pdf/bresil.pdf"
        }
    },
    asie: {
        title: "Asie",
        list: {
            "Chine": "pdf/chine.pdf",
            "Japon": "pdf/japon.pdf",
            "Inde": "pdf/inde.pdf"
        }
    },
    oceanie: {
        title: "Océanie",
        list: {
            "Australie": "pdf/australie.pdf",
            "Nouvelle-Zélande": "pdf/nouvelle-zelande.pdf"
        }
    }
};

// Fonction pour afficher la liste des pays sous le menu des continents
function showCountries(continent) {
    document.getElementById("continent-title").innerText = countries[continent].title;
    
    const countryList = document.getElementById("country-list");
    countryList.innerHTML = "";

    for (let country in countries[continent].list) {
        let li = document.createElement("li");
        li.innerText = country;
        li.onclick = () => window.open(countries[continent].list[country], "_blank");
        countryList.appendChild(li);
    }

    document.getElementById("countries").classList.remove("hidden");
}
// Identifiants valides
const validUsername = "admin";
const validPassword = "1234";

// Vérifie si l'utilisateur est déjà connecté
if (window.location.pathname.includes("index.html")) {
    if (localStorage.getItem("authenticated") !== "true") {
        window.location.href = "login.html"; // Redirige vers la connexion
    }
}

