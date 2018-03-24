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
    $("tBody").empty();
    var tBody = $("tbody");
    var tRow = $("<tr>");
    for (var i = 0; i < response.length; i++) {

        var player_name = $("<td>").append(response[i].player_name);
        var game_level = $("<td>").append(response[i].game_level);
        var points = $("<td>").append(response[i].points);
        tRow.append(player_name, game_level, points);
        // appends rows to body
        $("tBody").html(tRow);
    };

};