// Exemple de script simple pour améliorer l'expérience utilisateur
document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
    alert("Votre message a été envoyé !");
});

//Débuts de sections

var header = document.getElementById("navigation");
const about = document.getElementById("apropos");
const evenements = document.getElementById("evenements");
const logements = document.getElementById("logements");
const attractions = document.getElementById("attractions");
const restaurants = document.getElementById("restaurants");
const scrolled=document.querySelector('.scrolled')
window.addEventListener('scroll', () => {
    const { scrollTop, clientHeight } = document.documentElement;
    const TopElemToToview1 = about.getBoundingClientRect().top;
    const TopElemToToview2 = evenements.getBoundingClientRect().top;
    const TopElemToToview3 = logements.getBoundingClientRect().top;
    const TopElemToToview4 = attractions.getBoundingClientRect().top;
    const TopElemToToview5 = restaurants.getBoundingClientRect().top;
    if (scrollTop > (scrollTop + TopElemToToview1).toFixed()-clientHeight*0.2) {
        header.classList.add("scrolled");
        header.style.backgroundColor= "#000000";
    }
    else {
        header.classList.remove("scrolled");
        header.style.backgroundColor= "#00000000";
    }
    if (scrollTop > (scrollTop + TopElemToToview2).toFixed()-clientHeight*0.2) {
        header.style.backgroundColor= "#ad7726";
        header.style.backdropFilter= "none";
    }
    if (scrollTop > (scrollTop + TopElemToToview3).toFixed()-clientHeight*0.2) {
        header.style.backgroundColor= "#00000000";
        header.style.backdropFilter= "blur(10px)";
    }
    if (scrollTop > (scrollTop + TopElemToToview4).toFixed()-clientHeight*0.2) {
        
        header.style.backdropFilter= "none";
        header.style.backgroundColor= "#AB6D44";
        
    }
    if (scrollTop > (scrollTop + TopElemToToview5).toFixed()-clientHeight*0.2) {
        header.style.backgroundColor= "#000f15";
    }
})
console.log(scrolled);

// Menu burger
var menu = document.getElementById("moovenav");
var openBtn = document.getElementById("tooglenav");
openBtn.addEventListener('click', function (event) {
    menu.classList.toggle('active-menu');
    openBtn.classList.toggle('closeMenu');
})

var searchIcon = document.querySelector('.search .fa-search');
var searchBar = document.getElementById("searchBar");
searchIcon.addEventListener('click', function (event) {
    searchBar.classList.toggle('active-search');
})


// Section logement
const arrowleft = document.querySelector('.pass .fa-arrow-left');
const arrowright = document.querySelector('.pass .fa-arrow-right');

arrowright.addEventListener('click', () => {
    let cards = document.querySelectorAll('.hotels');
    document.querySelector('.tops-hotels').appendChild(cards[0]);
});

arrowleft.addEventListener('click', () => {
    let cards = document.querySelectorAll('.hotels');
    document.querySelector('.tops-hotels').prepend(cards[cards.length - 1]);
});

// Section attractions
attr =document.querySelectorAll('.imgs-attractions img');
function updateZIndex(clickedBox) {
    // Remet les z-index à 1 et 2 pour tous les éléments
    attr.forEach((box, index) => {
        box.style.zIndex = 1; // z-index: 1, 2, 3
    });

    // Met le z-index de l'élément cliqué à 3
    clickedBox.style.zIndex = 3;
}
descript=document.querySelector('.description');

const texts = [
    '<div class="name">Le Musée des Traditions d\'O\'Kutoun</div><div class="atrText">Le Musée des Traditions d\'O\'Kutoun est un lieu incontournable pour découvrir l\'histoire et la culture ancestrale de la région. Situé au cœur de la ville, ce musée présente une vaste collection d\'objets traditionnels, de sculptures, de textiles et d\'artefacts retraçant le riche patrimoine culturel d\'O\'Kutoun. Les visiteurs peuvent également participer à des ateliers interactifs pour apprendre les techniques artisanales locales.</div><button>En savoir plus</button>',
    '<div class="name">La Place de l\'Étoile</div><div class="atrText">La Place de l\'Étoile est une grande place centrale d’O\'Kutoun, connue pour son étoile géante au sol, symbole de l\'unité et de la prospérité de la ville. Autour de la place, de grands bâtiments modernes et historiques se côtoient, et la place est souvent utilisée pour des festivals, concerts, et événements publics importants.</div><button>En savoir plus</button>',
    '<div class="name">Le Temple des Pythons</div><div class="atrText">Le Temple des Pythons est un site sacré emblématique d’O\'Kutoun, célèbre pour abriter des pythons royaux vénérés par la communauté locale. Le temple, construit avec des pierres anciennes et orné de gravures mystiques, est entouré de végétation dense et de rivières, créant un cadre paisible pour les visiteurs curieux d’en apprendre plus sur les traditions spirituelles de la ville.</div><button>En savoir plus</button>',
];

attr.forEach((box,indic) => {
    box.addEventListener('click', function() {
        updateZIndex(this); // Met à jour les z-index lorsque l'élément est cliqué
        descript.innerHTML = texts[indic];
    });
});

console.log(attr);


//Section restaurant
const resImg = document.querySelectorAll('.restos .img article');
const resDes = document.querySelectorAll('.restos .des article');
var slideIndex = 0;

function changeResto() {
    resImg.forEach((img) => {
        img.style.transform = `translateY(${-slideIndex * 100}%)`;
    });
    resDes.forEach((des) => {
        des.style.transform = `translateY(${-(3 - slideIndex) * 100}%)`;
    });
    slideIndex = (slideIndex + 1) % resImg.length;
}
changeResto();
setInterval(changeResto, 10000);