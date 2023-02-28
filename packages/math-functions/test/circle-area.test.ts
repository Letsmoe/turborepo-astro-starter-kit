import { assertType, expect, expectTypeOf } from "vitest";
import { areaOfACircle } from "../src/circle-area";
import { test } from "vitest";

test("my types work properly", () => {
	expectTypeOf(areaOfACircle).toBeFunction();

	assertType<number>(areaOfACircle(5));
});

test("the result is correct", () => {
	expect(areaOfACircle(4)).toEqual(Math.PI * 4 ** 2);
});
