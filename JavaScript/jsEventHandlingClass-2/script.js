document.getElementById('redbox').addEventListener('mouseover' , fillRed);

document.getElementById('greenbox').addEventListener('mouseover', fillgreen);

document.getElementById('bluebox').addEventListener('mouseover' , fillblue);

document.getElementById('circle').addEventListener('mouseover' , fill);

document.getElementById('body').addEventListener('click' , reset);

let color;

function reset()
{
 color = 'white'
}

function fill()
{
  document.getElementById('circle').style.backgroundColor = color  ;
}

function fillRed() {
     color = 'red';
}

function fillgreen(){
 color = 'green';
}

function fillblue() {
    color = 'skyblue'
}