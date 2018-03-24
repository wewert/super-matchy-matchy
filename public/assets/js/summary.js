$(document).ready(function() {

  var playerScore = localStorage.getItem("score");
  var difficultyLevel = localStorage.getItem("difficulty");
  var newScore = $("#score");
  var scoreDiv = $("<div>");
  scoreDiv = playerScore;
  newScore.append(scoreDiv);
  // $("$score") = playerScore;


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
    $.post("/api/players/", Player, function() {
      window.location.href = "/leaderboard.html";
    });
  }

  // $(".submit-btn").on("click", function() {
  //   event.preventDefault();
  //   var playerName = $("#inputName").val().trim();
  //   console.log("playerName", playerName);

    // if (!playerName.val().trim().trim()) {
    //   return;
    // }


    // Calling the upsertPlayer function and passing in the value of the player_name and points
    // updatePlayer({
    //   player_name: playerName,
    //   points: playerScore,
    //   game_level: difficultyLevel
    // });




    // });
    //
    // function updatePlayer(playerData) {
    //   $.post("/api/players", playerData, function() {
    //     window.location.href = "/leaderboard.html";
    //   });
    // };
  // })
  // $(document).on("submit", handlePlayerSubmitButton);
  //
  // function handlePlayerSubmitButton(event) {
  //   event.preventDefault();
  //
  //   var playerName = $("#inputName");
  //   console.log("playerName", playerName);



  // function updatePlayer(playerData) {
  //   $.ajax({
  //     method: "PUT",
  //     url: "/api/players",
  //     data: player
  //   })
  //   .done(function() {
  //     window.location.href = "/leaderboard.html";
  //   });
  // }

});
