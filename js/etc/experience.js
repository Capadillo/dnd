const XP = {
    '1':  0,
    '2':  300,
    '3':  900,
    '4':  2700,
    '5':  6500,
    '6':  14000,
    '7':  23000,
    '8':  34000,
    '9':  48000,
    '10': 64000,
    '11': 85000,
    '12': 100000,
    '13': 120000,
    '14': 140000,
    '15': 165000,
    '16': 195000,
    '17': 225000,
    '18': 265000,
    '19': 305000,
    '20': 355000
};

function getLevel(xp) {
    for (let level = 20; level > 0; level--) {
        if (xp >= XP[level]) {
            return level;
        }
    }
}

function getLevelPercentage(xp) {
    let level = getLevel(xp);
    if (level >= 20) return 100;
    return ((xp / XP[level + 1]) * 100).toFixed(2);
}