import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@app": path.resolve(__dirname, "src"),
      "@components": path.resolve(__dirname, "src/components"),
      "@util": path.resolve(__dirname, "src/util"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@department": path.resolve(__dirname, "src/pages/Departments"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
      "@assets": path.resolve(__dirname, "/public"),
    },
  },
});
