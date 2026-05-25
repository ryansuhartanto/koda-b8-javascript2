import assert from "node:assert/strict";
import { describe, it } from "node:test";

import { calculate } from "./utils.js";

describe("calculate", () => {
	it("throws when data is undefined", () => {
		assert.throws(() => calculate());
	});
	it("throws when data is not array", () => {
		assert.throws(() => calculate("invalid"));
	});
	it("throws when data array is empty", () => {
		assert.throws(() => calculate([]));
	});
	it("throws when data contains type other than number", () => {
		assert.throws(() => calculate([1, 2, "3"]));
	});

	it("returns an array with length of 3", () => {
		const result = calculate([0]);

		assert.ok(Array.isArray(result));
		assert.equal(result.length, 3);
	});
	it("returns [min, max, avg]", () => {
		const param = [2, 1, 3];
		const expectedMin = 1;
		const expectedMax = 3;
		const expectedAvg = 2;
		const [min, max, avg] = calculate(param);

		assert.equal(min, expectedMin);
		assert.equal(max, expectedMax);
		assert.equal(avg, expectedAvg);
	});
});
