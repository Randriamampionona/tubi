/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			fontFamily: {
				poppins: ["poppins", "sans-serif"],
			},
			boxShadow: {
				inputShadow: "0px 0px 5px 5px #00000038",
				zeroBlackShadow: "0px 0px 25px #000",
			},
		},
	},
	plugins: [],
};
