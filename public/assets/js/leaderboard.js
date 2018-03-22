function Display(playerData) {
    $.post("/api/players", playerData);
    // .then(getAuthors);
}

Display(playerData);