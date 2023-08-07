
// items

const cardContent = [
    {
        src: "./images/Bitcoin.svg.png",
        title: "Bitcoin",
        description: `Lorem ipsum odor amet, consectetuer adipiscing elit. 
        Sodales porttitor adipiscing condimentum volutpat viverra curabitur placerat. Molestie 
        risus ipsum ante blandit odio fringilla placerat nostra rhoncus. Pellentesque lacus 
        velit semper odio massa accumsan mattis aliquet. Viverra taciti nascetur nascetur leo 
        aenean convallis. Ac ultricies felis aliquet volutpat inceptos. Sit efficitur tempor 
        gravida neque condimentum volutpat cursus fusce augue. Aptent praesent suscipit turpis 
        purus integer. Curabitur dictum nullam at dictumst fermentum primis sociosqu.`
    }

]

const navigation = document.querySelector(".navigation");

const resumeButton = navigation.querySelector("#qualifications");

const contactButton = document.querySelector(".footer__contact");

const modal = document.querySelector(".modal");

const modalForm = document.querySelector(".modal__form");

const contactCloseButton = modalForm.querySelector(".modal__close_btn");

const cards = document.querySelector(".gallery__cards");

const card = document.querySelector("#template").content.firstElementChild;


console.log(card) 

for (i=0; i < cardContent.length; i++){
    const cardElement = card.cloneNode(true); // take notes on this 
    const cardImage = cardElement.querySelector(".galley__card-img");
    const cardTitle = cardElement.querySelector(".gallery__card-header");
    const cardDescription = cardElement.querySelector(".gallery__card-paragraph");
    cardImage.src = cardContent[i].src;
    cardTitle.innerHTML = cardContent[i].title;
    cardDescription.innerHTML = cardContent[i].description;

    console.log(cardContent[i]);
    cards.prepend(cardElement);
}

// eventListeners
resumeButton.addEventListener("click", () => {
    // const cardElement = card.cloneNode(true); // take notes on this 
    // cards.prepend(cardElement)

})

contactButton.addEventListener("click", () => {
    console.log("contact")
    modal.classList.add("modal_open")

})

contactCloseButton.addEventListener("click", (e) => {
    e.preventDefault()
    modal.classList.remove("modal_open")
})

