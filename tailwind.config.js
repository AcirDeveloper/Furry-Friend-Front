/** @type {import('tailwindcss').Config} */
module.exports = {
	// NOTE: Update this to include the paths to all of your component files.
	content: [
		'./app/**/*.{js,jsx,ts,tsx}',
		'./components/**/*.{js,jsx,ts,tsx}',
		'./presentation/**/*.{js,jsx,ts,tsx}',
	],
	presets: [require('nativewind/preset')],
	theme: {
		extend: {
			colors: {
				title: '#B9A0F4',
				secondary: {
					DEFAULT: '#3B82F6',
					100: '#60a5fa',
					200: '#3b82f6',
				},
			},

			fontFamily: {
				sans: ['WorkSans-Light', 'sans-serif'],
				'work-black': ['WorkSans-Black', 'sans-serif'],
				'work-medium': ['WorkSans-Medium', 'sans-serif'],
			},
		},
	},
	plugins: [],
}
