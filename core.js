var myQuestions = [
    {
        question: "حاصل 70*7*4*1*0*1*23*23 چند میشود؟",
        answers: {
            a: '70',
            b: '0',
            c: '5060',
            d: '1234'
        },
        correctAnswer: 'b'
    },
    {
        question: "حاصل 8*0*9 چند میشود؟",
        answers: {
            a: '160',
            b: '320',
            c: '0',
            d: '78'
        },
        correctAnswer: 'c'
    },
    {
        question: "فناوری WIFI از چه نوع امواجی است؟",
        answers: {
            a: 'امواج مغناطیسی',
            b: 'امواج مکانیکی',
            c: 'امواج رادیویی',
            d: 'هیچکدام'
        },
        correctAnswer: 'c'
    },
    {
        question: "کدام یک از گزینه های زیر مرورگر نیست؟",
        answers: {
            a: 'گوگل',
            b: 'اکسپلورر',
            c: 'گوگل کروم',
            d: 'فایرفاکس'
        },
        correctAnswer: 'a'
    },
    {
        question: "اولین برندی که در تلویزیون های خود از دوربین استفاده کرد؟",
        answers: {
            a: 'Sony',
            b: 'Asus',
            c: 'LG',
            d: 'Samsung'
        },
        correctAnswer: 'd'
    }
];

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton) {

    function showQuestions(questions, quizContainer) {
        var output = [];
        var answers;

        for (var i = 0; i < questions.length; i++) {

            answers = [];

            for (letter in questions[i].answers) {

                answers.push(
                    '<label>'
                    + '<input type="radio" name="question' + i + '" value="' + letter + '">'
                    + letter + ': '
                    + questions[i].answers[letter]
                    + '</label>'
                );
            }

            output.push(
                '<div class="question">' + questions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div>'
            );
        }

        quizContainer.innerHTML = output.join('');
    }

    function showResults(questions, quizContainer, resultsContainer) {

        var answerContainers = quizContainer.querySelectorAll('.answers');

        var userAnswer = '';
        var numCorrect = 0;
        var correctPercent;

        for (var i = 0; i < questions.length; i++) {

            userAnswer = (answerContainers[i].querySelector('input[name=question' + i + ']:checked') || {}).value;

            if (userAnswer === questions[i].correctAnswer) {
                numCorrect++;

                answerContainers[i].style.color = 'lightgreen';
            }
            else {
                answerContainers[i].style.color = 'red';
            }
        }

        correctPercent = numCorrect * 100 / questions.length;
        resultsContainer.innerHTML = ' امتیاز شما ' + ' % ' + correctPercent;

    }

    showQuestions(questions, quizContainer);

    submitButton.onclick = function () {
        showResults(questions, quizContainer, resultsContainer);
    }

}