const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));
const questionCounterText=document.getElementById('questionCounter');
const scoreText=document.getElementById('score');
let currentQuestion={};
let acceptingAnswers=true;
let score=0;
let questionCounter=0;
let availableQuestions=[];

let questions=[
{
	question: "Kto jest trenerem FC Barcelony?",
	choice1: "Tomasz Hajto",
	choice2: "Ernesto Valverde",
	choice3: "Quique Setien",
	choice4: "Jose Mourinho",
	answer:3
},

{
	question:"Jak nazywa się stadion FC Barcelony?",
	choice1: "Mestalla",
	choice2: "Camp Nou",
	choice3: "Signal Iduna Park",
	choice4: "White Hart Lane",
	answer:2
},
{
	question:"Holender, który został zakupiony przez Barcelonę latem 2019 to:",
	choice1: "Frenkie de Jong",
	choice2: "Virgil van Dijk",
	choice3: "Wesley Sneijder",
	choice4: "Memphis Depay",
	answer:1
},
{
	question:"Jakie wymiary ma boisko FC Barcelony?",
	choice1: "105x64m",
	choice2: "100x67m",
	choice3: "105x68m",
	choice4: "120x76m",
	answer:3
},
{
	question:"Jak brzmi dewiza klubu?",
	choice1: "Més que un club",
	choice2: "Club que",
	choice3: "Un club",
	choice4: "Mes club",
	answer:1
},
{
	question:"W którym roku została założona FC Barcelona?",
	choice1: "1902",
	choice2: "1901",
	choice3: "1899",
	choice4: "1893",
	answer:3
},
{
	question:"Jaki jest przydomek klubu?",
	choice1: "Burdurgrana",
	choice2: "Die Roten",
	choice3: "Blaugrana",
	choice4: "Arugana",
	answer:3
}]


const CORRECT_BONUS=10;
const MAX_QUESTIONS=7;

startGame = () => {
	questionCounter=0;
	score=0;
	availableQuestions=[...questions];
	getNewQuestion();
};

getNewQuestion=()=>{
	if(availableQuestions.length===0 || questionCounter>=MAX_QUESTIONS)
	{//do koncowej strony
localStorage.setItem("mostRecentScore",score);
		return window.location.assign("end.htm");
	}
	
	questionCounter++;
	questionCounterText.innerText=`${questionCounter}/${MAX_QUESTIONS}`;
	
	const questionIndex=Math.floor(Math.random()*availableQuestions.length);
	currentQuestion=availableQuestions[questionIndex];
	question.innerText=currentQuestion.question;
	
	choices.forEach(choice=>{
		const number=choice.dataset["number"];
		choice.innerText=currentQuestion["choice"+number];
		
	});
	
	availableQuestions.splice(questionIndex,1);
	acceptingAnswers=true;
	
};

choices.forEach(choice=>{
	choice.addEventListener("click",e=>{
		if(!acceptingAnswers)return;
		
		acceptingAnswers=false;
		const selectedChoice=e.target;
		const selectedAnswer=selectedChoice.dataset["number"];
		
		
		
		const classToApply=selectedAnswer==currentQuestion.answer ? 'correct':'incorrect';
		if(classToApply=='correct')
		{
			incrementScore(CORRECT_BONUS);
		}
		
		selectedChoice.parentElement.classList.add(classToApply);
		
		setTimeout( ()=> {
			selectedChoice.parentElement.classList.remove(classToApply);
			getNewQuestion();
		},1000);
	
		
	});
});



incrementScore=num=>{
	score+=num;
	scoreText.innerText=score;
};
startGame();