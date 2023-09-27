export const SKILLS = {
    // ----------------------------------------
    // Attribute / Skill Relationship(s)
    // ----------------------------------------
    'strength': [
        "athletics"
    ],
    'dexterity': [
        "acrobatics",
        "sleight_of_hand",
        "stealth"
    ],
    'constitution': [
        // None
    ],
    'intelligence': [
        "arcana",
        "history",
        "investigation",
        "nature",
        "religion",
    ],
    'wisdom': [
        "animal_handling",
        "insight",
        "medicine",
        "perception",
        "survival"
    ],
    'charisma': [
        "deception",
        "intimidation",
        "performance",
        "persuasion",
    ],
    // ----------------------------------------
    // Helper Functions
    // ----------------------------------------
    findAttribute: function(skill) {
        return Object.keys(this).find(
            attr => (typeof this[attr] !== 'function') && this[attr].includes(skill)
        );
    },
    getAttributes: function() {
        return Object.keys(this).filter(
            attr => typeof this[attr] !== 'function'
        );
    },
    getSkills: function() {
        return Object.values(this).filter(
            attr => typeof attr !== 'function'
        ).flat().sort();
    }
};