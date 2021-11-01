//Credit to https://medium.com/@ismailghallou/how-to-add-dark-mode-easily-with-a-custom-react-hook-5791d96ae9f



import { useEffect, useState } from "react";

export default () => {
	const [theme, setTheme] = useState("light");
	const toggleTheme = () => {
		if (theme !== "dark") {
			localStorage.setItem("theme", "dark");
			setTheme("dark");
		} else {
			localStorage.setItem("theme", "light");
			setTheme("light");
		}
	};

	useEffect(() => {
		const localTheme = localStorage.getItem("theme");
		if (localTheme) {
			setTheme(localTheme);
		}
	}, {});

	return {
		theme,
		toggleTheme
	};
};
