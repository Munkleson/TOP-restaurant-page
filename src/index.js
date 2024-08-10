import './styles.css';
import { removeAllElements, pageLoad, homeObject, menu, about, contentDiv } from './pageLoad';

pageLoad();

const homeButton = document.querySelector('.homeButton');
const menuButton = document.querySelector('.menuButton');
const aboutButton = document.querySelector('.aboutButton');



homeButton.addEventListener('click', () => {
    removeAllElements();

    const titleOfMainPage = document.createElement('h1');
    titleOfMainPage.innerHTML = homeObject.headText;

    const imageDiv = document.createElement('div');
    const imageIcon = new Image();
    imageIcon.src = homeObject.image;
    imageIcon.classList.add('imageIcon');
    imageDiv.appendChild(imageIcon);

    const mainPageTextDiv = document.createElement('p');
    mainPageTextDiv.innerHTML = homeObject.bodyText;

    contentDiv.appendChild(titleOfMainPage);
    contentDiv.appendChild(imageDiv);
    contentDiv.appendChild(mainPageTextDiv);
});

menuButton.addEventListener('click', () => {
    removeAllElements();

    const menuTitle = document.createElement('h1');
    menuTitle.innerHTML = menu.headText;
    contentDiv.appendChild(menuTitle);

    for (const element of menu.menuItems) {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('menuItem');
        contentDiv.appendChild(itemDiv);

        const itemName = document.createElement('p');
        itemName.innerHTML = "Name: " + element.name;
        itemDiv.appendChild(itemName);

        const itemPrice = document.createElement('p');
        itemPrice.innerHTML = "Price: " + element.price;
        itemDiv.appendChild(itemPrice);

        const itemRating = document.createElement('p');
        itemRating.innerHTML = "Rating: " + element.rating;
        itemDiv.appendChild(itemRating);
    }
});

aboutButton.addEventListener('click', () => {
    removeAllElements();

    const headText = document.createElement('h1');
    headText.innerHTML = about.headText;
    contentDiv.appendChild(headText);

    const subText = document.createElement('p');
    subText.innerHTML = about.subText;
    contentDiv.appendChild(subText);

    const bodyText = document.createElement('p');
    bodyText.innerHTML = about.bodyText;
    contentDiv.appendChild(bodyText);
});







