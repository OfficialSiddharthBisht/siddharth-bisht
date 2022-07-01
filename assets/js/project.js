AOS.init();
/* Project Cards */

const projectcards = document.querySelector(".projectcards");

// Array of object for projects
const projects = [
  {
    title: "Lumen 5 Clone",
    cardImage: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F50wheel.com%2Fwp-content%2Fuploads%2F2018%2F05%2Flumen5-3.png&f=1&nofb=1",
    description: "Lumen5 is a video creation platform designed for brands and businesses to produce social video content for driving audience engagements online. The platform is powered by artificial intelligence and enables anyone without training or experience to easily create engaging video content within minutes.",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "https://officialsiddharthbisht.github.io/Lumen5-Video-Maker-Clone/",
    Githublink: "https://github.com/OfficialSiddharthBisht/Lumen5-Video-Maker-Clone",
  },
  {
    title: "Discovery+ Clone",
    cardImage: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.dBgoyEfYljjeyDFAxa-twwHaEU%26pid%3DApi&f=1",
    description: "Your favorite shows + personalities + exclusive originals, together in one incredible service. Start streaming now.",
    tagimg: "https://image.flaticon.com/icons/png/512/643/643350.png",
    Previewlink: "https://officialsiddharthbisht.github.io/Discovery-Clone/",
    Githublink: "https://github.com/OfficialSiddharthBisht/Discovery-Clone",
  },
  {
    title: "Expedia Travel",
    cardImage: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.Y2gvAVgkMcupwaefIabawQHaE6%26pid%3DApi&f=1",
    description: "Your one-stop travel site for your dream vacation. Bundle your stay with a car rental or flight and you can save more.",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "https://officialsiddharthbisht.github.io/Expedia-Travel-Clone/",
    Githublink: "https://github.com/OfficialSiddharthBisht/Expedia-Travel-Clone",
  },
  {
    title: "Tesla Clone",
    cardImage: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.f9OvjIR-m7YLjEqv-wJL-QHaJq%26pid%3DApi&f=1",
    description: "Tesla is accelerating the world's transition to sustainable energy with electric cars, solar and integrated renewable energy solutions for homes and businesses.",
    tagimg: "https://miro.medium.com/max/2800/0*U2DmhXYumRyXH6X1.png",
    Previewlink: "https://officialsiddharthbisht.github.io/tesla-clone/",
    Githublink: "https://github.com/OfficialSiddharthBisht/tesla-clone",
  },
  {
    title: "Weather App",
    cardImage: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.1VkjnHLGX38a5zirASIYWAHaFj%26pid%3DApi&f=1",
    description: "Search For Any City For Weather",
    tagimg: "https://miro.medium.com/max/2800/0*U2DmhXYumRyXH6X1.png",
    Previewlink: "https://officialsiddharthbisht.github.io/summer-project-weather-app/",
    Githublink: "https://github.com/OfficialSiddharthBisht/summer-project-weather-app",
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
                <h4 class="title"><a href="#">${title}</a></h4>
                </div>
            <ul class="menu-content"><br>
                  <li><a href="${Previewlink}" target = "_blank" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-monitor"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg></a></li>
                  <li><a href="${Githublink}" target = "_blank" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a></li>
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
