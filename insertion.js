let insertion = document.getElementById("insertion");

insertion.addEventListener("click", async ()=>{
    disableButtons(true);
    for(let i=1; i<heights.length; i++){
        let key = heights[i];
        let pos = i;
        let j=i-1;
        while(j>=0 && heights[j]>key){
                let id1 = `bar${j}`;
                let id2 = `bar${j+1}`;
                colorChange(id1,id2, true);
                await new Promise (resolve => {setTimeout(()=>{resolve()},300)});
                document.getElementById(id2).style.height = `${heights[j]}px`;
                heights[j+1] = heights[j];
                
                colorChange(id1,id2, false);
                j--;
        }
        let id1 = `bar${i}`;
        let id2 = `bar${j+1}`;
        swap(id1,id2,key,heights[j+1]);
        heights[j+1] = key;
    }
    disableButtons(false);
})