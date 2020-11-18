/**боковое меню */
$('.menu-btn').on('click', function(e){
    e.preventDefault();
    $('.menu-top').toggleClass('menu_active_top');
  });

  $('.burger-line').on('click', function(e){
    e.preventDefault();
    $('.menu-top').toggleClass('menu_active_top');
  });
  /**Открытие окон profil */
$('.login-block-wr').click(function(e){
  $(this).closest('.login-block-wr').addClass('opened');
  e.preventDefault();
});
$('body').on('click', function(e){
  if (!$(event.target).closest('.login-block-wr').length) {
    $('.login-block-wr').removeClass('opened')
  }
})
/**search block */
$('.search-block-wr').click(function(e){
  $(this).closest('.search-block-wr').addClass('opened');
  e.preventDefault();
});
$('body').on('click', function(e){
  if (!$(event.target).closest('.search-block-wr').length) {
    $('.search-block-wr').removeClass('opened')
  }
})
/** cart Корзина  */
$('.cart-wr').click(function(e){
  $(this).closest('.cart-wr').addClass('opened');
  e.preventDefault();
});
$('body').on('click', function(e){
  if (!$(event.target).closest('.cart-wr').length) {
    $('.cart-wr').removeClass('opened')
  }
})
/*
  $(document).ready(function(e) {
    $("input[placeholder]").placeholder();
    $("#search-block-form .form-item input").focus(function(){
        $("#search-block-form").addClass("focus-active");
            })
    .blur(function(){
        $("#search-block-form").removeClass("focus-active");
    });
});*/
/*открытие подменю */
$(function () {
  var el = $('#nav_list_first li a');
  $('#nav_list_first li:has("ul")').append('<span></span>');
  el.click(function() {
    var checkElement = $(this).next();
    checkElement.stop().animate({'height':'toggle'},500).parent().toggleClass('active');
    if(checkElement.is('ul')){
      return false;
    }
  })
})
/* открытие меню*/
$('.CL-Menu-open').on('click', function() {
  $("#Cl-Menu-clouse").toggle();
});
$('.ColLeft-down').on('click', function() {
  $(".Cl-Menu-clouse-down").toggle();
});
$('.ColLeft-down1').on('click', function() {
  $(".Cl-Menu-clouse-down1").toggle();
});

/**ползунок */

$(function() {
  $( "#slider-range" ).slider({
    // orientation: "vertical",
    // step: 15,
    range: true,
    min: 0,
    max: 40000,
    values: [ 0, 40000 ],
    slide: function( event, ui ) {
      $( "#amount" ).val( ui.values[ 0 ] );
      $( "#amount_1" ).val( ui.values[ 1 ] );
    }
  });
  $( "#amount" ).val( $( "#slider-range" ).slider( "values", 0 ) );
  $( "#amount_1" ).val( $( "#slider-range" ).slider( "values", 1 ) );

  // Изменение местоположения ползунка при вводиде данных в первый элемент input
  $("input#amount").change(function(){
    var value1=$("input#amount").val();
    var value2=$("input#amount_1").val();
      if(parseInt(value1) > parseInt(value2)){
      value1 = value2;
      $("input#amount").val(value1);
    }
    $("#slider-range").slider("values",0,value1);	
  });
      
  // Изменение местоположения ползунка при вводиде данных в второй элемент input 	
  $("input#amount_1").change(function(){
    var value1=$("input#amount").val();
    var value2=$("input#amount_1").val();

    if(parseInt(value1) > parseInt(value2)){
      value2 = value1;
      $("input#amount_1").val(value2);
    }
    $("#slider-range").slider("values",1,value2);
  });

  // фильтрация ввода в поля
  jQuery('#amount, #amount_1').keypress(function(event){
    var key, keyChar;
    if(!event) var event = window.event;
    
    if (event.keyCode) key = event.keyCode;
    else if(event.which) key = event.which;
  
    if(key==null || key==0 || key==8 || key==13 || key==9 || key==46 || key==37 || key==39 ) return true;
    keyChar=String.fromCharCode(key);
    
    if(!/\d/.test(keyChar))	return false;
  
  });

});

