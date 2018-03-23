// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
    $.ajax("/players", {
        type: "GET"
    }).then(function (players) {
        console.log(players);
    });

});