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
