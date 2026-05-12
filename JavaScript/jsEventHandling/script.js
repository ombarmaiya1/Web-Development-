

function changeBG(){
    document.getElementById('textarea').style.backgroundColor =  document.getElementById('bg').value;
}

function changeHeading(){
    document.getElementById('heading').style.color =  document.getElementById('hd').value;
}

function changePara(){
    document.getElementById('pa').style.color =  document.getElementById('para').value;
}

function reset()
{
    document.getElementById('textarea').style.backgroundColor =  'white';
    document.getElementById('heading').style.color =  'black';
     document.getElementById('pa').style.color =  'black';
}



document.getElementById('bgButton').addEventListener('click',changeBG);
document.getElementById('hdButton').addEventListener('click',changeHeading);
document.getElementById('paraButton').addEventListener('click',changePara);
document.getElementById('reset').addEventListener('click',reset);


