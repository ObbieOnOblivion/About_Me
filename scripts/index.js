
// items

const aboutMeContent = [
    {
        src: "./images/Bitcoin.svg.png",
        title: "Bitcoin",
        description: `Well lets start from the begining. The first thing that ever caught my attention when 
        i was younger was networking and coding. Eventually i stopped coding and networking related things 
        and Webull caught my attention. I learned about Fundamental Analysis and Technical Analysis of Stocks. 
        On webull i learned of Bitcoin. I took a trade and found that it behaves very differently and that got my 
        interest in bitcoin and everything that its about down to the networking concepts. Thats what bought me back to 
        programmig and here i am today.`
    },
    {
        src: "./images/logo-javascriptsss.svg",
        title: "Software Development",
        description: `So when i was 15, i started dabbling in python code. I learned python by 
        going through youtube. I learned about objects, classes, vars and iterations. Fastforward to today
        Software Developement caught my attention. I didnt hesitate to take a bootcamp at practicum and 
        fell on a cluster of information and mentorship. `
    },

    {
        src: "./images/Reimagining-the-Chevy-Logo-a_o.webp",
        title: "Favorite/Dream Car",
        description: `Omerica!!! My favorite brand is chevy. My favorite cars from the would be the Silverado 1500 zR2 and 
        the Camaro zl1 1le. To me its very impressive that chevy can make a track weapon on the streets for less than 80k 
        and on the used markets for around 65k.`
    }

]

const resumeContent = [
    {
        src: "./images/Bitcoin.svg.png",
        title: "swish swish",
        description: "swedish fish is the ish"
    }
]

const navigation = document.querySelector(".navigation");

const resumeButton = navigation.querySelector("#qualifications");

const aboutMeButton = navigation.querySelector("#about-me");

const contactButton = document.querySelector(".footer__contact");

const modal = document.querySelector(".modal");

const modalForm = document.querySelector(".modal__form");

const contactCloseButton = modalForm.querySelector(".modal__close_btn");

const cards = document.querySelector(".gallery__cards");

const card = document.querySelector("#template").content.firstElementChild;

console.log(card);

function createCards(CardInfo){
    
    items = cards.querySelectorAll(".gallery__card");
    
    for (const item of items) {
        item.remove();
    }
    
    for (i=0; i < CardInfo.length; i++){
        const cardElement = card.cloneNode(true); // take notes on this 
        const cardImage = cardElement.querySelector(".galley__card-img");
        const cardTitle = cardElement.querySelector(".gallery__card-header");
        const cardDescription = cardElement.querySelector(".gallery__card-paragraph");
        cardImage.src = CardInfo[i].src;
        cardTitle.innerHTML = CardInfo[i].title;
        cardDescription.innerHTML = CardInfo[i].description;

        cards.prepend(cardElement);
        
    }
}

createCards(aboutMeContent)

// eventListeners

modal.addEventListener("click", (e)=>{
    if(e.target.classList.contains("modal")){
        modal.classList.remove("modal_open");
    }
})

resumeButton.addEventListener("click", () => {
    createCards(resumeContent)
})

aboutMeButton.addEventListener("click", () =>{
    createCards(aboutMeContent)

})

contactButton.addEventListener("click", () => {
    modal.classList.add("modal_open");

})

document.addEventListener("keydown", (e)=>{
    if (e.key = "esc"){
        modal.classList.remove("modal_open");
    }

})

contactCloseButton.addEventListener("click", (e) => {
    e.preventDefault()
    modal.classList.remove("modal_open")
})


