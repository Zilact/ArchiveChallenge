// ================================
// BRAILLE TRANSLATOR
// ================================

const BRAILLE = {

    map: {
        "a":"⠁","b":"⠃","c":"⠉","d":"⠙","e":"⠑",
        "f":"⠋","g":"⠛","h":"⠓","i":"⠊","j":"⠚",

        "k":"⠅","l":"⠇","m":"⠍","n":"⠝","o":"⠕",
        "p":"⠏","q":"⠟","r":"⠗","s":"⠎","t":"⠞",

        "u":"⠥","v":"⠧","w":"⠺","x":"⠭","y":"⠽",
        "z":"⠵",

        " ":"⠀",

        ".":"⠲",
        ",":"⠂",
        "!":"⠖",
        "?":"⠦",
        "'":"⠄",
        "-":"⠤",

        "0":"⠚",
        "1":"⠁",
        "2":"⠃",
        "3":"⠉",
        "4":"⠙",
        "5":"⠑",
        "6":"⠋",
        "7":"⠛",
        "8":"⠓",
        "9":"⠊"
    },

    translate(text){

        text = text.toLowerCase();

        let result = "";

        for(const letter of text){

            result +=
                this.map[letter] ??
                letter;

        }

        return result;

    }

};

// ================================
// FILLER SENTENCES
// ================================

const BLUE_LINES = [

    "Nothing unusual appears here.",
    "Everything continues as expected.",
    "The pattern remains unchanged.",
    "There is no useful information nearby.",
    "This section offers no answers.",
    "Continue reading carefully.",
    "The search continues.",
    "The arrangement stays consistent.",
    "Another ordinary sentence.",
    "Everything seems identical.",
    "No important detail appears here.",
    "This line contains nothing special.",
    "The text repeats familiar ideas.",
    "Nothing has changed.",
    "There is no hidden meaning here.",
    "The page remains quiet.",
    "The search is still incomplete.",
    "Most people read too quickly.",
    "Careful observation takes time.",
    "Another sentence passes by.",
    "The pattern continues.",
    "Nothing useful appears yet.",
    "There are many words here.",
    "Everything remains ordinary.",
    "The text offers no clue.",
    "You continue reading.",
    "The page is unchanged.",
    "No answer appears here.",
    "This sentence is ordinary.",
    "Another line appears.",
    "The arrangement remains steady.",
    "No hidden message here.",
    "Still searching.",
    "Nothing stands out.",
    "The search continues quietly.",
    "Many lines look similar.",
    "The page is full of text.",
    "Observation matters.",
    "Patience helps.",
    "The answer is not obvious.",
    "The structure stays the same.",
    "No important information appears.",
    "Keep looking carefully.",
    "Everything remains consistent.",
    "The pattern does not change.",
    "The search continues onward.",
    "Another filler sentence.",
    "Nothing remarkable appears.",
    "The wall continues.",
    "The text extends further."

];

// ================================
// ORANGE LINES
// ================================

const ORANGE_LINES = [

    "You're searching with confidence, but not precision.",

    "Looking longer is not the same as looking closer.",

    "You are still missing something obvious.",

    "The answer has been visible the entire time.",

    "Nothing has changed since your last attempt.",

    "The page rewards patience more than speed.",

    "You have overlooked important details before.",

    "Some things are easier to miss than to find.",

    "This puzzle is simpler than it appears.",

    "Focus beats speed.",

    "Careful observation matters more than guessing.",

    "Reading everything is not the same as understanding.",

    "Most searches fail because they move too quickly.",

    "The page remains unchanged.",

    "Some answers hide in plain sight.",

    "Not every unusual thing is important.",

    "Interesting choices have been made.",

    "Patience is beginning to matter.",

    "You continue searching.",

    "There are easier ways to miss things."

];
// ================================
// PUZZLE GENERATOR
// ================================

function shuffle(array){

    for(let i = array.length - 1; i > 0; i--){

        const j = Math.floor(Math.random() * (i + 1));

        [array[i], array[j]] = [array[j], array[i]];

    }

}

function generateBraillePuzzle(){

    const puzzle = [];

    //----------------------------------
    // 279 BLUE LINES
    //----------------------------------

   for(let i = 0; i < 279; i++){

    let sentence = "";

    const pieces = 2 + Math.floor(Math.random() * 3);

    for(let j = 0; j < pieces; j++){

        sentence +=
            BLUE_LINES[
                Math.floor(
                    Math.random() *
                    BLUE_LINES.length
                )
            ];

        if(j < pieces - 1)
            sentence += " ";

    }

    puzzle.push({

        color:"blue",

        text:BRAILLE.translate(sentence)

    });

}
    //----------------------------------
    // 40 ORANGE LINES
    //----------------------------------

    for(let i = 0; i < 40; i++){

        let sentence = "";

        const pieces = 2 + Math.floor(Math.random() * 2);

        for(let j = 0; j < pieces; j++){

            sentence +=
                ORANGE_LINES[
                    Math.floor(
                        Math.random() *
                        ORANGE_LINES.length
                    )
                ];

            if(j < pieces - 1)
                sentence += " ";

        }

        puzzle.push({

            color:"orange",

            text:BRAILLE.translate(sentence)

        });

    }
    //----------------------------------
    // REAL CLUE
    //----------------------------------

    puzzle.push({

        color:"real",

        text:BRAILLE.translate(
            "Finally found me"
        )

    });

    //----------------------------------
    // SHUFFLE
    //----------------------------------

    shuffle(puzzle);

    return puzzle;

}