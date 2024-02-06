async function throttlePromises(funcs, limit) {
	let results = [];
	let i = 0;

	async function executeBatch() {
		// Determine the current batch to execute
		const currentBatch = funcs.slice(i, i + limit);
		i += limit; // Update the index for the next batch

		// Execute the current batch and wait for all promises to resolve
		const batchResults = await Promise.allSettled(
			currentBatch.map((fn) => fn())
		);
		results = results.concat(
			batchResults.map((result) =>
				result.status === "fulfilled" ? result.value : new Error(result.reason)
			)
		);

		// If there are more items, execute the next batch
		if (i < funcs.length) {
			await new Promise((resolve) => setTimeout(resolve, 1000)); // Wait 1 second before the next batch
			await executeBatch();
		}
	}

	await executeBatch();
	return results;
}

export { throttlePromises };
