$(document).ready(function () {

  var playerScore = localStorage.getItem("score");
  var difficultyLevel = localStorage.getItem("difficulty");
  switch (difficultyLevel) {
    case "easy":
      difficultyLevel = 'E'
      break;
    case "moderate":
      difficultyLevel = "M"
      break;
    case "hard":
      difficultyLevel = "H"
  }

  var newScore = $("#score");
  var scoreDiv = $("<div>");
  scoreDiv = playerScore;
  newScore.append(scoreDiv);


  // take score from previous page
  console.log(localStorage.getItem("difficulty"));
  console.log(localStorage.getItem("score"));
  console.log("playerScore", playerScore);
  console.log("difficulty", difficultyLevel);

  $(".submit-btn").on("click", function handleFormSubmit(event) {
    event.preventDefault();
    var playerName = $("#inputName").val().trim();
    console.log("playerName", playerName);
    if (!playerName) {
      return;
    }
    var newPlayer = {
      player_name: playerName,
      points: playerScore,
      game_level: difficultyLevel
    };
    console.log(newPlayer);
    submitPlayer(newPlayer);
  });

  function submitPlayer(Player) {
    $.post("/api/players/", Player, function () {
      window.location.href = "/leaderboard.html";
    });
  }

});

