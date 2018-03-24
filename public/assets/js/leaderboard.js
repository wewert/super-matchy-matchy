// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
    $.ajax("/players", {
        type: "GET"
    }).done(function (response) {
        // console.log(response);
        displayPlayers(response);
    });

});

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