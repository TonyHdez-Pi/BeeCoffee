/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				mainBgColor: "#F3EEE9",
				mainButtonColor: "#995504",
				secondaryButtonColor: "#f7f0e8",
				secondaryTextColor: "#9B9997",
				primaryTextColor: "#0A0600",
			},
		},
	},
	plugins: [],
};
