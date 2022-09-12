const opnBtn=document.querySelector(".open-btn");
const clsBtn=document.querySelector(".cls-btn");
const container=document.querySelector(".container");
const fact = document.querySelector(".fact")

const facts = [{ quote: "Glaciers and ice sheets hold about 69 percent of the world's freshwater." },
{ quote: "The fastest gust of wind ever recorded on Earth was 253 miles per hour." },
{ quote: "Recent droughts in Europe were the worst in 2,100 years." },
{ quote: "The best place in the world to see rainbows is in Hawaii." },
{ quote: "There are fossilized plants in Greenland under 1.4 km of ice." },
{ quote: "Whale songs can be used to map out the ocean floor." }]


let num = 0; //* to generate different random numbers each time with more possibility

const randomGenerator = (min, max) => Math.floor(Math.random() * (max - min)) + min;

opnBtn.addEventListener("click",function(){
  container.style.display="flex"
console.log("open");
  let random = randomGenerator(0,6);
  
  if (num != random) {
    fact.innerHTML = facts[random].quote
    num = random;
  
  }else {
    random = randomGenerator(random,6)+1;
    if (random==6){
      random = randomGenerator(0,random);
      fact.innerHTML = facts[random].quote; 
    }else{
      fact.innerHTML = facts[random].quote; 
    }
  }
  num = random;

 
})
clsBtn.addEventListener("click",function(){
  container.style.display="none"
  console.log("cls");
})

window.addEventListener("click",function(e){
  if(e.target!==opnBtn){
    container.style.display="none"
  }
});