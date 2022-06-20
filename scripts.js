document.getElementById('zoom-me').onmouseover = function(){mouseOver()};
document.getElementById('zoom-me').onmouseleave = function(){mouseOut()};

//Zoom/scaling background image
function mouseOver(){
   var obj = document.getElementById('zoom-image')
    obj.setAttribute('style', 'transform:scale(1)')
}

function mouseOut(){
    var obj = document.getElementById('zoom-image')
    obj.setAttribute('style', 'transform:scale(1.1)')
    console.log("mouse out")
}

// function how the new and old design is toggle between.
document.getElementById('change').onclick = function(){
    let btnTxt = document.getElementById('kia').innerText
    if (btnTxt == "Old Design"){
        document.getElementById('input1').style.display = "none";
        document.getElementById('input2').style.display = "block";
        document.getElementById('new').style.display = "block";
        document.getElementById('old').style.display = "none";
        document.getElementById('kia').innerText = "New Design";
    }else{
        document.getElementById('kia').innerText = "Old Design";
        document.getElementById('input1').style.display = "block";
        document.getElementById('input2').style.display = "none";
        document.getElementById('old').style.display = "block";
        document.getElementById('new').style.display = "none";
    }

}