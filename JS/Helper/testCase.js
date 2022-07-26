const testCase = (arg1, arg2, isStart = false, title = '', time) => {
	let flag = arg1 === arg2;

	if (isStart && title === '') {
		console.log(`\nTest Cases: (${time}ms)`);
	}

	if (isStart && title) {
		console.log(`\n${title}(${time ? time + 'ms' : ''})`);
	}

	if (typeof arg1 === 'object' && typeof arg2 === 'object') {
		flag = JSON.stringify(arg1) === JSON.stringify(arg2);
	}

	console.log(`[ ${flag ? '✔' : `✘`} ]`, `(${arg1})`, '~', `(${arg2})`)
}

module.exports = testCase;