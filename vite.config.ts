import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv';
dotenv.config();
// https://vitejs.dev/config/
export default defineConfig(({  mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  return {
    server: { port: 3000 },
    define: {
      'VITE_APP_API': env.VITE_APP_API
    },
    plugins: [react()],
  }
 
})
