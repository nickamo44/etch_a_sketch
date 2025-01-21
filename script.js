const container = document.querySelector('#container');

for ( i = 0; i < 100 ; i++){
    const newDiv = document.createElement('div');
    newDiv.style.border = "1px solid black";
    newDiv.style.height = ((500/10)-2) + "px";
    newDiv.style.width = ((500/10)-2) + "px";
    newDiv.addEventListener('mouseover', function(){
        newDiv.style.backgroundColor = 'red';
    })
    container.appendChild(newDiv);
}

function getNumber(){
    let numberOfCells = prompt("Enter number of cells");
    console.log(numberOfCells);
    container.replaceChildren();
    if (numberOfCells >100){
        const div = document.createElement('div');
        div.textContent = "Please enter a number equal to or less than 100";
        div.style.margin = "auto";
        div.style.marginTop = "2%";
        container.appendChild(div);
        return;
    }
    else{
        for ( i = 0; i < (numberOfCells)**2 ; i++){
            const newDiv = document.createElement('div');
            newDiv.style.border = "1px solid black";
            newDiv.style.height = ((500/(numberOfCells))-2) + "px";
            newDiv.style.width = ((500/(numberOfCells))-2) + "px";
            newDiv.addEventListener('mouseover', function(){
            newDiv.style.backgroundColor = 'red';
            })
            container.appendChild(newDiv);
        }
    }
}