var affiliateBeautifier = (function () {
	var fn = {};
	var href = '';
	var data_href = '';
	var elements = '';

	fn.init = function(data) {
		fn.elements = document.querySelectorAll(data.selector);
		fn.event();
		fn.switch(data);
	};

	// Switch urls
	fn.switch = function() {
		[].forEach.call(fn.elements, function(e) {
			fn.get(e);
			fn.set(e);
		});
	};

	// Event
	fn.event = function() {
		['mousedown', 'touchstart'].forEach(function(event) {
			fn.elements.forEach(function(element) {
				element.addEventListener(event, function(e) {
					element.setAttribute('href', element.getAttribute('data-href') );
				});

			});
		});
	};

	// Get
	fn.get = function(e) {
		fn.getHref(e);
		fn.getDataHref(e);
	};

	// Set
	fn.set = function(e) {
		fn.setHref(e);
		fn.setDataHref(e);
	}

	// Get href
	fn.getHref = function(e) {
		fn.href = e.getAttribute('href');
	};

	// Get data href
	fn.getDataHref = function(e) {
		var data_href = e.getAttribute('data-href');
		fn.data_href = ( Boolean( data_href ) ) ? data_href : fn.href;
	};

	// Set href
	fn.setHref = function(e) {
		e.setAttribute('href', fn.data_href);

	};

	// Set data href
	fn.setDataHref = function(e) {
		e.setAttribute('data-href', fn.href);
	};

	return fn;
})();