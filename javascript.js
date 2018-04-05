//Menu com efeito de rolagem scroll
$('nav a,div a').click(function(e){
    e.preventDefault();
    var id = $(this).attr('href'),
        targetOffaset = $(id).offset().top,
        menuHeight = $('nav').innerHeight();

    $('html, body').animate({
    	scrollTop: targetOffaset -79
    }, 500);
});
/******************FIM********************/
/******************INICIO*****************/
$(window).on("scroll", function() {
	if($(window).scrollTop()) {
		$('nav, #navbarNav').addClass('black');

	}
	else{
		$('nav, #navbarNav').removeClass('black');
	}
});
/******************FIM********************/
/******************INICIO*****************/
$(window).ready(function(){
    $('div #my_image').on('click',function(){
      var src= $(this).attr('src');
        $("#model-img").attr('src',src);
        $("#joes").modal('show');
    });   
});

/******************FIM********************/
/******************INICIO*****************/

function openModal() {
  document.getElementById('myModal').style.display = "block";
}

function closeModal() {
  document.getElementById('myModal').style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
/******************FIM********************/
/******************INICIO Google Maps*****************/

function initMap() {
        var uluru = {lat: -23.417576, lng: -46.0357597};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 10,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }
  
/******************FIM********************/
