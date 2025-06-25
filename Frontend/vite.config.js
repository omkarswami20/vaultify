<<<<<<< HEAD
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
=======
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

>>>>>>> 7586bf7 (updated new-folder)
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:5000',
        changeOrigin: true,
        secure: false,
<<<<<<< HEAD
      },
    },
  },
})
=======
        logLevel: 'debug',
        rewrite: (path) => path.replace(/^\/api/, '')
      },
    },
  },
});
>>>>>>> 7586bf7 (updated new-folder)
