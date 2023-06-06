import react from "@vitejs/plugin-react";
import ssr from "vite-plugin-ssr/plugin";
import { UserConfig } from "vite";

const root = __dirname;

const config: UserConfig = {
  plugins: [react(), ssr({ prerender: true })],
  build: {
    outDir: `${root}/../../dist/boilerplate-react-ts`,
    emptyOutDir: true,
  },
};

export default config;
