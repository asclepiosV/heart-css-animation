window.setInterval(function(){
     let rndInt = Math.floor(Math.random() * 10) + 1;
     rndInt += 30;
    document.getElementById("number").innerHTML = rndInt.toString();       // call your function here
}, 2500);
