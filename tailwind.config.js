/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./components/**/*.{tsx, jsx, ts, js}',
		'./components/*.{tsx, jsx, ts, js}',
		'./App.{js, jsx, ts, tsx}',
		'./app/**/*.{js, jsx, ts, tsx}',
		'./src/**/*.{js,jsx,ts,tsx}',
		'./app/(tabs)/index.tsx',
	],
	theme: {
		extend: {},
	},
	plugins: [],
}
