const container = document.querySelector('#container');
let x = .1;

function getRandomColor(){
    const r = Math.floor(Math.random()*256);
    const g = Math.floor(Math.random()*256);
    const b = Math.floor(Math.random()*256);
    return `rgba(${r},${g},${b},${x})`;
}

for ( i = 0; i < 100 ; i++){
    const newDiv = document.createElement('div');
    newDiv.style.border = "1px solid black";
    newDiv.style.height = ((500/10)-2) + "px";
    newDiv.style.width = ((500/10)-2) + "px";
    newDiv.addEventListener('mouseover', function(){
        const color = window.getComputedStyle(newDiv).backgroundColor;
        if (color === 'rgba(0, 0, 0, 0)'){
            newDiv.style.backgroundColor = getRandomColor();
        }
        else{
            const currentColor = window.getComputedStyle(newDiv).backgroundColor;
            const rgbaMatch = currentColor.match(/rgba?\((\d+), (\d+), (\d+)(?:, ([\d.]+))?\)/);
            let red = rgbaMatch[1];
            let green = rgbaMatch[2];
            let blue = rgbaMatch[3];
            let currentOpacity = parseFloat(rgbaMatch[4]);
            let newOpacity = (currentOpacity + .1);
            let newBackgroundColor = `rgba(${red}, ${green}, ${blue}, ${newOpacity})`;
            newDiv.style.backgroundColor = newBackgroundColor;
        }
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
                const color = window.getComputedStyle(newDiv).backgroundColor;
                if (color === 'rgba(0, 0, 0, 0)'){
                    newDiv.style.backgroundColor = getRandomColor();
                }
                else{
                    const currentColor = window.getComputedStyle(newDiv).backgroundColor;
                    const rgbaMatch = currentColor.match(/rgba?\((\d+), (\d+), (\d+)(?:, ([\d.]+))?\)/);
                    let red = rgbaMatch[1];
                    let green = rgbaMatch[2];
                    let blue = rgbaMatch[3];
                    let currentOpacity = parseFloat(rgbaMatch[4]);
                    let newOpacity = (currentOpacity + .1);
                    let newBackgroundColor = `rgba(${red}, ${green}, ${blue}, ${newOpacity})`;
                    newDiv.style.backgroundColor = newBackgroundColor;
                }
            })
            container.appendChild(newDiv);
        }
    }
}