/**scrooll шапки сайта*/
$(document).ready(function() {
	
	var header = $("#wrapper"); // Меню
	var scrollPrev = 0 // Предыдущее значение скролла
	
	$(window).scroll(function() {
		var scrolled = $(window).scrollTop(); // Высота скролла в px
		var firstScrollUp = false; // Параметр начала сколла вверх
		var firstScrollDown = false; // Параметр начала сколла вниз
		
		// Если скроллим
		if ( scrolled > 0 ) {
			// Если текущее значение скролла > предыдущего, т.е. скроллим вниз
			if ( scrolled > scrollPrev ) {
				firstScrollUp = false; // Обнуляем параметр начала скролла вверх
				// Если меню видно
				if ( scrolled < header.height() + header.offset().top ) {
					// Если только начали скроллить вниз
					if ( firstScrollDown === false ) {
						var topPosition = header.offset().top; // Фиксируем текущую позицию меню
						header.css({
							"top": topPosition + "px"
						});
						firstScrollDown = true;
					}
					// Позиционируем меню абсолютно
					header.css({
						"position": "absolute"
					});
				// Если меню НЕ видно
				} else {
					// Позиционируем меню фиксированно вне экрана
					header.css({
						"position": "fixed",
						"top": "-" + header.height() + "px"
					});
				}
				
			// Если текущее значение скролла < предыдущего, т.е. скроллим вверх
			} else {
				firstScrollDown = false; // Обнуляем параметр начала скролла вниз
				// Если меню не видно
				if ( scrolled > header.offset().top ) {
					// Если только начали скроллить вверх
					if ( firstScrollUp === false ) {
						var topPosition = header.offset().top; // Фиксируем текущую позицию меню
						header.css({
							"top": topPosition + "px"
						});
						firstScrollUp = true;
					}
					// Позиционируем меню абсолютно
					header.css({
						"position": "absolute"
					});
				} else {
					// Убираем все стили
					header.removeAttr("style");
				}
			}
			// Присваеваем текущее значение скролла предыдущему
			scrollPrev = scrolled;
		}	
	});			
});

/**ползунок 2*/

$(function() {
  $( "#slider-range1" ).slider({
    // orientation: "vertical",
    // step: 15,
    range: true,
    min: 0,
    max: 40000,
    values: [ 0, 40000 ],
    slide: function( event, ui ) {
      $( "#amount1" ).val( ui.values[ 0 ] );
      $( "#amount_11" ).val( ui.values[ 1 ] );
    }
  });
  $( "#amount1" ).val( $( "#slider-range1" ).slider( "values", 0 ) );
  $( "#amount_11" ).val( $( "#slider-range1" ).slider( "values", 1 ) );

  // Изменение местоположения ползунка при вводиде данных в первый элемент input
  $("input#amount1").change(function(){
    var value1=$("input#amount1").val();
    var value2=$("input#amount_11").val();
      if(parseInt(value1) > parseInt(value2)){
      value1 = value2;
      $("input#amount1").val(value1);
    }
    $("#slider-range11").slider("values",0,value1);	
  });
      
  // Изменение местоположения ползунка при вводиде данных в второй элемент input 	
  $("input#amount_11").change(function(){
    var value1=$("input#amount1").val();
    var value2=$("input#amount_11").val();

    if(parseInt(value1) > parseInt(value2)){
      value2 = value1;
      $("input#amount_11").val(value2);
    }
    $("#slider-range1").slider("values",1,value2);
  });

  // фильтрация ввода в поля
  jQuery('#amount1, #amount_11').keypress(function(event){
    var key, keyChar;
    if(!event) var event = window.event;
    
    if (event.keyCode) key = event.keyCode;
    else if(event.which) key = event.which;
  
    if(key==null || key==0 || key==8 || key==13 || key==9 || key==46 || key==37 || key==39 ) return true;
    keyChar=String.fromCharCode(key);
    
    if(!/\d/.test(keyChar))	return false;
  
  });

});
