const input = document.getElementById('url');
const memeConatiner = document.getElementById('meme-container');
const submit = document.querySelector("button[type='submit']");
const topText = document.querySelector("#topText");
const botText = document.querySelector("#bottomText");
const removeBtn = document.querySelector(".removeBtn");


submit.addEventListener("click", function(event) {
    event.preventDefault();

    const newDiv = document.createElement("div");
    newDiv.classList.add("meme")

    const removeBtn = document.createElement("button");
    removeBtn.type = "submit";
    removeBtn.innerText = "X";
    removeBtn.classList.add("removeBtn");


    const newMeme = document.createElement('img');
    newMeme.classList.add("image");
    newMeme.src = input.value;

    const topValue = document.createElement('h2');
    topValue.classList.add("topvalue");    
    topValue.innerHTML = topText.value;
    
    const botValue = document.createElement('h2');
    botValue.classList.add("botvalue");
    botValue.innerText = botText.value;

    newDiv.appendChild(newMeme);
    newDiv.appendChild(topValue);
    newDiv.appendChild(botValue);
    newDiv.appendChild(removeBtn);
    memeConatiner.appendChild(newDiv);
    
    input.value = "";
    topText.value = "";
    botText.value = "";
    
    removeBtn.addEventListener("click", function(event){
        event.target.parentElement.remove();
    });

});

/*const submit = document.querySelector(".btn")
const pikachu = document.querySelector(".pikachu")

submit.addEventListener("click", appear)

function appear(){
    toggleAppear()
    setTimeout(function(){
        toggleAppear()
    }, 2000)
}

function toggleAppear(){
    pikachu.classList.toggle("active")
}*/

/*input.addEventListener('keyup', function(e) {
  if (e.key === 'ArrowUp' || e.key === 'ArrowDown' || e.key === 'Enter') {
    useSuggestion(e);
  } else {
    searchHandler(e);
  }
});
*/