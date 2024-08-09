import purinFood from './food.jpg';

const contentDiv = document.querySelector('#content');

const pageLoad = () => {
    const titleOfMainPage = document.createElement('h1');
    titleOfMainPage.innerHTML = "Munkleson's Restaurant";

    const imageDiv = document.createElement('div');
    const imageIcon = new Image();
    imageIcon.src = purinFood;
    imageIcon.classList.add('imageIcon');
    imageDiv.appendChild(imageIcon);

    contentDiv.appendChild(titleOfMainPage);
    contentDiv.appendChild(imageDiv);
}




export { pageLoad };