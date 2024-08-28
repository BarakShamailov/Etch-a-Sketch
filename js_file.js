const TOTAL_WIDTH = 960;
const SQUARES_NUMBER = 16;
let squaresArray = [];
function getRandomColor() {
            const randomColor = `rgb(${Math.floor(Math.random() * 256)}, 
                                      ${Math.floor(Math.random() * 256)}, 
                                      ${Math.floor(Math.random() * 256)})`;
            return randomColor;
}


function initialize(){
    createBtn();
    createSquares(SQUARES_NUMBER);
}

initialize();

function createSquares(numOfSquares) {
      const newDiv = document.createElement('div');
      newDiv.className = 'grid-container';
      newDiv.style.width = `${TOTAL_WIDTH}px`;
      document.body.appendChild(newDiv);
      const squareSize = TOTAL_WIDTH / (numOfSquares);
     for(let i = 0; i < numOfSquares; i++)
        {
            const newDiv = document.createElement('div');
            document.body.appendChild(newDiv);
            for(let j = 0; j < numOfSquares; j++)
            {


                    const newSquare = document.createElement('div');
                    newSquare.className = 'square';
                    newSquare.style.width = `${squareSize}px`;
                    newSquare.style.height = `${squareSize}px`;

                    newSquare.addEventListener('mouseenter', function() {
                        newSquare.style.backgroundColor = getRandomColor();
                    });
                    newDiv.appendChild(newSquare);
                    squaresArray.push(newSquare);
            }
        }

}

function createBtn()
{
     const divBtn = document.createElement('div');
     divBtn.className = 'button-top';
     document.body.appendChild(divBtn)
     const btn = document.createElement('button');
     btn.id = "btn";
     btn.innerText = " New Sketch Pad ";
     divBtn.appendChild(btn);

     btn.addEventListener('click', function() {

            let squaresPerSide = prompt("Enter the number of squares per side for the new grid (e.g., 16 for a 16x16 grid):");

            // Convert the input to a number and check if it's valid
            squaresPerSide = parseInt(squaresPerSide);
            if (squaresPerSide > 0 && squaresPerSide <= 100) {
                cleanSquares();
                createBtn();
                createSquares(squaresPerSide);
            } else {
                alert("Please enter a valid number between 1 and 100.");
            }
        });
}

function cleanSquares() {
    document.body.innerHTML = '';
}