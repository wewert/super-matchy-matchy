$(document).ready(function () {
    // Make sure we wait to attach our handlers until the DOM is fully loaded.
    var difficulty = localStorage.getItem("difficulty");
    console.log(difficulty);
    getGameLevel(difficulty);

    // pull data from the database according to the difficulty level
    function getGameLevel(difficulty) {
        var difficultyString = difficulty || "";
        if (difficultyString) {
            difficultyString = "/difficulty/" + difficultyString;
        }
        $.get("/api/difficulties" + difficultyString, function (data) {
            displayPlayers(data);
        });
    };

    // display values
    function displayPlayers(response) {
        $('tBody').empty();
        var tBody = $('tbody');

        for (var i = 0; i < response.length; i++) {
            var tRow = $('<tr>');
            var playerName = "<td id= 'player-column'> " + response[i].player_name + "</td>";
            var gameLevel = "<td id= 'level-column'> " + response[i].game_level + "</td>";
            var points = "<td id= 'score-column'> " + response[i].points + "</td>";
            // var playerName = $('<td>').text(response[i].player_name);
            // var gameLevel = $('<td>').text(response[i].game_level);
            // var points = $('<td>').text(response[i].points);
            tRow.append(playerName, gameLevel, points);

            // appends rows to body
            $('tBody').append(tRow);

        };

    };

})