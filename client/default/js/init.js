var myScroll;
function loaded() {
	myScroll = new iScroll('wrapper', { scrollbarClass: 'myScrollbar' });
	doBind();
}

function doBind(){
  $('.myScrollbarV').unbind().bind('click', function(e){
	  var offsetY = e.offsetY;
	  var fullHeight = $('#thelist').height();
	  var scrollY = offsetY/$(this).height() * fullHeight;
	  myScroll.scrollTo(0, -1*scrollY, 100);
	})
}

function refreshScroll(){
  myScroll().refresh();
  doBind();
}

document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);

document.addEventListener('DOMContentLoaded', loaded, false);