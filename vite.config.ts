import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/x-pand/',
  plugins: [
    react(),
    {
      name: 'copy-404',
      async writeBundle() {
        // Copy 404.html to dist folder
        const fs = await import('fs/promises');
        await fs.copyFile('public/404.html', 'dist/404.html');
      }
    }
  ],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
