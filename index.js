const gridDimentions = [9, 9];
const currentPos = [5, 5];
let grid;

const genGrid = (gridDim) => {
	for (let i = 0; i < gridDim[0]; i++) {
		const row = [];
		for (let ii = 0; ii < gridDim[1]; ii++) {
			const val = i === 0 && ii === (gridDim[1] - 1) ? 'o' : 'x';
			row.push(val);
		}
		grid.push(row);
	}
}

const calcDirections = (currPos, gridDim) => {
	
}

genGrid(gridDimentions)


console.log(grid);