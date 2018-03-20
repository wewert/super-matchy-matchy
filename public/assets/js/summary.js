$(document).ready(function() {
  var playerScore = $("#score");
  var playerName = $("#name");

  // take score from previous page

  $(document).on("submit", "#name", handlePlayerSubmitButton);

  function handlePlayerSubmitButton(event) {
    event.preventDefault();

    if (!playerName.val().trim().trim()) {
      return;
    }
    // Calling the upsertPlayer function and passing in the value of the player_name and points
    upsertPlayer({
      player_name: playerName.val().trim(),
      points: playerScore.val().trim()
    });
  }

  function upsertPlayer(playerData) {
    $.post("/api/players", playerData);
      // .then(getAuthors);
  }
}

var addCardListener = function () {

    $deck.find('.card').bind('click', function () {
        var $this = $(this);

        if ($this.hasClass('show') || $this.hasClass('match')) { return true; }

        var card = $this.context.innerHTML;
        $this.addClass('open show');
        allOpen.push(card);

        if (allOpen.length > 1) {
            if (card === allOpen[0]) {
                $deck.find('.open').addClass('match');
                setTimeout(function () {
                    $deck.find('open').removeClass('open show');
                }, wait);
                match++;
            } else {
                $deck.find('.open').addClass('notmatch');
                setTimeout(function () {
                    $deck.find('.open').removeClass('open show');
                }, wait / 1.5);
            }
            allOpen = [];
            moves++;
            rating(moves);
            $moves.html(moves);
        }
    });
}
