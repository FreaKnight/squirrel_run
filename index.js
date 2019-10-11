const gridDimentions = [9, 9];
const currentPos = [5, 5];
let grid;
/**
 * |x|x|x|x|x|x|x|x|o|
 * |x|x|x|x|x|x|x|x|x|
 * |x|x|x|x|x|x|x|x|x|
 * |x|x|x|x|x|x|x|x|x|
 * |x|x|x|x|s|x|x|x|x|
 * |x|x|x|x|x|x|x|x|x|
 * |x|x|x|x|x|x|x|x|x|
 * |x|x|x|x|x|x|x|x|x|
 * |x|x|x|x|x|x|x|x|x|
 */
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

const getPossileDirections = (currPos, gridDim) => {
	/**
	 * directions
	 * [+][] = down
	 * [-][] = up
	 * [][+] = left
	 * [][-] = right
	 */

}

genGrid(gridDimentions)


console.log(grid);