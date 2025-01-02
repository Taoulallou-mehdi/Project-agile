AOS.init();
/* Project Cards */

const projectcards = document.querySelector(".projectcards");

// Array of object for projects
const projects = [
  {
    title: "Services de conception sur mesure",
    cardImage: "assets/images/project-page/1.jpg",
    description: "Nous concevons des modèles 3D uniques adaptés à vos besoins, en transformant vos idées, croquis ou concepts en fichiers prêts à imprimer.",
    tagimg: "",
    Previewlink: "assets/images/project-page/1.jpg",
    Githublink: "https://github.com/Taoulallou-mehdi/Project-agile",
  },
  {
    title: "Services d’assemblage",
    cardImage: "assets/images/project-page/2.jpg",
    description: "Nous assemblons vos pièces imprimées en 3D pour créer des produits fonctionnels, qu’il s’agisse d’assemblages simples ou complexes.",
    tagimg: "",
    Previewlink: "assets/images/project-page/2.jpg",
    Githublink: "https://github.com/Taoulallou-mehdi/Project-agile",
  },
  {
    title: "Services de finition avancée",
    cardImage: "assets/images/project-page/3.jpg",
    description: "Donnez une touche finale parfaite à vos impressions grâce à nos services de polissage, peinture et texturisation personnalisée.",
    tagimg: "",
    Previewlink: "assets/images/project-page/3.jpg",
    Githublink: "https://github.com/Taoulallou-mehdi/Project-agile",
  },
  {
    title: "Services de numérisation et de digitalisation",
    cardImage: "assets/images/project-page/4.jpg",
    description: "Numérisez vos objets physiques en modèles 3D avec une précision exceptionnelle pour les modifier ou les reproduire.",
    tagimg: "",
    Previewlink: "assets/images/project-page/4.jpg",
    Githublink: "https://github.com/Taoulallou-mehdi/Project-agile",
  },
  {
    title: "Services de réparation et de modification",
    cardImage: "assets/images/project-page/5.jpg",
    description: "Nous réparons ou améliorons vos impressions 3D pour qu'elles retrouvent leur fonctionnalité ou leur esthétique d'origine.",
    tagimg: "",
    Previewlink: "assets/images/project-page/5.jpg",
    Githublink: "https://github.com/Taoulallou-mehdi/Project-agile",
  },
  {
    title: "Services de personnalisation des matériaux",
    cardImage: "assets/images/project-page/6.jpg",
    description: " Choisissez parmi une large gamme de matériaux (fibre de carbone, résine flexible, etc.) pour répondre à vos besoins spécifiques.",
    tagimg: "", 
    Previewlink: "assets/images/project-page/6.jpg",
    Githublink: "https://github.com/Taoulallou-mehdi/Project-agile",
  },
  {
    title: "Services d’emballage et de livraison",
    cardImage: "assets/images/project-page/7.jpg",
    description:"Vos impressions 3D sont soigneusement emballées pour garantir une livraison en toute sécurité, où que vous soyez.",
    tagimg: "",
    Previewlink: "assets/images/project-page/7.jpg",
    Githublink: "https://github.com/Taoulallou-mehdi/Project-agile",
  },
  {
    title: "Services de conseil",
    cardImage: "assets/images/project-page/8.jpg",
    description: "Bénéficiez de notre expertise pour évaluer la faisabilité de vos projets et intégrer l’impression 3D dans votre flux de travail.",
    tagimg: "",
    Previewlink: "assets/images/project-page/8.jpg",
    Githublink: "https://github.com/Taoulallou-mehdi/Project-agile",
  },
  {
    title: "Licences et stockage numérique",
    cardImage: "assets/images/project-page/9.jpg",
    description:"Nous stockons vos fichiers 3D en toute sécurité et proposons des licences exclusives pour des designs uniques.",
    tagimg: "",
    Previewlink: "assets/images/project-page/9.jpg",
    Githublink: "https://github.com/Taoulallou-mehdi/Project-agile",
  },
  {
    title: "Services de validation des prototypes",
    cardImage: "assets/images/project-page/10.jpg",
    description: "Testez vos prototypes pour garantir leur précision dimensionnelle et leur capacité à répondre aux contraintes fonctionnelles.",
    tagimg: "",
    Previewlink: "assets/images/project-page/10.jpg",
    Githublink: "https://github.com/Taoulallou-mehdi/Project-agile",
  },
  {
    title: "Services de correspondance des couleurs",
    cardImage: "assets/images/project-page/11.jpg",
    description: "Faites correspondre vos impressions 3D aux codes de couleurs ou aux directives spécifiques de votre marque.",
    tagimg:"",
    Previewlink: "assets/images/project-page/11.jpg",
    Githublink: "https://github.com/Taoulallou-mehdi/Project-agile",
  },
  {
    title: "Produits personnalisés",
    cardImage: "assets/images/project-page/12.jpg",
    description: "Créez des objets uniques avec des gravures ou des embossages pour des cadeaux ou des projets spéciaux.",
    tagimg: "",
    Previewlink: "assets/images/project-page/12.jpg",
    Githublink: "https://github.com/Taoulallou-mehdi/Project-agile",
  },
];

// function for rendering project cards data
const showCards = () => {
  let output = "";
  projects.forEach(({ title, cardImage, Previewlink, Githublink }) => {
    output += `       
        <div class="column skill-card card" style="margin: 15px"data-aos="zoom-in-up" data-aos-easing="linear" data-aos-delay="300" data-aos-duration="600" >
          <div class="wrapper" style="background: url(${cardImage}) center / cover no-repeat;">
            <div class="header">
            </div>
            <div class="data">
              <div class="content">
              <div class="title-div">
                <h1 class="title"><a href="#">${title}</a></h1>
                </div>
            <ul class="menu-content"><br>
                  <li><a href="${Previewlink}" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-monitor"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg></a></li>
                  <li><a href="${Githublink}" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>`;
  });
  projectcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

function myFunction() {
  // Declare variables
  var input, button, i, skillcard, card, title;
  input = document.getElementById("myInput").value;
  input = input.toUpperCase();
  skillcard = document.getElementsByClassName("skill-card");
  card = document.getElementsByClassName("card");
  title = document.getElementsByClassName("title");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < button.length; i++) {
    if (
      button[i].innerHTML.toUpperCase().includes(input) ||
      title[i].innerHTML.toUpperCase().includes(input)
    ) {
      skillcard[i].style.display = "";
      card[i].style.display = "";
    } else {
      skillcard[i].style.display = "none";
      card[i].style.display = "none";
    }
  }
}
