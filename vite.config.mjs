import { defineConfig } from 'npm:vite@^4.0.4'
import react from 'npm:@vitejs/plugin-react@^3.0.1'

import 'npm:react@^18.2.0'
import 'npm:react-dom@^18.2.0/client'
import 'npm:react-router-dom@6.14.1'
import 'npm:@twind/core@^1.1.3'
import 'npm:@twind/preset-autoprefix@^1.0.7'
import 'npm:@twind/preset-tailwind@^1.1.4'
import 'npm:@twind/with-web-components@^1.1.3'
import 'npm:swiper@^10.0.3'
import 'npm:react-markdown@8.0.7'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()]
})
