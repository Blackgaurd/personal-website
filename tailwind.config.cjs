/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js,svelte,ts}"],
	theme: {
		colors: {
			"dark-secondary": "#000000",
			"dark-main": "#14213d",
			accent: "#fca311",
			"light-main": "#e5e5e5",
			"light-secondary": "#ffffff"
		},
		extend: {
			aspectRatio: {
				"32/11": "32 / 11"
			},
			scale: {
				250: "2.5"
			}
		}
	},
	plugins: []
};
