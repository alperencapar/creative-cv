//FUNCTIONS START

function event_listener(event_type, element, class_name, is_parent = false) {
	element.addEventListener(event_type, () => {
		if (!is_parent) {
			element.parentElement.classList.toggle(class_name);
		} else {
			element.classList.toggle(class_name);
		}
	});
}

function check_is_value_zero(value) {
	//if value not 0 return true. If not return false
	if (value) return true;

	return false;
}

function is_scroll_height_lower_than_value(page_scroll_height, value) {
	if (page_scroll_height < parseInt(value)) return true;

	return false;
}

function is_scroll_height_higher_than_value(page_scroll_height, value) {
	if (page_scroll_height > parseInt(value)) return true;

	return false;
}

function calculate_scroll_height_of_body() {
	if (document.body.scrollTop || document.documentElement.scrollTop) {
		// if there is any value between two

		//check which one is not zero & set as page_scroll_height variable
		if (check_is_value_zero(document.body.scrollTop)) {
			return parseInt(document.body.scrollTop);
		} else {
			return parseInt(document.documentElement.scrollTop);
		}
	}
}

//FUNCTIONS END

// export {
// 	event_listener,
// 	is_scroll_height_lower_than_value,
// 	is_scroll_height_higher_than_value,
// 	calculate_scroll_height_of_body
// };
