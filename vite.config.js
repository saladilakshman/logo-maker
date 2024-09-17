import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/logo-maker/",
  plugins: [react()],
  server: {
    port: "5173",
    strictPort: true,
    proxy: {
      "/png": "https://logoexpress.tubeguruji.com",
    },
  },
});
