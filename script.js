const grid = document.getElementById('grid')
const newBtn = document.getElementById('newBtn')
const clearBtn = document.getElementById('clearBtn');

for (let i = 0; i < 256; i++) {
    let square = document.createElement('div')

    square.className = 'square'

    grid.appendChild(square)

    square.addEventListener('mouseover', function() {
        square.style.backgroundColor = 'gray'
    })

}

newBtn.addEventListener('click', function() {
    var input = prompt('Enter a size number (1-100)');
    var numberOfSquares = parseInt(input);

    if (!isNaN(numberOfSquares) && numberOfSquares >= 1 && numberOfSquares <= 100) {
        var squares = document.querySelectorAll('.square');

        squares.forEach(function(square) {
            square.remove();
    
});

let size = 800 / numberOfSquares

for (let i = 0; i < numberOfSquares * numberOfSquares; i++) {
    
let newSquare = document.createElement('div')

newSquare.className = 'square'

newSquare.style.width = size + 'px'
newSquare.style.height = size + 'px'

grid.appendChild(newSquare)

newSquare.addEventListener('mouseover', function() {
    newSquare.style.backgroundColor = 'gray'
})
} 
}
})

clearBtn.addEventListener('click', function() {
    var squares = document.querySelectorAll('.square');

    squares.forEach(function(square) {
        square.style.backgroundColor = 'orange'; // 
    });
});




