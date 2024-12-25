import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import UnoCss from 'unocss/vite'
import { resolve } from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
      UnoCss(),
      react()
  ],
    resolve:{
      alias:{
          '@':resolve('./src')
      }
    }
})
