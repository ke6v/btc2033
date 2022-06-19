var vid = document.getElementById('video');

document.getElementById("enter").addEventListener("click", function() {
	
	const target = document.getElementById("enter");

	target.style.opacity = '0';
    target.addEventListener('transitionend', () => target.remove());

	if (typeof window.orientation == 'undefined') { 
		vid.play();
	}
});

vid.onended = function () {
	vid.play();
};

let volume = document.querySelector("#volume");
volume.addEventListener("change", function(e) {
	vid.volume = e.currentTarget.value / 100;
})

var domain = window.location.hostname;

if(domain != "ruub.dev") {
  var vol = document.getElementById("volume");
  vol.parentNode.removeChild(vol);
}