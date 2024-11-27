/** @type {import('tailwindcss').Config} */

module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}", // Inclui todos os arquivos em "pages"
		"./components/**/*.{js,ts,jsx,tsx}", // Inclui todos os arquivos em "components"
	],
	theme: {
		extend: {}, // Customize o tema aqui, se necessário
	},
	plugins: [], // Adicione plugins do Tailwind aqui, se necessário
};