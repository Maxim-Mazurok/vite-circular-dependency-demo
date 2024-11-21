import { defineConfig } from "vite";
import circleDependency from "vite-plugin-circular-dependency";

export default defineConfig({
    build: {
        rollupOptions: {
            // Specify the input entry point(s)
            input: {
              main: './src-bad/main.ts', // Or your main entry file
            },
        }
    },
  plugins: [circleDependency()],
});
