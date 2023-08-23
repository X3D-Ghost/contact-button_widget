import { defineConfig } from 'vite'
import { splitVendorChunkPlugin } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),splitVendorChunkPlugin()],
  build: {
    // cssCodeSplit: true,
    lib: {
      // Could also be a dictionary or array of multiple entry points
      // entry: resolve(__dirname, 'lib/main.js'),
      entry: ['src/main.js'],
      name: 'ContactWidget',
      formats: ["es", "cjs", "umd"],
      // the proper extensions will be added
      // fileName: 'contact-widget',
      fileName: format => `contact-widget.${format}.js`
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ['vue'],
      // exports: "named",
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: 'Vue',
        },
      },
    },
    // target: 'es2015'
  },
  server: {
    hmr: {
      overlay: false
    }
  }
})
