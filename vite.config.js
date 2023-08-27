import { defineConfig } from 'vite';

export default defineConfig({
  // ...other Vite configurations

  // Add a configureServer block for setting up Tone.js during development
  server: {
    // Allow external access to your dev server, if needed
    host: '0.0.0.0',
  },

  // Add a rollupOptions block for bundling Tone.js
  rollupOptions: {
    // Ensure that the 'global' variable name is 'Tone' for Tone.js compatibility
    output: {
      globals: {
        tone: 'Tone',
      },
    },
  },
});
