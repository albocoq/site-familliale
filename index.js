import data from './data.js' 

document.addEventListener("DOMContentLoaded", () => {

let template = document.getElementById("template");

data.map((item, index) => {
    // item = les elements, index = nombre d'element

    /**
     * creando el componente dinamico
     */

    const newTemplate = document.createElement("div");
    newTemplate.id = index;
    template.appendChild(newTemplate);

    const newImageFlex = document.createElement("img");
    newImageFlex.className = "image-flex";
    newImageFlex.dataset.direction = item.vertical ? "vertical" : "horizontal";
    newImageFlex.dataset.year = item.year
    newImageFlex.dataset.names = item.person
    newImageFlex.src = item.img;
    newTemplate.appendChild(newImageFlex);

    const newImageText = document.createElement("div");
    newImageText.className = "image-text";
    newTemplate.appendChild(newImageText)

    const newTitle = document.createElement("h2");
    newTitle.innerText = item.title + " " + item.year;
    newTitle.className = item.title;
    newImageText.appendChild(newTitle);

    const newText = document.createElement("h2");
    newText.className = item.title;
    newText.innerText = item.title;
    newImageText.appendChild(newText);

    const newDescription = document.createElement("p");
    newDescription.className = item.title;
    newDescription.innerText = item.text;
    newImageText.appendChild(newDescription);

    const newPerson = document.createElement("p")
    newPerson.className = "person"
    newPerson.innerText = "Figure(nt) sur cette photo: " + item.person
    newImageText.appendChild(newPerson);

    const newDownload = document.createElement("a");
    newDownload.href = item.img
    newDownload.download = item.img
    newDownload.innerText = "Cliquez pour télécharger l'image"
    newImageText.appendChild(newDownload)

    const newRetour = document.createElement("button")
    newRetour.id = "back-btn"
    newRetour.className = "back-btn"
    newRetour.setAttribute('placeholder', 'Mon placeholder');
    newTemplate.appendChild(newRetour)

    template.classList.add("template");

    newTemplate.classList.add("template-div");

    newImageFlex.classList.add("img", "animation")

    newTitle.classList.add("title");

    newText.classList.add("sub-title");

    newDescription.classList.add("text");

    newDownload.classList.add("download");



});

    let images = document.querySelectorAll(".template-div");
    images = [...images];

    images.forEach((item) => {

        let title = item.querySelector(".title")
        let subTitle = item.querySelector(".sub-title")
        let text = item.querySelector(".text")
        let imageText = item.querySelector(".image-text")
        let img = item.querySelector("img");
        let navH1 = document.querySelector("nav h1");
        let nav = document.querySelector("nav");
        let select = document.querySelectorAll("select");
        let download = item.querySelector(".download");
        let retour = item.querySelector(".back-btn");
        let selectText = document.querySelectorAll(".select-text");
        let person = item.querySelector(".person");





        let showImageFunction = function showImage() {
            images.forEach((otherImages) => {
                if (otherImages.id !== item.id) {
                    otherImages.style.display = 'none';
                    item.classList.add("show-image")
                    nav.style.opacity = 0
                    img.classList.remove("show-description", "animation");
                    if (img.dataset.direction === "vertical") {
                        img.classList.add("vertical-img");
                    }
                }
            })
            person.classList.add("show-person");
            download.classList.add("flex");
            title.classList.add("hide");
            select.forEach((select) => {
                select.classList.add("hide-select")
            })
            selectText.forEach((selectText) => {
                selectText.classList.add("hide-select")
            })
            imageText.classList.add("show-image-text")
            subTitle.classList.add("show-sub-title")
            text.classList.add("show-description-text")
            navH1.style.transform = "translateY(-150px)"
            retour.classList.add("show-back-btn")     
        }
        item.addEventListener("click", showImageFunction)

        retour.addEventListener("click", () => {
            images.forEach((otherImages) => {
                if (otherImages.id !== item.id) {
                    otherImages.style.display = "flex";
                    console.log('show-image');
                    otherImages.classList.remove("show-image")
                    console.log('remove-image');
                    img.classList.add("show-description", "animation");
                    if (img.dataset.direction === "vertical") {
                        img.classList.remove("vertical-img");
                    }
                }
            })
            console.log(nav);
            nav.style.opacity = 0.5;
            person.style.display = "none"
            download.style.display = "none"
            title.style.display = "none"
            select.forEach((select) => {
                select.classList.remove("hide-select")
            })
            selectText.forEach((selectText) => {
                selectText.classList.remove("hide-select")
            })
            imageText.style.display = "none"
            subTitle.style.display = "none"
            text.style.display = "none"
            navH1.style.transform = "translateY(150px)"
            retour.style.display = "none"
        })

        // let hideImageFunction = function hideImage() {
        //     download.classList.add("hide");
        //     title.classList.add("block");
        //     select.classList.remove("hide-select")
        //     imageText.classList.remove("show-image-text")
        //     subTitle.classList.remove("show-sub-title")
        //     text.classList.remove("show-description-text")
        //     navH1.style.transform = "translateY(0)"
        //     retour.classList.remove("show-back-btn")
            
        // }

        let isFirefox = typeof InstallTrigger !== 'undefined';

        if (isFirefox ) {
            download.style.textDecoration = "none"
        }
    });


    let cross = document.querySelector(".cross")
    let notif = document.querySelector(".notif")
    let formulaire = document.querySelector(".formulaire")

    cross.addEventListener("click", () => {
        notif.classList.add("hide-notif")
    })
    formulaire.addEventListener("click", () => {
        window.open('formulaire/formulaire.html' , 'formulaire', 'height=800 width=800')
        notif.classList.add("hide-notif")
    })



    const mySelectYear = document.getElementById("mySelectYear");

    mySelectYear.addEventListener("change", function() {
        const selectedValue = this.value;
        images.forEach((otherImages) => {
            if (otherImages.firstChild.dataset.year !== selectedValue) {
                otherImages.style.display = "none"
            } else {
                otherImages.style.display = "block"
            }
        })
    });

    const mySelectName = document.getElementById("mySelectName");

    mySelectName.addEventListener("change", function() {
        const selectedValue = this.value;
        images.forEach((otherImages) => {
            if (otherImages.firstChild.dataset.names.includes(selectedValue) === true) {
                otherImages.style.display = "block"
            } else {
                otherImages.style.display = "none"
            }
        })
    })

    let input = document.querySelector(".input")        

    document.addEventListener("keydown", (e) => {
        let counter = 1
        console.log(e.eventTarget.className);
        if (e.keyCode === 13 && counter === 1) {
            input.classList.add("show-input")
            counter--
            console.log(counter);
        } else if (e.keyCode === 13 && counter === 0) {
            input.classList.remove("show-input")
            counter++
        }
    })
})
