const button = document.querySelector("button");
const fact = document.querySelector(".fact")

const facts = [{ quote: "It has dynamic typing, prototype - based object - orientation, and first - class functions." },
{ quote: "JavaScript often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS." },
{ quote: "As of 2022, 98% of websites use JavaScript on the client side for webpage behavior,often incorporating third-party libraries.All major web browsers have a dedicated JavaScript engine to execute the code on users' devices" },
{ quote: "It has application programming interfaces (APIs) for working with text, dates, regular expressions, standard data structures, and the Document Object Model (DOM)." },
{ quote: "It is multi - paradigm, supporting event - driven, functional, and imperative programming styles." },
{ quote: "JavaScript engines were originally used only in web browsers, but are now core components of some servers and a variety of applications. The most popular runtime system for this usage is Node.js." }]


let num = 0; //* to generate different random numbers each time with more possibility


button.addEventListener("click", function () {
  let random = Math.trunc(Math.random() * 6);
  if (num != random) {
    fact.innerHTML = facts[random].quote
    num = random;
  }else {
    random = Math.trunc(Math.random() * num)+1;
  }
  num = random;

})

