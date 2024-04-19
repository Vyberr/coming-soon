/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		fontFamily: {
			sans: ['Work Sans', 'sans']
		},
		extend: {
			colors: {
				aquamarine: {
					DEFAULT: '#2de2a1',
					100: '#063021',
					200: '#0d5f41',
					300: '#138f62',
					400: '#1abe82',
					500: '#2de2a1',
					600: '#56e8b3',
					700: '#80eec6',
					800: '#abf3d9',
					900: '#d5f9ec'
				},
				eerie: {
					DEFAULT: '#181b1b',
					100: '#050505',
					200: '#0a0b0b',
					300: '#0e1010',
					400: '#131616',
					500: '#181b1b',
					600: '#434c4c',
					700: '#6e7c7c',
					800: '#9ea9a9',
					900: '#ced4d4'
				}
			}
		}
	},
	plugins: []
};
