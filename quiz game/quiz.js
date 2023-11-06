// console.log(localStorage)
// Retrieve and display data from localStorage
const userDataDisplay = document.getElementById('userDataDisplay');
const userData = JSON.parse(localStorage.getItem('userData'));

if (userData) {
    userDataDisplay.innerHTML += `<p>Email: ${userData.email}</p>`;
    userDataDisplay.innerHTML += `<p>Full Name: ${userData.fullName.toUpperCase()}</p>`;
    userDataDisplay.innerHTML += `<p>Gender: ${userData.gender.toUpperCase()}</p>`;
} else {
    userDataDisplay.innerHTML = 'No data stored.';
}



// displayValue
console.log(localStorage)
let displayValue = "";
function appendToDisplay(value) {
    displayValue += value;
    document.getElementById("display").value = displayValue
}

// clearDisplay
function clearDisplay() {
    displayValue = "";
    document.getElementById("display").value ="";

}

// calculateResult
function calculateResult() {
    const result = eval(displayValue);
    document.getElementById("display").value = result;
    displayValue = result.toString();
}

const quizData = [
    {
        question: "What is the capital of France?",
        choices: ["Madrid", "Berlin", "London", "Paris"],
        correct: 3
    },
    {
        question: "Which planet is known as the Red Planet?",
        choices: ["Mars", "Venus", "Jupiter", "Saturn"],
        correct: 0
    },
    {
        question: "What is the largest mammal in the world?",
        choices: ["Elephant", "Giraffe", "Blue Whale", "Kangaroo"],
        correct: 2
    },
    {
        question: "Who won the latest presidential election in Nigeria?",
        choices: ["Obi", "kwankwanso", "Tinubu", "Atiku"],
        correct: 2
    },
    {
        question: "Who among the following won the record eighth Ballon d'Or 2023 for the best player in the world?",
        choices: ["Halland", "Messi", "Ronaldo", "Mpabbe"],
        correct: 1
    },
    {
        question: "Who is the Father of Mathematics?",
        choices: ["Isaac Newton", "Albert Eistien", "Archimedes", "Faradays"],
        correct: 2
    },
    {
        question: " Value of cos 360°?",
        choices: ["1", "360", "180", "0"],
        correct: 0
    },
    {
        question: "Who discovered the Symbol Infinity “∞”?",
        choices: ["Micheal Lambert", "Faraday", "Guru James", "John Wallis"],
        correct: 3
    },
    {
        question: "What is the next number of the following Sequences 1, 1, 2, 3, 5, 8, 13,_?",
        choices: ["22", "21", "14", "24"],
        correct: 1
    },
    {
        question: "In October 2023, which of the following bank and Reliance Retail came together to launch the co-branded Reliance Card?",
        choices: ["PNB", "SBI", "union Bank", "YES Bank"],
        correct: 1
    },
    {
        question: "The first woman to become a governor in Nigeria is?",
        choices: ["Mrs. Kate Chike", "Mrs. Chinyere Alex", "Mrs. Virginia Etiaba", "Mrs. Aisha Ibrahim"],
        correct: 2
    },
    {
        question: "What is the total of all the internal angles of a triangle?",
        choices: ["180", "360", "90", "240"],
        correct: 0
    },
    {
        question: "What does 6 to the power 0 equal?",
        choices: ["36", "0", "1", "6"],
        correct: 2
    },
    {
        question: "What is the highest common factor of 30 and 132?",
        choices: ["6", "52", "1232", "657"],
        correct: 0
    },
    {
        question: "What is the highest common factor of 30 and 132?",
        choices: ["arc", "stroke", "line", "tangent"],
        correct: 3
    },
    {
        question: "A man is four times as old as his son. In ten years, the man will be three times as old as his son. What is the man’s current age?",
        choices: ["32", "100", "80", "45"],
        correct: 2
    },
    {
        question: "At a party everyone shook hands with everyone else. In total, there were 66 handshakes. How many people were at the party?",
        choices: ["12", "33", "5", "66"],
        correct: 0
    },
    {
        question: "What is the only number that is twice the sum of its digits?",
        choices: ["11", "63", "99", "18"],
        correct: 3
    },
    {
        question: "what the American word for maybe?",
        choices: ["probably", "instead", "perhaps", "check"],
        correct: 2
    },
    {
        question: " Which of the words in this sentence is the adjective?: Playing with the kitten made her so happy.",
        choices: ["happy", "kitten", "made", "playing"],
        correct: 0
    },
    {
        question: "Which of the words in this sentence is the verb?: She looked out of the window onto the beach.",
        choices: ["onto", "window", "looked", "she"],
        correct: 2
    },
    {
        question: "How many syllables are in the word heavily?",
        choices: ["3", "7", "21", "8"],
        correct: 0
    },
    {
        question: "Which of these is a synonym for fast?",
        choices: ["run", "speed", "swift", "take over"],
        correct: 2
    },
    {
        question: "The curved surface area of a cylinder 5cm high is 110cm2. Find the radius of its base take π = 22/7",
        choices: ["4.5cm", "3.5cm", "5.5cm", "5.0cm"],
        correct: 1
    },
    {
        question: "Nigeria became a republic on?",
        choices: ["October 1, 1962", "October 1, 1960", "October 1, 1961", "October 1, 1963"],
        correct: 3
    },
    {
        question: "Which of these men introduced indirect rule in Nigeria?",
        choices: ["Dr. Nnamdi Azikiwe", "Sir James Robertson", "Lord Lugard", "Mungo Park"],
        correct: 2
    },
    {
        question: "A non-monarchial state can best be described as a",
        choices: ["Nation", "Federation", "Confederation", "Republic"],
        correct: 3
    },
    {
        question: "This African ruler resisted colonial rule and was later exiled by the colonial officials",
        choices: ["Oba of Benin", "King Jaja of Opopo", "Alaafin of Oyo", "Onisanbo of Ogbooro"],
        correct: 2
    },
    {
        question: "One of these was in existence before the outbreak of the second world war",
        choices: ["The League of Nations", "UNO", "OAU", "The Commonwealth of Nations"],
        correct: 0
    },
    {
        question: "The second military coup d'etat in Nigeria took place on",
        choices: ["June 29, 1966", "August 29, 1966", "July 29, 1966", "Febuary 29, 1966"],
        correct: 2
    },
    {
        question: "45 x 25 + 452 equals what number?",
        choices: ["1377", "1527", "1547", "1577"],
        correct: 3
    },
    {
        question: "807 + 542 + 277 equals what number?",
        choices: ["1626", "1646", "1627", "1628"],
        correct: 0
    },
    {
        question: "No. of hours in a week?",
        choices: ["451", "124", "168", "164"],
        correct: 2
    },
    {
        question: "What angle is defined by the sides 5 and 12 of a triangle whose sides measure 5, 13, and 12?",
        choices: ["360o", "90o", "45o", "180o"],
        correct: 1
    },
    {
        question: "The sum of terms equidistant from the beginning and end of an A.P. is equal to?",
        choices: ["sum of the first and last terms", "last term", "first term", "second term"],
        correct: 0
    },
    {
        question: "Which of these numbers is not a square?",
        choices: ["49", "25", "169", "186"],
        correct: 3
    },
    {
        question: "Fill in the missing word: ‘How........ chocolates are in the box",
        choices: ["any", "some", "Many", "much"],
        correct: 2
    },
    {
        question: "Fill in the missing word: ‘Amanda and Ryan have.......baby together",
        choices: ["a", "some", "her", "their"],
        correct: 0
    },
    {
        question: "How many odd numbers do we have here: 3, 5, 6, 52, 71, 1, 16, 24",
        choices: ["8", "4", "2", "3"],
        correct: 1
    },
    {
        question: "if 3x + 10 = 22, find the value of x",
        choices: ["4", "22", "23", "13"],
        correct: 0
    },
    {
        question: "The average of first 50 natural numbers is ",
        choices: ["50", "100", "25.5", "24.5"],
        correct: 2
    },
    {
        question: "Synonyms of Beautiful",
        choices: ["georgeous", "ugly", "fine", "awesome"],
        correct: 0
    },
    {
        question: "Synonyms of Big",
        choices: ["scanty", "enormous", "Large", "Plenty"],
        correct: 2
    },
    {
        question: "Synonyms of Brave",
        choices: ["intelligent", "capacity", "Bold", "Courageous"],
        correct: 2
    },
    {
        question: "106 × 106 – 94 × 94 = ??",
        choices: ["2411", "2400", "2004", "2491"],
        correct: 1
    },
    {
        question: "Which of the following numbers gives 240 when added to its own square?",
        choices: ["25", "24", "200", "15"],
        correct: 3
    },
    {
        question: "The simplest form of 1.5 : 2.5 is",
        choices: ["3 : 5", "9 : 5", "4 : 5", "3 : 6"],
        correct: 0
    },
    {
        question: "The largest number of six digits is",
        choices: ["4,99,989", "4,91,900", "4,98,989", "4,99,498"],
        correct: 0
    },
    {
        question: "What is the adverb in this sentence: ‘The train moved quickly though the city",
        choices: ["moved", "quickly", "though", "city"],
        correct: 1
    },
    {
        question: "Fill in the missing word: ‘Jupiter is hot but the sun is ....... than jupiter",
        choices: ["most hotter", "more hot", "more hotter", "More hotier"],
        correct: 1
    }


    
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const choicesForm = document.getElementById("choices-form");
const submitButton = document.getElementById("submit");
const resultElement = document.getElementById("result");
const scoreElement = document.getElementById("score");

function loadQuestion() {
    if (currentQuestion < quizData.length) {
        const data = quizData[currentQuestion];
        questionElement.textContent = data.question;
        for (let i = 0; i < 51; i++) {
            const choice = document.getElementById(`choice${i}`);
            const radio = document.querySelector(`input[name="choice"][value="${i}"]`);
            choice.textContent = data.choices[i];
            radio.checked = false;
        }
    } else {
        showResult();
    }
}

function checkAnswer() {
    const selectedChoice = document.querySelector('input[name="choice"]:checked');
    if (selectedChoice) {
        if (parseInt(selectedChoice.value) === quizData[currentQuestion].correct) {
            score += 2;
            document.getElementById("userScoreDisplay").innerHTML = score;
        }
        currentQuestion++;
        loadQuestion();
    }
}

function showResult() {
    quiz.style.display = "none";
    resultElement.style.display = "block";
    scoreElement.textContent = score;
}

submitButton.addEventListener("click", checkAnswer);
loadQuestion();































// const questions = document.getElementById('questions');
// let counter = 0;



// const questionsArray = [
//     {
//         question_no : 1,
//         question : 'Who won the presidential election?',
//         options : ['Obi', 'Atiku', 'Tinubu'],
//         correct_option : 'option3'
//     },

//     {
//         question_no : 2,
//         question : 'Who won the balondor?',
//         options : ['Messi', 'Haaland', 'Mbappe'],
//         correct_option : 'option1'
//     }

// ]

// // const option1 = document.getElementById('option1');
// // const option2 = document.getElementById('option2');
// // const option3 = document.getElementById('option3');

// console.log(questions);


// questions.innerHTML = `
//     <p>Question ${questionsArray[counter].question_no}</p>
//     <p>${questionsArray[counter].question}</p>
//     <label for="">${questionsArray[counter].options[0]}</label>
//     <input type="radio" name="question1" value = '${questionsArray[counter].options[0]}' id="option1">

//     <label for="">${questionsArray[counter].options[1]}</label>
//     <input type="radio" name="question1" value="${questionsArray[counter].options[1]}" id="option2">

//     <label for="">${questionsArray[counter].options[2]}</label>
//     <input type="radio" name="question1" value="${questionsArray[counter].options[2]}" id="option3">
// `

// function Next(){
//     counter++
//     questions.innerHTML = `
//     <p>Question ${questionsArray[counter].question_no}</p>
//     <p>${questionsArray[counter].question}</p>
//     <label for="">${questionsArray[counter].options[0]}</label>
//     <input type="radio" name="question1" value = '${questionsArray[counter].options[0]}' id="option1">

//     <label for="">${questionsArray[counter].options[1]}</label>
//     <input type="radio" name="question1" value="${questionsArray[counter].options[1]}" id="option2">

//     <label for="">${questionsArray[counter].options[2]}</label>
//     <input type="radio" name="question1" value="${questionsArray[counter].options[2]}" id="option3">
// `
// }