import { defineConfig } from '@twind/core'
import presetAutoprefix from '@twind/preset-autoprefix'
import presetTailwind from '@twind/preset-tailwind'

// `defineConfig` is not required, but adds types
export default defineConfig({
  presets: [
    presetAutoprefix(),
    presetTailwind()
  ],
  strict: true,
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ]
})