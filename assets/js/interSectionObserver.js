let observer_options = {
	rootMargin: "40px",
	threshold: 0.1
};

console.log(window.innerWidth);

if (window.innerWidth < 576) {
	observer_options.rootMargin = "120px";
	observer_options.threshold = 0.001;
} else if (window.innerWidth < 992) {
	observer_options.rootMargin = "90px";
	observer_options.threshold = 0.02;
} else if (window.innerWidth > 1400) {
	observer_options.rootMargin = "80px";
	observer_options.threshold = 0.01;
} else {
	observer_options.rootMargin = "40px";
	observer_options.threshold = 0.1;
}

// if (window.innerWidth < 576) {
// 	observer_options.rootMargin = "10px";
// 	observer_options.threshold = 0.1;
// }
// else if (window.innerWidth < 992) {
// 	observer_options.rootMargin = "50px";
// 	observer_options.threshold = 0.2;
// }
// else if (window.innerWidth > 1400) {
// 	observer_options.rootMargin = "40px";
// 	observer_options.threshold = 0.2;
// }
// else {
// 	observer_options.rootMargin = "50px";
// 	observer_options.threshold = 0.25;
// }

console.log(observer_options.threshold, observer_options.rootMargin);

const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		// entry.target.classList.toggle("show", entry.isIntersecting);
		if (entry.isIntersecting) {
			entry.target.classList.add("show");
		} else {
			entry.target.classList.remove("show");
		}
	});
}, observer_options);

const animate_elements = document.querySelectorAll(".animate");
animate_elements.forEach((el) => observer.observe(el));
