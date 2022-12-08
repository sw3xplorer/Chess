const board = document.querySelector(".board");
document.onmousemove = handleMouseMove;
function handleMouseMove(event)
{
    event.ClientX;
    event.ClientY;
}


let arr2D = [
    [8, 9, 10, 11, 12, 10, 9, 8],
    [7, 7, 7, 7, 7, 7, 7, 7],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 1],
    [2, 3, 4, 6, 5, 4, 3, 2]
];



// const canvas = document.querySelector("canvas");
// const context = canvas.getContext("2d");
let size = 70;

for (let i = 0; i < 8; i++) {
    let j = 0;
    if (i % 2 == 0) { j = -1 };

    for (j; j < 8; j++) {
        if (j >= 0) {
            let div = document.createElement("div");
            div.style.top = j * size + "px";
            div.style.left = i * size + "px";
            div.style.backgroundColor = "black";
            div.style.height = div.style.width = size + "px"
            div.addEventListener("click", select);
            board.append(div);
        }

        j++;
        if (j < 8) {
            div = document.createElement("div");
            div.style.top = j * size + "px";
            div.style.left = i * size + "px";
            div.style.backgroundColor = "white";
            div.style.height = div.style.width = size + "px"
            div.addEventListener("click", select);
            board.append(div);
        }
    }
}


/*1-6 = white 7-12 = black

/*
let piece = [
    {
        x: 1,
        y: 5,
        piece: "pawn",
        belongsTo: "white"
    },
    {
        x: 6,
        y: 6,
        piece: "king",
        belongsTo: "black"
    },
]; 
*/