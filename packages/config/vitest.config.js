import { defineConfig } from "vitest/config";

export default defineConfig({
	test: {
		browser: false,
		coverage: {
			provider: "istanbul",
		},
	},
});
