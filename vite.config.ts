import { defineConfig, PluginOption } from 'vite'
import react from '@vitejs/plugin-react'
import topLevelAwait from "vite-plugin-top-level-await";

const fullReloadAlways: PluginOption = {
  name: 'full-reload-always',
  handleHotUpdate({ server }) {
    server.ws.send({ type: "full-reload" })
    return []
  },
} as PluginOption


// https://vitejs.dev/config/
export default defineConfig({
  root: '',
  base: './',
  plugins: [
    react(),
    topLevelAwait(),
    fullReloadAlways
  ],
})
