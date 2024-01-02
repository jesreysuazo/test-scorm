
   // Get the aspect ratio container element
   const aspectRatioContainer = document.querySelector('.aspect-ratio-container');
   const homePageAudio = document.getElementById('homePageAudio');

   const styles = [
       {id:'headerText', value:3.5, unit:'vw', style: 'fontSize'},
       {id:'headerText', value:8, unit:'vw', style: 'right'},
       {id:'headerText', value:1.8, unit:'vw', style: 'top'},
       {id:'homeBtn', value:5, unit:'vw', style: 'width'},
       {id:'homeBtn', value:5, unit:'vw', style: 'height'},
       {id:'homeBtn', value:1, unit:'vw', style: 'right'},
       {id:'homeBtn', value:1.2, unit:'vw', style: 'top'},
       {id:'laptop', value:25, unit:'vw', style: 'width'},
       {id:'laptop', value:20, unit:'vw', style: 'height'},
       {id:'laptop', value:10, unit:'vw', style: 'paddingTop'},
       {id:'laptopScreen', value:19, unit:'vw', style: 'width'},
       {id:'laptopScreen', value:13, unit:'vw', style: 'height'},
       {id:'laptopScreen', value:11, unit:'vw', style: 'top'},
       {id:'laptopScreen2', value:19, unit:'vw', style: 'width'},
       {id:'laptopScreen2', value:13, unit:'vw', style: 'height'},
       {id:'laptopScreen2', value:11, unit:'vw', style: 'top'},
       {id:'banner', value:4, unit:'vw', style: 'fontSize'},
       {id:'banner', value:1, unit:'vw', style: 'padding'},
       {id:'banner', value:1, unit:'vw', style: 'margin'},
       {id:'desc1', value:2.4, unit:'vw', style: 'fontSize'},
       {id:'desc2', value:2.4, unit:'vw', style: 'fontSize'},
       {id:'desc3', value:2.4, unit:'vw', style: 'fontSize'},
       {id:'btnContainer', value:1, unit:'vw', style: 'right'},
       {id:'btnContainer', value:1, unit:'vw', style: 'top'},
       {id:'btnContainer', value:1, unit:'vw', style: 'gap'},
       {id:'btnFooter1', value:4.5, unit:'vw', style: 'height'},
       {id:'btnFooter1', value:4.5, unit:'vw', style: 'width'},
       {id:'btnFooter2', value:4.5, unit:'vw', style: 'height'},
       {id:'btnFooter2', value:4.5, unit:'vw', style: 'width'},
       {id:'btnFooter3', value:4.5, unit:'vw', style: 'height'},
       {id:'btnFooter3', value:4.5, unit:'vw', style: 'width'},
       {id:'btnFooter4', value:4.5, unit:'vw', style: 'height'},
       {id:'btnFooter4', value:4.5, unit:'vw', style: 'width'},
       {id:'btnFooter4', value:4.5, unit:'vw', style: 'width'},
       {id:'pagination', value:2.5, unit:'vw', style: 'fontSize'},
       {id:'pagination', value:1, unit:'vw', style: 'marginLeft'},
       {id:'pagination', value:1, unit:'vw', style: 'marginRight'},
       {id:'pagination', value:0.8, unit:'vw', style: 'paddingTop'},
       {id:'questionBanner', value:2, unit:'vw', style: 'fontSize'},
       {id:'questionBanner', value:0.6, unit:'vw', style: 'paddingTop'},
       {id:'questionBanner', value:0.6, unit:'vw', style: 'paddingBottom'},
       {id:'questionBanner', value:1.2, unit:'vw', style: 'paddingLeft'},
       {id:'questionBanner', value:1.2, unit:'vw', style: 'paddingRight'},
       {id:'scoreBanner', value:2, unit:'vw', style: 'fontSize'},
       {id:'scoreBanner', value:0.6, unit:'vw', style: 'paddingTop'},
       {id:'scoreBanner', value:0.6, unit:'vw', style: 'paddingBottom'},
       {id:'scoreBanner', value:1.2, unit:'vw', style: 'paddingLeft'},
       {id:'scoreBanner', value:1.2, unit:'vw', style: 'paddingRight'},
       {id:'instructions', value:1.55, unit:'vw', style: 'fontSize'},
       {id:'question', value:2.2, unit:'vw', style: 'fontSize'},
       {id:'scormTitle', value:2, unit:'vw', style: 'fontSize'},
       {id:'options_0', value:2, unit:'vw', style: 'fontSize'},
       {id:'options_0', value:1, unit:'vw', style: 'borderRadius'},
       {id:'options_1', value:2, unit:'vw', style: 'fontSize'},
       {id:'options_1', value:1, unit:'vw', style: 'borderRadius'},
       {id:'options_2', value:2, unit:'vw', style: 'fontSize'},
       {id:'options_2', value:1, unit:'vw', style: 'borderRadius'},
       {id:'options_3', value:2, unit:'vw', style: 'fontSize'},
       {id:'options_3', value:1, unit:'vw', style: 'borderRadius'},
       {id:'option_0', value:2, unit:'vw', style: 'width'},
       {id:'option_0', value:2, unit:'vw', style: 'height'},
       {id:'option_1', value:2, unit:'vw', style: 'width'},
       {id:'option_1', value:2, unit:'vw', style: 'height'},
       {id:'option_2', value:2, unit:'vw', style: 'width'},
       {id:'option_2', value:2, unit:'vw', style: 'height'},
       {id:'option_3', value:2, unit:'vw', style: 'width'},
       {id:'option_3', value:2, unit:'vw', style: 'height'},
       {id:'btnSubmit', value:1.5, unit:'vw', style: 'fontSize'},
       {id:'errModal', value:0.5, unit:'vw', style: 'borderRadius'},
       {id:'btnModalContainer', value:3, unit:'vw', style: 'height'},
       {id:'btnModalContainer', value:3, unit:'vw', style: 'marginTop'},
       {id:'btnModal', value:2, unit:'vw', style: 'borderRadius'},
       {id:'modalHeader', value:1.5, unit:'vw', style: 'fontSize'},
       {id:'modalBody', value:1.3, unit:'vw', style: 'fontSize'},
       {id:'passedCard', value:1, unit:'vw', style: 'borderRadius'},
       {id:'cardText', value:6, unit:'vw', style: 'fontSize'},
       {id:'remarksText', value:3.5, unit:'vw', style: 'fontSize'},
       {id:'remarksTextFailed', value:2.8, unit:'vw', style: 'fontSize'},
       {id:'passingScoreText', value:3, unit:'vw', style: 'fontSize'},
       {id:'userScoreText', value:3, unit:'vw', style: 'fontSize'},
       {id:'txtIns', value:2.5, unit:'vw', style: 'fontSize'},
       {id:'endBtn', value:2, unit:'vw', style: 'fontSize'},
   ]

   // Function to convert vw to px based on aspect ratio container width
   function vwToPx(vw) {
     const width = aspectRatioContainer.offsetWidth;
     return (vw * width) / 100;
   }

   // Function to update font size based on aspect ratio container width
   function updateSizeValue(id,value,styles) {
     const styleElement = document.getElementById(id);
     const vwFontSize = value; // Set your initial font size in vw
     const pxFontSize = vwToPx(vwFontSize);
     styleElement.style[styles] = pxFontSize + 'px';

   }

   // Log initial dimensions and update font size
   window.addEventListener('load', function () {
     logDimensions();
   });

   function logDimensions() {
     const width = aspectRatioContainer.offsetWidth;
     const height = aspectRatioContainer.offsetHeight;
     const viewportWidth = window.innerWidth;
     const viewportHeight = window.innerHeight;

     if(currentQuestionIndex != 5){
        displayQuestionAndOptions(questionList[currentQuestionIndex]);

     }
     if (width === viewportWidth) {
       // Viewport width is equal to container width
       for (let index = 0; index < styles.length; index++) {
           const element = styles[index];
           const styleElement = document.getElementById(element.id);

           if (styleElement) {
               styleElement.style[element.style] = `${element.value}${element.unit}`;
           }
       }
     } else {
       // If container width is not equal to viewport width, update font size
       for (let index = 0; index < styles.length; index++) {
           const element = styles[index];
           updateSizeValue(element.id,element.value,element.style)
       }
     }
   }

   // Listen for resize events and log dimensions
   window.addEventListener('resize', logDimensions);



