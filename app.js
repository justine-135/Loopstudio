window.addEventListener("load", () => {
	const mobileMenu = document.querySelector(".mobile-menu");
	const menuBtn = document.querySelector(".hamburger");
	const closeBtn = document.querySelector(".close");

	menuBtn.addEventListener("click", () => {
		mobileMenu.style.display = "block";
	});

	closeBtn.addEventListener("click", () => {
		mobileMenu.style.display = "none";
	});
});
