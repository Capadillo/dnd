function updateCharacterSheet(data) {
    const xp = 1000;
    $('#level').html("Level " + getLevel(xp));
    $('#level-percentage').html(getLevelPercentage(xp) + "%");
    $('#level-progress-bar').css("width", getLevelPercentage(xp) + "%");
}

$(() => {
    updateCharacterSheet();
});