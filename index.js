const gridDim = 9;
const grid = [];
const runResults = [];
let currPos = [4, 4];
let hops = 0;
let done = false;
let gotAcorn = false;
/**
 * Grid Example
 * o = acorn placement
 * s = staring position
 * x = point of completion
 * 
 * |o| | | | | | | | |
 * | | | | | | | | | |
 * | | | | | | | | | |
 * | | | | | | | | | |
 * | | | | |s| | | | |
 * | | | | | | | | | |
 * | | | | | | | | | |
 * | | | | | | | | | |
 * | | | | | | | | |x|
 */
const genGrid = () => {
	for (let i = 0; i < gridDim; i++) {
		const row = [];
		for (let ii = 0; ii < gridDim; ii++) {
			row.push('');
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
	}
	// Done Check
	if (currPos[0] === 8 && currPos[1] === 8 && gotAcorn) {
		done = true;
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
	do {
		hop();
	} while (!done);
}

const calcAvg = () => {
	let total = 0;
	for (let val of runResults) {
		total += val;
	}
	return total / runResults.length;
}

const reset = () => {
	currPos = [4, 4];
	hops = 0;
	done = false;
	gotAcorn = false;
}

const go = () => {
	genGrid();
	console.log('Started @', new Date().toString());
	let i = 0;
	for (i; i < 1000000; i++) {
		const percentage = i / 100000 * 10;
		doRun();
		runResults.push(hops);
		reset();
		if (percentage !== 0 && percentage % 10 === 0) {
			console.log(`Progress: ${percentage}% complete, average: ${calcAvg()}`);
		}
	}
	console.log('Runs', new Intl.NumberFormat('en-GB').format(i));
	console.log('Average', calcAvg());
	console.log('Ended @', new Date().toString());
}

go();
