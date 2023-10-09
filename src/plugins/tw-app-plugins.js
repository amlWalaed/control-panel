import plugin from "tailwindcss/plugin";

export const appPlugin = plugin(function ({ addComponents, addUtilities }) {
	addUtilities({
		".hideScrollbar::-webkit-scrollbar": {
			display: "none",
		},

		/* Hide scrollbar for IE, Edge and Firefox */
		".hideScrollbar ": {
			"-ms-overflow-style": "none",
			/* IE and Edge */
			"scrollbar-width": "none",
			/* Firefox */
		},
	});
	addComponents({
		".panel": {
			"@apply p-6 space-y-6 border rounded-xl border-secondary-200": {},
		},
	});
});