let questionList = [
   {
       question: '1. What is the maximum allowed deployed time for the forward emergency towing system?',
       options: [    
           {choice: 'A. 1 hour', isSelected: false},
           {choice: 'B. 2 hour', isSelected: false},
           {choice: 'C. 15 minutes', isSelected: false},
           {choice: 'D. 5 minutes', isSelected: false},
       ]
   },
   {
       question: '2. What should be the working strength of towing components of tanker with 20,000 tons of deadweight and over but less than 50,000 tons deadweight?',
       options: [    
           {choice: 'A. at least 2,000 kiloNewtons', isSelected: false},
           {choice: 'B. at least 1,000 kiloNewtons', isSelected: false},
           {choice: 'C. at least 5,000 kiloNewtons', isSelected: false},
           {choice: 'D. at least 3,000 kiloNewtons', isSelected: false},
       ]
   },
   {
       question: '3. Which of the following emergency towing components do have specific strength requirements? Select all that apply',
       options: [    
           {choice: 'A. roller pedestal', isSelected: false},
           {choice: 'B. chafing gear', isSelected: false},
           {choice: 'C. fairlead', isSelected: false},
           {choice: 'D. pick-up gear', isSelected: false},
       ]
   },
   {
       question: '4. Which one of the following IMO publications sets out the requirements for emergency towing system?',
       options: [    
           {choice: 'A. MARPOL', isSelected: false},
           {choice: 'B. SOLAS', isSelected: false},
           {choice: 'C. STCW', isSelected: false},
           {choice: 'D. FSS Code', isSelected: false},
       ]
   },
   {
       question: '5. What is the minimum number of copies of the emergency towing booklet that should be kept on board?',
       options: [    
           {choice: 'A. 1', isSelected: false},
           {choice: 'B. 2', isSelected: false},
           {choice: 'C. 3', isSelected: false},
           {choice: 'D. 4', isSelected: false},
       ]
   },

]

