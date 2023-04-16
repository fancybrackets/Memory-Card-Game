
let cards = document.querySelectorAll(".card");


console.log(cards) ; 


cards.forEach(card => {
    console.log(card); 

    card.addEventListener("click" , flipCard);  

} )  

let cardOne , cardTwo ;
let spam = false ; 
let matchingPairCount = 0 ; 

function flipCard(e) {

    const clickedCard = e.currentTarget ; 

  



    if(clickedCard != cardOne && !spam) {
        clickedCard.classList.add("flip");
        if(!cardOne) {
            return cardOne = clickedCard ;
        }
        cardTwo = clickedCard ; 
        spam = true ; 
        console.log(cardOne, cardTwo) 

        let cardOneImg = cardOne.querySelector(".back-view img").getAttribute("src"),
         cardTwoImg = cardTwo.querySelector(".back-view img").getAttribute("src");


        console.log(cardOneImg , cardTwoImg) ; 

        matchCards(cardOneImg, cardTwoImg) 
    }

}

function matchCards(img1, img2 ) {
  if(img1 == img2) {
    matchingPairCount++ ; 


    cardOne.removeEventListener("click" ,flipCard);
    cardTwo.removeEventListener("click" ,flipCard);
    cardOne = cardTwo = "" 
    spam = false ; 
    if(matchingPairCount == 8) {
      setTimeout(shuffleCard , 2000);
      document.querySelector(".text").style.visibility = "visible";
    }
    return console.log("Card matched") ; 
  }
    

  setTimeout(  () => {
    cardOne.classList.add("shake");
    cardTwo.classList.add("shake");
  },400);


  setTimeout( () => {
    cardOne.classList.remove("shake" , "flip");
    cardTwo.classList.remove("shake" , "flip");
    cardOne = cardTwo = "" ; 
    spam = false ; 
  },1200) 

}





const ulTag = document.querySelector(".cards");
function shuffleCard() {

  const array = Array.from(cards);
  array.sort( () =>   Math.random() - 0.5  );

  array.forEach(item => ulTag.appendChild(item));


cards = document.querySelectorAll(".card");

cards.forEach( (card) => {
  card.classList.remove("flip");
  card.addEventListener("click" , flipCard);
}) ; 
matchingPairCount = 0 


document.querySelector(".text").style.visibility = "hidden";

}

shuffleCard() ; 