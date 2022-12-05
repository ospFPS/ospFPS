function formSubmit(event) {
	event.preventDefault();
	const url = "/api/data_form";
	const data = Object.fromEntries(new FormData(event.target).entries());
	let request = new XMLHttpRequest();
	request.open('POST', url, true);
	request.setRequestHeader("Content-type", "application/json");

	request.onload = function () {
		const res = JSON.parse(request.responseText);
		if (request.status != 200) {
			alert("Server encountered an error!\n" + res.error);
			return;
		}
		alert("The server says number times 2 = " + res.processed_data);
	};

	request.onerror = function (err) {
		alert("Server encountered an error!\n" + err);
	};

	request.send(JSON.stringify(data));
}

document.getElementById("health_form").addEventListener("submit", formSubmit);
