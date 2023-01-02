const sentences = ["You will die soon!", "goodbye Life!", "watch your mouth!", "say again!", "Fuck you too!", "Good Life!"];

const saySomthingBtn = document.querySelector(".btn");

saySomthingBtn.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * sentences.length);
  const sentence = sentences[randomIndex];
  show(sentence);
  document.querySelector(".inputBox").value = ''
});

function show(a) {
  const inputBox = document.querySelector(".inputBox").value;
  if (!inputBox) {
    alert("I said SAY SOMETHING!!!!!");
  } else {
    document.querySelector(".result").innerHTML = a;
  }
}
