(function() {

	$('.chat-open').on('click', function(f) {

		f.preventDefault();
		$('#live-chat').slideToggle(300, 'swing');;

	});

	$('.chat-close').on('click', function(e) {

		e.preventDefault();
		$('#live-chat').fadeOut(300);

	});

}) ();