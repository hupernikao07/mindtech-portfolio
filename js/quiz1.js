var currentCategory = ['history', 'language', 'nature', 'technology'];
var Questions = [

    // store answer with questions for easier retrieval
    { category: 'history', question: 'Long before the Spaniards conquered the Philippine, it already had its own system of civilization', answer: true },
    { category: 'history', question: 'Ferdinand Magellan discovered the Philippines in 1527', answer: false },
    { category: 'history', question: 'Roy Lopez de Villalobos named the Philippines in honor of King Phillip II of Spain in 1543', answer: true },
    { category: 'history', question: 'The Philippine was a Japanese territory 1901-1935', answer: false },
    { category: 'history', question: 'Japan occupied the Philippines 1943-1945', answer: true },
    { category: 'history', question: 'The Philippines was granted independence from the U.S. on July 14, 1946', answer: true },
    { category: 'history', question: 'The Philippines is the only country that uses jeepneys as mode of public transportation', answer: true },
    { category: 'history', question: 'Christmas last longer in the Philippines than in any other country', answer: true },
    { category: 'history', question: 'A Filipino named Roberto del Rosario was granted the patent for the first karaoke singalong machine in 1971', answer: false },
    { category: 'history', question: '\'Gomburza\', the three Filipino priests who were executed for their alleged involvement in the 1872 Cavite Mutiny', answer: true },

    { category: 'animals', question: '\'Maya\' is Philippines\' national bird', answer: false },
    { category: 'animals', question: 'The tarsier, one of the smallest primates in the world, is found in the Philippines alone', answer: true },
    { category: 'animals', question: 'Tawilis is endemic to Taal Lake, meaning it is found only in the Philippines', answer: true },
    { category: 'animals', question: 'The smallest hoofed animal in the world is the Philippine mouse deer, commonly known in the country as \'pilandok\', is only found in Batanes region', answer: false },
    { category: 'animals', question: 'Jellyfish Lake in the Philippines contains less than 3 million jellyfish', answer: false },
    { category: 'animals', question: 'Tamaraw is the national animal of the Philippines', answer: false },
    { category: 'animals', question: 'Sinarapan, the world’s smallest food fish, can be only found in the Philippines, particularly in the Bicol River, and in Lakes Manapao, Katugday, Bato, and Buhi in Camarines Sur', answer: true },
    { category: 'animals', question: 'The Mindoro dwarf buffalo, commonly called carabao or \'kalabaw \' in tagalog, is a critically endangered mammal that can be only found in Mindoro', answer: false },
    { category: 'animals', question: 'Among the Philippines’ fauna are some endangered species like the Philippine Eagle, the tarsier, and the mouse deer', answer: true },
    { category: 'animals', question: 'Lolong was caught in a Bunawan creek in the province of Agusan del Sur in the Philippines on September 3, 2011, he was measured in his enclosure, and confirmed as the world\'s largest crocodile ever caught and placed in captivity. ', answer: true },

    { category: 'culture', question: 'Before, Filipino men used to serenade (harana) a woman he was courting', answer: true },
    { category: 'culture', question: 'The Filipino people are basically of Malay stock with a sprinkling of Chinese, American, Spanish and German blood', answer: false },
    { category: 'culture', question: 'The Philippines has more than 111 dialects spoken, owing to the subdivisions of these basic regional and cultural groups', answer: true },
    { category: 'culture', question: 'Every December 31, the Filipinos prepare 12 round fruits for good luck to welcome the New Year', answer: true },
    { category: 'culture', question: 'Igorots in Sagada follow a unique burial ritual wherein they burn the coffins and dance around the fire', answer: false },
    { category: 'culture', question: 'Filipinos call their older siblings “noona/unnie” for older sisters and  “oppa/hyung” for older brothers to show respect', answer: false },

];

// when declared over here other functions will see it; it's not best practice to register them in global/window scope, but better than nothing ;)
var count = 0;
var points = 0;
var category;
var question;

//show answer buttons only after clicking start button
function showButtons() {
    document.getElementById('answerT').style.display = "";
    document.getElementById('answerF').style.display = "";
}

// choose a category and a question
function catAndQuest() {
    start.style.display = 'none';
    showButtons();

    document.getElementById('points').innerHTML = 'Points: ' + (points);
    document.getElementById('count').innerHTML = 'Question ' + (++count) + ' \/ 27';

    currentCategory = Questions.map(function (question) {
        return question.category;
    });
    category = currentCategory[Math.floor(Math.random() * currentCategory.length)];
    document.getElementById('category').innerHTML = 'Category: ' + (category);

    var questionList = Questions.filter(function (question) {
        return question.category === category;
    });

    question = questionList[Math.floor(Math.random() * questionList.length)];
    document.getElementById('quest').innerHTML = question.question;
}

// create a copy of Questions array
var copy = [].concat(Questions);

// delete used question out of the copy array
function deleteUsed() {
    if (Questions.length > 0) {
        Questions.splice(Questions.indexOf(question), 1);
    } else {
        document.getElementById('answerT').style.display = "none";
        document.getElementById('answerF').style.display = "none";
        document.getElementById('questions').style.display = "none";
        document.getElementById('looser').style.display = "";
        document.getElementById('reset').style.display = "";
    }
}

//user answered question
function answer(value) {
    deleteUsed();
    if (value === question.answer) {
        points++;
        if (points == 15) {
            document.getElementById('answerT').style.display = "none";
            document.getElementById('answerF').style.display = "none";
            document.getElementById('questions').style.display = "none";
            document.getElementById('winner').style.display = "";
            document.getElementById('reset').style.display = "";
        }
    }
    catAndQuest();
}

//restart the game
function restart() {
    document.location.href = "";
}

