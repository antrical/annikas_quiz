

// fetch('https://quizapi.io/api/v1/questions?apiKey=Ol8s0X2iWFe8w6p1L7Nckl9qM99YVH1mab9gjH3E&category=code&limit=10&tags=JavaScript')
// .then(response => response.json())
// .then(data => {
//   let newQuestion = [];
//   questions = data;
//   let firstQuestion = questions[0];
//   console.log(firstQuestion);
//   let quiz = document.getElementById("quiz-body");
//   let question = document.createElement('P');
//   question.innerHTML = firstQuestion.question;
//   quiz.appendChild(question);
//     //   En fråga
// });

// TO DO
//Skapa en klass för Player, med namn och poäng. ()
//Skapa ett textfält som spelare kan skriva in namn, och en Submit-knapp.()
//När spelaren skrivit in och trycker på Submit, ska en instans av klassen Player skapas.()
//Testa skriv ut namnet i instansen det i HTML. Skriv "Lycka till (Player.name) längst upp på sidan" ()
//Lägg in fetch i en funktion. Skapa en "START GAME"-knapp, och kör funktionen (starta spelet) när man klickar. ()


fetch('https://quizapi.io/api/v1/questions?apiKey=Ol8s0X2iWFe8w6p1L7Nckl9qM99YVH1mab9gjH3E&category=code&limit=10&tags=JavaScript')
.then(response => response.json())
.then(data => {
  let newQuestion = [];
  questions = data;
  console.log(questions);

  class QuizQuestion {
        constructor(question, answers, correctAnswers) {
            
            this.question = question;
            this.answers = answers;

            this.correct_answers = correctAnswers;
            
            let checkAnswers = (a,b,c,d,e,f) => {
                this.answer
            }

        }
    }



  questions.map( question => {
      let QuizIndex = new QuizQuestion(question.question, question.answers, question.correct_answers);
      console.log(QuizIndex);
      let quiz = document.querySelector("#quiz-body");
      let quizQuestion = document.createElement('DIV');
      quiz.appendChild(quizQuestion);

      let quizQuestionQuestion = document.createElement('P');
      quizQuestionQuestion.innerHTML = QuizIndex.question;
      quizQuestion.appendChild(quizQuestionQuestion);

      console.log(QuizIndex.answers);

      //add answer options to HTML


      let checkBoxA = document.createElement("INPUT");
      let checkBoxB = document.createElement("INPUT");
      let checkBoxC = document.createElement("INPUT");
      let checkBoxD = document.createElement("INPUT");
      let checkBoxE = document.createElement("INPUT");
      let checkBoxF = document.createElement("INPUT");

      checkBoxA.setAttribute('type', 'checkbox');
      checkBoxA.setAttribute('name', 'A');
      checkBoxB.setAttribute('type', 'checkbox');
      checkBoxB.setAttribute('name', 'B');
      checkBoxC.setAttribute('type', 'checkbox');
      checkBoxC.setAttribute('name', 'C');
      checkBoxD.setAttribute('type', 'checkbox');
      checkBoxD.setAttribute('name', 'D');
      checkBoxE.setAttribute('type', 'checkbox');
      checkBoxE.setAttribute('name', 'E');
      checkBoxF.setAttribute('type', 'checkbox');
      checkBoxF.setAttribute('name', 'F');

      quizQuestion.appendChild(checkBoxA);
      quizQuestion.appendChild(checkBoxB);
      quizQuestion.appendChild(checkBoxC);
      quizQuestion.appendChild(checkBoxD);
      quizQuestion.appendChild(checkBoxE);
      quizQuestion.appendChild(checkBoxF);

      let optionA = document.createElement("P");
      let optionB = document.createElement("P");
      let optionC = document.createElement("P");
      let optionD = document.createElement("P");
      let optionE = document.createElement("P");
      let optionF = document.createElement("P");

      optionA.textContent = "A: " + QuizIndex.answers.answer_a;
      optionB.textContent = "B: " + QuizIndex.answers.answer_b;
      optionC.textContent = "C: " + QuizIndex.answers.answer_c;
      optionD.textContent = "D: " + QuizIndex.answers.answer_d;
      optionE.textContent = "E: " + QuizIndex.answers.answer_e;
      optionF.textContent = "F: " + QuizIndex.answers.answer_f;

      quizQuestion.appendChild(checkBoxA);
      quizQuestion.appendChild(optionA);
      quizQuestion.appendChild(checkBoxB);
      quizQuestion.appendChild(optionB);
      quizQuestion.appendChild(checkBoxC);
      quizQuestion.appendChild(optionC);
      quizQuestion.appendChild(checkBoxD);
      quizQuestion.appendChild(optionD);
      quizQuestion.appendChild(checkBoxE);
      quizQuestion.appendChild(optionE);
      quizQuestion.appendChild(checkBoxF);
      quizQuestion.appendChild(optionF);
      //
  })
    //GÖR METOD DÄR MAN KOLLAR VAD SPELAREN CHECKAT IN, OCH JÄMFÖR MED KORREKTA SVAR.
    //RÄKNA UT POÄNGEN.
    //SPELA IGEN-KNAPP // hide och visa spelet igen 
});
