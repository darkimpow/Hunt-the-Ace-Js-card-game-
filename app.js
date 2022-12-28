const cardObjectDefenitions = [
    {id:1, imagePath:'/images/card-KingHearts.png'},
    {id:2, imagePath:'/images/card-JackClubs.png'},
    {id:3, imagePath:'/images/card-QueenDiamonds.png'},
    {id:4, imagePath:'/images/card-AceSpades.png'},
]

function createCard(cardItem){
    //create div elements that make up the card 
    const cardElem = document.createElement('div')
    const cardInnerElem = createElement('div')
    const cardFrontElm = createElement('div')
    const cardBackElm = createElement('div')
// create front and back image elements for a card

}

function createElement(elemType){
    return document.createElelment(elemType)
}