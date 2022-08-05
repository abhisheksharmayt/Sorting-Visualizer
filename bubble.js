let bubble = document.querySelector("#bubble");

bubble.addEventListener('click',async function bubbleSort() {
    disableButtons(true);
    for (let i = 0; i < heights.length; i++) {
        // let flag = 0;
        for (let j = 0; j < heights.length-i-1; j++) {
            let first = `bar${j}`;
            let second = `bar${j + 1}`;
            colorChange(first,second,true);
            await new Promise(resolve => {setTimeout(() => {resolve()}, 300)});
            if (heights[j] > heights[j + 1]) {
                swap(first,second,heights[j],heights[j+1]);
                let temp = heights[j];
                heights[j] = heights[j + 1];
                heights[j + 1] = temp;
                
                // flag = 1;
            }
            colorChange(first,second,false);
        }
        let id = document.getElementById(`bar${heights.length - i-1}`);
        id.style.backgroundColor = "lightgreen";
        // if (!flag) break;
    }
    disableButtons(false);
})

function swap(el1, el2, h1, h2) {
    let id1 = document.getElementById(el1); 
    let id2 = document.getElementById(el2);
    id1.style.height = `${h2}px`;
    id2.style.height = `${h1}px`;
}

function colorChange(el1, el2, change){
    let id1 = document.getElementById(el1);
    let id2 = document.getElementById(el2);
    if(change){
        id1.style.background = "#00ADB5";
        id2.style.background = "#00ADB5";
    }
    else{
        id1.style.background = "#EEEEEE";
        id2.style.background = "#EEEEEE";
    }
}

function disableButtons(doThis){
    let buttons = document.querySelectorAll("button");
    for(let b of buttons){
        b.disabled = doThis;
    }
}