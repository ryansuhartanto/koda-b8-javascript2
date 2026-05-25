import assert from "node:assert/strict";
import { describe, it, mock } from "node:test";

import { calculate } from "./utils";

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
});
