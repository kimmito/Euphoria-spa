import babel from '@rolldown/plugin-babel'
import tailwindcss from '@tailwindcss/vite'
import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import { URL, fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		react(),
		tailwindcss(),
		babel({ presets: [reactCompilerPreset()] })
	],
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
			'@components': fileURLToPath(
				new URL('./src/components', import.meta.url)
			),
			'@screens': fileURLToPath(new URL('./src/screens', import.meta.url)),
			'@navigation': fileURLToPath(new URL('./src/navigation', import.meta.url))
		}
	}
})
