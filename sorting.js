let heights = [];
let isFirstTime = true;

let newArray = document.getElementById("array");
newArray.addEventListener('click', addBar);

document.body.onload = addBar(true);

function addBar() {
    heights.length = 0;
    for (let i = 0; i < 15; i++) {
        if (isFirstTime) {
            let newDiv = document.createElement("div");
            newDiv.classList.add("bar");
            let newId = `bar${i}`;
            newDiv.setAttribute("id", newId);
            const currDiv = document.querySelector("#bars");
            currDiv.appendChild(newDiv);
        }
        let h = Math.floor(Math.random() * 500) + 10;
        heights.push(h);
        let id = document.getElementById(`bar${i}`);
        id.style.height = `${heights[i]}px`;
        id.style.backgroundColor = "#EEEEEE";
    }
    isFirstTime = false;
}
