import purinFood from './food.jpg';

const homeObject = {
    headText: "Munkleson's restaurant",
    image: purinFood,
    bodyText: "This is my restaurant. I like cooking parakeets, especially rainbow budgees"
};

const menu = {
    headText: "Today's menu",
    menuItems: [
        {
            name: "Rainbow budgee",
            price: "$20",
            rating: "5/5"
        },
        {
            name: "Rainbow Lorikeet",
            price: "$40",
            rating: "10/5"  
        },
        {
            name: "Toucan",
            price: "$100",
            rating: "rare/5"
        }
    ],
};

const about = {
    headText: "About my restaurant",
    subText: "Lorem ipsum",
    bodyText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
};

const contentDiv = document.getElementById('content');

const removeAllElements = () => {
    while(contentDiv.hasChildNodes()){
        contentDiv.removeChild(contentDiv.firstChild);
    }
};

const pageLoad = () => {
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
}

export { removeAllElements, pageLoad, homeObject, menu, about, contentDiv };