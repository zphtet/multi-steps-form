/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				sans: 'Ubuntu, sans-serif',
			},
			maxWidth: {
				wrapper: '940px',
			},
			backgroundImage: {
				sidebar: "url('/src/assets/images/bg-sidebar-desktop.svg')",
				side_m: "url('/src/assets/images/bg-sidebar-mobile.svg')",
			},
		},

		screens: {
			desktop: { max: '1024px' },
			tablet: { max: '768px' },
			mobile_l: { max: '425px' },
			mobile_m: { max: '375px' },
			mobile_s: { max: '320px' },
		},
	},
	plugins: [],
};
