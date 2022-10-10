// ! NAVBAR BG + SCROLL SNAP START

const navbar = document.querySelector("nav");
const welcome_section_bg = document.querySelector(".section-welcome-bg");

// PAGE SCROLL LISTENER START
window.addEventListener("scroll", () => {
	let page_scroll_height = calculate_scroll_height_of_body();

	//
	navbar.classList.toggle(
		"position-fixed",
		is_scroll_height_lower_than_value(
			page_scroll_height,
			navbar.dataset.bgColorOnScroll
		)
	);
	navbar.classList.toggle(
		"bg-primary",
		is_scroll_height_lower_than_value(
			page_scroll_height,
			navbar.dataset.bgColorOnScroll
		)
	);
	navbar.classList.toggle(
		"position-fixed",
		is_scroll_height_higher_than_value(
			page_scroll_height,
			navbar.dataset.bgColorOnScroll
		)
	);
	navbar.classList.toggle(
		"bg-primary",
		is_scroll_height_higher_than_value(
			page_scroll_height,
			navbar.dataset.bgColorOnScroll
		)
	);
});
// PAGE SCROLL LISTENER END

// if auto snap height needed(true) calculate snap height
if (navbar.dataset.autoSnapBg == "true") {
	const navbar_height = parseInt(navbar.offsetHeight);
	const welcome_section_bg_height = parseInt(welcome_section_bg.offsetHeight);
	const navbar_snap_height = welcome_section_bg_height - navbar_height;

	navbar.setAttribute("data-bg-color-on-scroll", navbar_snap_height);
}

// ! NAVBAR BG + SCROLL SNAP END

// ! (MOBILE) NAVBAR CONTAINER TRANSLATE-LEFT START

const mobile_nav_btn = document.querySelector(".navbar-toggler");
const nav_links = document.querySelector(".navlinks ");

let open;
let translate_left_px = "300px";

mobile_nav_btn.addEventListener("click", () => {
	if (open) {
		open = !open;
		navbar.style.transform = "translate3d(0, 0, 0)";
		mobile_nav_btn.classList.remove("animate-show");
	} else {
		open = true;
		mobile_nav_btn.classList.add("animate-show");

		if (document.body.clientWidth <= 576) {
			// translate_left_px = parseFloat((document.body.clientWidth / 1.5))
			translate_left_px = window.getComputedStyle(nav_links).width;
			// translate_left_px = "250px"
			console.log(translate_left_px);
		}
		navbar.style.transform = `translate3d(-${translate_left_px}, 0, 0)`;
		nav_links.style.transform = `translate3d(${translate_left_px}, 0, 0)`;
	}
});

// ! (MOBILE) NAVBAR CONTAINER TRANSLATE-LEFT END
