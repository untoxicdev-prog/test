import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { fileURLToPath, URL } from "node:url";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "gsap/SplitText": fileURLToPath(
        new URL("./src/gsap/SplitText.js", import.meta.url)
      )
    }
  }
});
