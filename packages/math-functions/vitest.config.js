import viteConfig from "config/vitest.config";
import { mergeConfig } from "vite";
import { defineConfig } from "vitest/config";

export default mergeConfig(viteConfig, defineConfig({}));
