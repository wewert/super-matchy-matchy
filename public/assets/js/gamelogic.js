var boxOpened = "";
var imgOpened = "";
var yep = 0;
var nope = 0;
var score = nope + yep;
var counter = 30;
var imgFound = 0;
var source = "#boxcard";
var imgSource = [
	'assets/img/IMG1.jpg',
	'assets/img/IMG2.jpg',
	'assets/img/IMG3.jpg',
	'assets/img/IMG4.jpg',
	'assets/img/IMG5.jpg',
	'assets/img/IMG6.jpg',
	'assets/img/IMG7.jpg',
	'assets/img/IMG8.jpg'
];

function randomFunction(maxVal, minVal) {
	return Math.round(Math.random() * (maxVal - minVal) + minVal);
}

function shuffleImages() {
	var imgAll = $(source).children();
	var imgThis = $(source + " div:first-child");
	var imgArr = new Array();

	for (var i = 0; i < imgAll.length; i++) {
		imgArr[i] = $("#" + imgThis.attr("id") + " img").attr("src");
		imgThis = imgThis.next();
	}

	imgThis = $(source + " div:first-child");

	for (var z = 0; z < imgAll.length; z++) {
		var randomNumber = randomFunction(0, imgArr.length - 1);

		$("#" + imgThis.attr("id") + " img").attr("src", imgArr[randomNumber]);
		imgArr.splice(randomNumber, 1);
		imgThis = imgThis.next();
	}
}

function resetGame() {
	shuffleImages();
	$(source + " div img").hide();
	$(source + " div").css("visibility", "visible");
  score = 0;
	counter = 0;
	$("#success").remove();
	$("#counter").html("" + counter);
  $("#score").html("" + score);
	boxOpened = "";
	imgOpened = "";
	imgFound = 0;
	return false;
}

function openCard() {
	var id = $(this).attr("id");

	if ($("#" + id + " img").is(":hidden")) {
		$(source + " div").unbind("click", openCard);

		$("#" + id + " img").slideDown('fast');

		if (imgOpened == "") {
			boxOpened = id;
			imgOpened = $("#" + id + " img").attr("src");
			setTimeout(function () {
				$(source + " div").bind("click", openCard)
			}, 300);
		} else {
			currentOpened = $("#" + id + " img").attr("src");
			if (imgOpened != currentOpened) {
				nope = nope -= 100;
				setTimeout(function () {
					$("#" + id + " img").slideUp('fast');
					$("#" + boxOpened + " img").slideUp('fast');
					boxOpened = "";
					imgOpened = "";
				}, 400);
			} else {
				$("#" + id + " img").parent().css("visibility", "hidden");
				$("#" + boxOpened + " img").parent().css("visibility", "hidden");
				yep = yep += 250;
				imgFound++;
				boxOpened = "";
				imgOpened = "";
			}
			score = nope + yep;
			$("#score").html("" + score);

			setTimeout(function () {
				$(source + " div").bind("click", openCard)
			}, 400);
		}
		counter--;
		$("#counter").html("" + counter);
		if ((counter === 0) || (imgFound == imgSource.length)) {
			window.location.replace("summary.html");
			localStorage.setItem('score', score);
		}
	}
}

$(function () {
	for (var y = 1; y < 3; y++) {
		$.each(imgSource, function (i, val) {
			$(source).append("<div id=card" + y + i + "><img src=" + val + " />");
		});
	}
	$(source + " div").click(openCard);
	shuffleImages();
});
