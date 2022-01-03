"use strict";

let dataPrincess = [];

const containerElement = document.querySelector(".js-user-list");

const getApi = () => {
  fetch("./data/users.json")
    .then((response) => response.json())
    .then((data) => {
      dataPrincess = data;
      console.log(dataPrincess);
      paintDataPrincess();
    });
};

const handlerClick = (eve) =>{
const currentTarget = eve.currentTarget;
currentTarget.classList.toggle('style');
}

const paintDataPrincess = () => {
    containerElement.textContent = '';
  for (const princess of dataPrincess) {
    const createContenedor = document.createElement("article");
    createContenedor.className = "article js-click";
    const createDiv = document.createElement("div");
    createDiv.className = "div";
    const createImg = document.createElement("img");
    createImg.className = "img";
    createImg.src = `${princess.picture}`;

    const createTitle = document.createElement("h3");
    createTitle.className = "title";
    createTitle.textContent = `${princess.name}`;

    const createText = document.createElement("p");
    createText.className = "text";
    createText.textContent = `${princess.comment}`;
    createDiv.appendChild(createImg);
    createDiv.appendChild(createTitle);
    createContenedor.appendChild(createDiv);
    createContenedor.appendChild(createText);
    containerElement.appendChild(createContenedor);
  }
  listenerEvent();
};

const listenerEvent = () =>{
    const element = document.querySelectorAll('.js-click');
    for(const item of element)
    item.addEventListener('click', handlerClick);
}

getApi();
