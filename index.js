const gridDim = 9;
const grid = [];
const runResults = [];
let currPos = [4, 4];
let hops = 0;
let done = false;
let gotAcorn = false;
/**
 * | | | | | | | | |o|
 * | | | | | | | | | |
 * | | | | | | | | | |
 * | | | | | | | | | |
 * | | | | |s| | | | |
 * | | | | | | | | | |
 * | | | | | | | | | |
 * | | | | | | | | | |
 * |x| | | | | | | | |
 */

const genGrid = () => {
	for (let i = 0; i < gridDim; i++) {
		const row = [];
		for (let ii = 0; ii < gridDim; ii++) {
			const val =
				i === 0 && ii === 0 ? 'o' // Location on acorn
				: currPos[0] === i && currPos[1] === ii ? 's' // Location of squirrel
				: i === (gridDim - 1) && ii === (gridDim - 1) ? 'x' // Target location for the drop
				: '';
			row.push(val);
		}
		grid.push(row);
	}
}

const fiftyFifty = () => {
	return Math.floor(Math.random() * 2);
}

const setDirection = () => {
	/**
	 * directions
	 * [+][] = down
	 * [-][] = up
	 * [][+] = left
	 * [][-] = right
	 */
	const level = fiftyFifty(); // Decide to move horizontally (0) or vertically (1)
	const idx = currPos[level];
	const direction = fiftyFifty(); // Decide the direction on the axis: - (0) or + (1)
	if (idx === 0 || idx !== (gridDim - 1) && direction === 1) {
		currPos[level]++;
	}
	if (idx === (gridDim - 1) || direction === 0) {
		currPos[level]--;
	}
}

const checkProgress = () => {
	// Acorn check
	if (currPos[0] === 0 && currPos[1] === 0) {
		gotAcorn = !gotAcorn;
		// console.log('Got Acorn', gotAcorn);
	}
	// Done Check
	if (currPos[0] === 8 && currPos[1] === 8 && gotAcorn) {
		done = true;
		console.log('DONE!\n');
	}
}

const hop = () => {
	grid[currPos[0]][currPos[1]] = '';
	setDirection();
	checkProgress();
	grid[currPos[0]][currPos[1]] = 's';
	hops++;
}

const doRun = () => {
	console.log('************');
	console.log('Starting Run');
	console.log('************');
	do {
		hop();
	} while (!done);
}

const calAvg = () => {
	let total = 0;
	for (let val of runResults) {
		total += val;
	}
	console.log('Average', total / runResults.length, '\n');
}

const reset = () => {
	currPos = [4, 4];
	hops = 0;
	done = false;
	gotAcorn = false;
}

const go = () => {
	const startTime = new Date().toISOString();
	let i = 0;
	for (i; i < 100000; i++) {
		doRun();
		console.log('hops', hops);
		runResults.push(hops);
		if (runResults.length !== 1) {
			calAvg();
		}
		reset();
	}
	console.log('Started @', startTime);
	console.log('Ended @', new Date().toISOString());
	console.log('Runs', i);
}

//console.log('Generating Grid');
genGrid();
//console.log('Grid Generated\n', grid, '\n');

go();