let isPaused = false; // pausing audio file
let currentQuestionIndex = 0;
const displayQuestion = document.getElementById('question');
const displayChoices = document.getElementById('choices');
const correctAnswers = [0, 1, [1, 2], 1, 2];
let userScore = 0;

// Function to display a question and its options
function displayQuestionAndOptions(question) {
    displayQuestion.textContent = question.question;
    displayChoices.innerHTML = ''; // Clear previous options

    question.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        optionElement.id = `options_${index}`;

        const inputType = (currentQuestionIndex === 2) ? 'checkbox' : 'radio';

        const radioInput = document.createElement('input');
        radioInput.type = inputType;
        radioInput.className = 'radio-button';
        radioInput.name = `question_${currentQuestionIndex}`; // Use a unique name for each question
        radioInput.checked = option.isSelected;
        radioInput.id = `option_${index}`;

        const optionLabel = document.createElement('label');
        optionLabel.textContent = option.choice;
        optionLabel.className = 'option-label'

        // Set pointer-events to none for the text content
        optionLabel.style.pointerEvents = 'none';

        optionLabel.setAttribute('for', `option_${index}`);
        optionLabel.appendChild(radioInput);

        optionElement.appendChild(optionLabel);

        // Attach an event listener to manually toggle the radio button when the div is clicked
        optionElement.addEventListener('click', () => {
            if (currentQuestionIndex === 2) {
                option.isSelected = !option.isSelected;
                radioInput.checked = option.isSelected;
            } else {
                question.options.forEach((o) => (o.isSelected = false));
                option.isSelected = !option.isSelected;
                radioInput.checked = option.isSelected;
            }
            console.log(questionList);
        });

        displayChoices.appendChild(optionElement);
    });
}




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
//    const displayQuestion = document.getElementById('question');

   document.getElementById('homePageAudio').pause()
   counterElement.textContent = '2 / 2';
   setTimeout(() => {
       document.getElementById('homePage').style.display="none";
       document.getElementById('questionnaire').style.display="flex";
       document.getElementById('assessmentAudio').play()
       // alert('from mobile device to webview')
   }, 500);

}

function startScorm(){
   document.getElementById('playSlide').style.display='none';
   document.getElementById('homePage').style.display='block';
   document.getElementById('homePageAudio').play()
}

function pauseAudio(){
   isPaused = !isPaused
   if(isPaused){
       document.getElementById('homePageAudio').play()
   } else {
       document.getElementById('homePageAudio').pause()
   }

}

