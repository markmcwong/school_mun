$(document).ready(function(){
        TweenLite.fromTo($(".page"), 5.5,{height:"70vh"},{height: "100vh", ease: Power4.easeIn});
});
function preload(arrayOfImages) {
    $(arrayOfImages).each(function () {
        $('<img />').attr('src',this).appendTo('body').hide();
    });
}

// creates array and holds images
var imageArray = ['images/unnamed-1.jpg', 'images/unnamed-2.jpg', 'images/unnamed-3.jpg', 'images/unnamed-1.jpg', 'images/unnamed-2.jpg', 'images/unnamed-3.jpg', 'images/unnamed-1.jpg', 'images/unnamed-2.jpg', 'images/unnamed-3.jpg', 'images/unnamed-1.jpg', 'images/unnamed-2.jpg', 'images/unnamed-3.jpg'];
// set the array to start at 0

preload(imageArray);
var i = 0;

var speed = 1900;
var maxSpeed = 0;

// create function 'slideShow'
function slideShow() {
increase();
//increment i by 1

// checks if i is greater than or equal to the length
if(i != imageArray.length) {
  TweenMax.set($("#empty"),{xPercent: -100});
    // if true, resets value to 0
    var div = document.getElementById('slideShow');
    div.innerHTML = '<img id="test" src="' + imageArray[i] + '" />';
    i++;

}else{
  TweenLite.to($("#test"), 1, {
   xPercent: 100,
   ease: Power1.easeOut
  });
  TweenLite.to($("#empty"), 1,
   {xPercent: 0});
}

// every 2 seconds change image
timer = setTimeout('slideShow()', speed);
};

function increase() {
  if(speed -100 > maxSpeed )
    speed -= 300;
};
