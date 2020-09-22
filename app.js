// let numberOfSquares = parseInt(prompt("How many squares do you want?"));
const submitButton = document.querySelector("#submit");
submitButton.addEventListener("click", () => {
  let newColor = document.querySelector("#color").value;
  let numberOfSquares = parseInt(
    document.querySelector("#numberOfSquares").value
  );

  const gridContainer = document.querySelector(".container");
  gridContainer.style.cssText = `grid-template-rows: repeat(${numberOfSquares}, 1fr);
grid-template-columns: repeat(${numberOfSquares}, 1fr);   display: grid;
`;

  const makeGrid = (numberOfSquares) => {
    for (let i = 0; i < Math.pow(numberOfSquares, 2); i++) {
      let newItem = document.createElement("div");
      newItem.classList.add("item");
      gridContainer.appendChild(newItem);

      newItem.addEventListener("mouseenter", () => {
        newItem.style.cssText = `background-color: ${newColor};`;
      });
    }
  };

  makeGrid(numberOfSquares);
});