function repeatAudio(){
   document.getElementById('homePageAudio').pause()
   document.getElementById('homePageAudio').currentTime = 0
   document.getElementById('homePageAudio').play()
}

// Function to calculate and display the user's score
function calculateScore(i) {

    if(i == 1 && questionList[0].options[0].isSelected == true){
        userScore = userScore + 1;
        console.log(userScore)
    }
    if(i == 2 && questionList[1].options[1].isSelected == true ){
        userScore = userScore + 1;
        console.log(userScore)
    }
    if(i == 3 && questionList[2].options[1].isSelected == true && questionList[2].options[2].isSelected == true){
        userScore = userScore + 1;
        console.log(userScore)
    }
    if(i == 4 && questionList[3].options[1].isSelected == true){
        userScore = userScore + 1;
        console.log(userScore)
    }
    if(i == 5 && questionList[4].options[2].isSelected == true){
        userScore = userScore + 1;
        console.log(userScore)
    }
}

function nextQuestion() {
    getTimeStamp()
    document.getElementById('assessmentAudio').pause()
    // Check if there is a selected answer
    const selectedAnswer = questionList[currentQuestionIndex].options.find(option => option.isSelected);
    if (!selectedAnswer) {
        console.log('No selected answer');
        openModal();
        return;
    }

    // Proceed to the next question
    currentQuestionIndex++;
    if (currentQuestionIndex < questionList.length) {
        displayQuestionAndOptions(questionList[currentQuestionIndex]);
        calculateScore(currentQuestionIndex);
    } else {
        // Display the user's score
        calculateScore(currentQuestionIndex);
        document.getElementById('questionnaire').style.display="none";
        document.getElementById('scoreScreen').style.display="flex";
        displayScores();
        // alert(`Your score is ${userScore} out of ${questionList.length}`);
    }
}

function displayScores() {
    const displayScore = userScore * 20;
    const displayScoreText = document.getElementById('userScoreText');
    const displayResult = document.getElementById('cardText');
    const passedRemarks = document.getElementById('remarksText');
    const failedRemarks = document.getElementById('remarksTextFailed');
    const passedAudio = document.getElementById('passedAudioSound');
    const failedAudio = document.getElementById('failedAudioSound');
    const passedSpeech = document.getElementById('passedAudioSpeech');
    const failedSpeech = document.getElementById('failedAudioSpeech');

    displayScoreText.innerHTML = `
        <div class="score-text" id="userScoreText">YOUR SCORE: ${displayScore}%</div>
    `;

    // function playSpeech() {
    //     if (displayScore <= 69) {
    //         failedAudio.play();
    //     } else {
    //         passedAudio.play();
    //     }
    // }

    // Event listener for the 'ended' event of audio elements
    passedAudio.addEventListener('ended', function () {
        passedSpeech.play();
    });

    failedAudio.addEventListener('ended', function () {
        failedSpeech.play();
    });

    if (displayScore <= 69) {
        displayResult.innerHTML = 'FAILED';
        document.getElementById('passedCard').style.backgroundColor = '#B70C12';
        passedRemarks.style.display = 'none';
        failedRemarks.style.display = 'block';
        failedAudio.play();
    } else {
        passedAudio.play();
    }
}

 function openModal() {
    document.getElementById('backdrop').style.display = 'block';
    document.getElementById('errModal').style.display = 'block';
  }
  
  function closeModal() {
    document.getElementById('backdrop').style.display = 'none';
    document.getElementById('errModal').style.display = 'none';
  }


// format data for scorm
let timestamp = ''
let scormdata = ''
function getTimeStamp() {
    const currentTime = new Date();

    // Format the time as HH:mm:ss
    const hours = currentTime.getHours().toString().padStart(2, '0');
    const minutes = currentTime.getMinutes().toString().padStart(2, '0');
    const seconds = currentTime.getSeconds().toString().padStart(2, '0');
  
    const formattedTime = `${hours}:${minutes}:${seconds}`;
    timestamp = formattedTime;
    console.log(formattedTime)
}

window.addEventListener("message", message => {
    scormdata = message.data;
    if (scormdata){
        console.log(JSON.parse(scormdata));

    }    
    // alert(message.data)
  });
 