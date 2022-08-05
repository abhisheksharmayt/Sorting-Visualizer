let selection = document.getElementById("selection");

selection.addEventListener('click',async ()=>{
    disableButtons(true);
    for(let i=0; i<heights.length; i++){
        let minIndex = i;
        // let ith = document.querySelector(`#bar${i}`);
        // ith.style.backgroundColor = "yellow";
        for(let j=i+1; j<heights.length; j++){
            let id1 = `bar${minIndex}`;
            let id2 = `bar${j}`;
            colorChange(id1,id2, true);
            await new Promise(resolve => {setTimeout(() => {resolve()}, 150)});
            if(heights[minIndex]>heights[j]) minIndex = j;
            colorChange(id1,id2, false);
        }
        let el1 = `bar${i}`;
        let el2 = `bar${minIndex}`;
        swap(el1,el2,heights[i],heights[minIndex]);
        let temp = heights[i];
        heights[i] = heights[minIndex];
        heights[minIndex] = temp;
        let id = document.getElementById(`bar${i}`);
        id.style.backgroundColor = "lightgreen";
    }
    disableButtons(false);
})