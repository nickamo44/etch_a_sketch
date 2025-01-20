const container = document.querySelector('#container');

for ( i = 0; i < 100 ; i++){
    const newDiv = document.createElement('div');
    newDiv.style.border = "1px solid black";
    newDiv.style.height = ((500/10)-2) + "px";
    newDiv.style.width = ((500/10)-2) + "px";
    container.appendChild(newDiv);
}