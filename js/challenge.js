//List of event listeners
document.addEventListener("DOMContentLoaded", countTime);
document.getElementById("heart").addEventListener("click", like);
document.getElementById("plus").addEventListener("click", plus);
document.getElementById("minus").addEventListener("click", minus);
document.getElementById("pause").addEventListener("click", pauseRes);
document.addEventListener("submit", commenting);

let seconds = 0;

let cancel = setInterval(incrementSeconds, 1000);
let count = document.getElementById("counter");

function incrementSeconds(){
    seconds += 1;
    count.innerText = `${seconds}`;
}

function decrementSeconds(){
    seconds -= 1;
    count.innerText = `${seconds}`;
}

const redHeart = document.querySelector("heart");
let node = document.createElement("LI");

//List of functions used in the event listeners
function countTime(){
    console.log("DOM has loaded");
}

function like(){
    //Append a node to the comments
    let node = document.createElement("LI");
    node.innerHTML = `${count.innerText} has been liked`;
    document.querySelector(".likes").appendChild(node);
}

function plus(){
    incrementSeconds();
}

function minus(){
    decrementSeconds();
}

function pauseRes(event){ //For pausing and resuming the countdown
    event.preventDefault();
    event.target = document.getElementById("pause");
    time = document.getElementById("pause");
    if(time.innerText === "pause"){
        time.innerText = "resume";
        clearInterval(cancel); //Pause the counter
        document.getElementById("plus").disabled = true;
        document.getElementById("minus").disabled = true;
        document.getElementById("heart").disabled = true;
    }
    else{
        time.innerText = "pause";
        cancel = setInterval(incrementSeconds, 1000); //Resume the counter
        document.getElementById("plus").disabled = false;
        document.getElementById("minus").disabled = false;
        document.getElementById("heart").disabled = false;
    }
}

function commenting(event){
    event.preventDefault();
    console.log(document.querySelector("#comment-input").value);
    let node = document.createElement("LI");
    node.innerHTML = document.querySelector("#comment-input").value;
    document.querySelector("#list").appendChild(node);
}