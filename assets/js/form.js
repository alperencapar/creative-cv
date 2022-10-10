const form_elements = document.querySelectorAll(".form-control");

form_elements.forEach((element) => {
	event_listener("focus", element, "input-group-active");
	event_listener("blur", element, "input-group-active");
});
