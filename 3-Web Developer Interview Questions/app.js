const boxes=document.querySelectorAll(".box");

for(let i=0;i<boxes.length;i++){
  boxes[i].addEventListener("click",function(){
    this.classList.toggle("active");
  })
}