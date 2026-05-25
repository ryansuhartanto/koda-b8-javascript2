export function calculate(data) {
	if (!Array.isArray(data) || data.length === 0) {
		throw new Error("data harus berupa array dan tidak boleh kosong");
	}

	let min = data[0];
	let max = data[0];
	let total = data[0];

	for (let i = 1; i < data.length; i++) {
		const check = data[i];

		if (typeof check !== "number") {
			throw new Error("data harus berisi number");
		}

		if (check < min) {
			min = check;
		}
		if (check > max) {
			max = check;
		}

		total += check;
	}

	const avg = total / data.length;

	return [min, max, avg];
}
