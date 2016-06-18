
const mapper = {
    
    ':monkey_face:':'🐵',
    ':grin:': '😁',
    ':smile:': '😀',
    ':innocent:': '😇',
    ':speak_no_evil:': '🙊',
    ':scream:': '😱',
    ':poop:': '💩',
    ':greek_mark:': '\u037E',
    ':kissing_heart:': '😘',
    ':broken_heart:': '💔',
    ':ribbon_heart:': '💝',
    ':heart:': '❤️',
    ':heart_eyes:': '😍',
    ':skull:': '💀',
    ':bomb:': '💣',
    ':bug:': '🐞',
    ':1:': '༼ つ ◕_◕༽つ',
    ':2:': '✄---------❤',
    ':3:': '♡ +♡ = ❤ ²',
    ':4:': 'I ♥ you',
};

export function isEmoji(str){

    return str in mapper;
};

export function mapToUnicode(str){

    return mapper[str];
};

export function getMapper(){

    return mapper;
};
