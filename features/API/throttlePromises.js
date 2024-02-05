function throttlePromises(funcs, limit) {
	let results = [];
	let executing = [];

	async function execute() {
		if (funcs.length) {
			const promise = funcs.shift()();
			promise
				.then((result) => results.push(result))
				.catch((error) => results.push(error));

			executing.push(promise);
			promise.finally(() => {
				executing = executing.filter((v) => v !== promise);
				execute();
			});
		}
	}

	for (let i = 0; i < limit; i++) {
		execute();
	}

	return Promise.all(executing).then(() => results);
}

export { throttlePromises };