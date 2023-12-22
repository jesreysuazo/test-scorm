let questionList = [
    '1. What is the maximum allowed deployed time for the forward emergency towing system?',
    '2. What should be the working strength of towing components of tanker with 20,000 tons of deadweight and over but less than 50,000 tons deadweight?',
    '3. Which of the following emergency towing components do have specific strength requirements? Select all that apply',
    '4. Which one of the following IMO publications sets out the requirements for emergency towing system?',
    '5. What is the minimum number of copies of the emergency towing booklet that should be kept on board?',
]

function mouseIn (id) {

    if(id === 'homeBtn'){
        const elem = document.getElementById('homeBtn');
        elem.setAttribute('src','./assets/mobile/6HdPRZOZ4ZU_B30.png')
    }
}

function mouseOut (id) {

    if(id === 'homeBtn'){
        const elem = document.getElementById('homeBtn');
        elem.setAttribute('src','./assets/mobile/6HdPRZOZ4ZU.png')
    }
}

function showQuestions () {
    const counterElement = document.getElementById("pagination");
    const displayQuestion = document.getElementById('question');
    counterElement.textContent = '2 / 2';
    setTimeout(() => {
        document.getElementById('homePage').style.display="none";
        document.getElementById('questionnaire').style.display="block";
        displayQuestion.textContent = questionList[0]
        alert('utos ni jok')
    }, 500);

}

function nextQuestion () {

}

window.addEventListener("message", message => {
    showQuestions()
    // alert(message.data)
  });
