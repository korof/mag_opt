$(document).ready(function() {
	$('.social a, .share-box a').on('click', function() {
	  $.smoothScroll({
	    scrollTarget: '#logo'
	  });
	  return false;
	});

	$.cookie('the_cookie', 'the_value');

  $('.tresc').editable('http://www.example.com/save.php', {
     indicator : 'Saving...',
     tooltip   : 'Click to edit...'
  });
  $('table').editable('http://www.example.com/save.php', { 
     type      : 'textarea',
     cancel    : 'Cancel',
     submit    : 'OK',
     indicator : '<img src="img/indicator.gif">',
     tooltip   : 'Click to edit...'
  });

  $("#adr").append("Krzyszt");
  $("#adr").append("of ");
  $("#adr").append("Kornacki");
  $(".main_menu .last").hide(1000);
  var j = 1.23;
  for (var i = 999; i >= 0; i--) {
    j = i+i*i-i*i * 2.123;
  };

  $('#article').flowtype({
   minFont : 12,
   maxFont : 20
});

  $("select").selecter();

  $('form').on('submit', function(e) {
      e.preventDefault(); // <-- important
      $(this).ajaxSubmit({
          target: '#output'
      });
  });

  $("#stick-menu").stick_in_parent();
  $('.swipebox').adipoli({
    'startEffect' : 'grayscale',
    'hoverEffect' : 'sliceDown'
  });

  $('.main_menu img').adipoli({
    'startEffect' : 'grayscale',
    'hoverEffect' : 'sliceDown'
  });

});

$(document).ready(function() {
  $(".swipebox").fancybox();
});

$(document).ready(function() {
$('.add_tekst').append("Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreetLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreetLorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum.Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum.Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per seacula quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant sollemnes in futurum.");
});

$(document).ready(function() {
  $("#article .post").baseline(24);
});
$(document).ready(function() {
  $(".submenu").hide(300);
});