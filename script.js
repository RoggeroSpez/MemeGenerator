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

    document.getElementById('creator').addEventListener('submit', function(event) {
        const urlInput = document.getElementById('url');
        const urlPattern = /^(ftp|http|https):\/\/[^ "]+$/;
    
        if (!urlPattern.test(urlInput.value)) {
          alert('Please enter a valid URL.');
          event.preventDefault(); // Prevent form submission
        }
      });

});

/* Need to create a Requirement on InputValue to only allow pass if it has a URL and text wrap*/