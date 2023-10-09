import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";
import { HeadlessUiResolver } from "unplugin-vue-components/resolvers";
import AutoImport from "unplugin-auto-import/vite";
import { fileURLToPath, URL } from "node:url";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		vue(),
		Components({
			dts: true,
			dirs: ["./src/components", "./src/layouts"],
			resolvers: [HeadlessUiResolver()],
		}),
		AutoImport({
			dts: true,
			dirs: ["./src/composables"],
			imports: ["vue", "vue-router"],
			eslintrc: {
				enabled: true,
			},
		}),
	],
	resolve: {
		alias: {
			"@": fileURLToPath(new URL("./src", import.meta.url)),
		},
	},
});
