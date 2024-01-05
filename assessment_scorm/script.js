
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
       {id:'reloadSect', value:2, unit:'vw', style: 'fontSize'},
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
       {id:'txtResume', value:2, unit:'vw', style: 'marginLeft'},
       {id:'txtResume', value:2.5, unit:'vw', style: 'fontSize'},
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

    // let data = {"cmi.core.student_id":"13","cmi.core.student_name":"joshua.campos","cmi.core.lesson_location":"","cmi.core.credit":"credit","cmi.core.lesson_status":"incomplete","cmi.core.entry":"resume","cmi.core.score.raw":"40","cmi.core.score.max":"100","cmi.core.score.min":"0","cmi.core.total_time":"","cmi.core.lesson_mode":"normal","cmi.core.exit":"suspend","cmi.core.session_time":"0000:02:00.0","cmi.suspend_data":"2ma810203040ts1001310k01010011100121001310~2X2e000000000000001^1^1^1^1^1^1^1^1^1^1^1^1^1^1^1^1^1^1^1^1^1^1^1^1^1^1^1^1^1^1^1^1^1^1^1^1^1^1^1^1^1^1010101010101^1^1^1^1^1^1^1^10101010101^101010101010v_player.5qMcVdRA9Xn.6qzLZzPTK1I1^1^~2e6~233l3pW241110b101001111103672~2v23400340034003400340034003400g600101^8_defaultg600101^8_defaultr70040181^h_default_Selectedg600101^8_default3400g600101^8_default3400q7w020141^g_default_Visited002110~2$2j3rJe210b1010011111132Ke~2v23400340034003400340034003400g600101^8_defaultr70040181^h_default_Selectedg600101^8_defaultg600101^8_default3400g600101^8_default3400q7w020141^g_default_Visited00000000002002002002002002002002002000","cmi.launch_data":"","cmi.comments":"","cmi.comments_from_lms":"","cmi.objectives._count":"0","cmi.student_data.mastery_score":"","cmi.student_data.max_time_allowed":"","cmi.student_data.time_limit_action":"","cmi.student_preference.audio":"0","cmi.student_preference.language":"","cmi.student_preference.speed":"0","cmi.student_preference.text":"0","cmi.interactions._count":"6","cmi.interactions.0.id":"Scene5_Slide2_MultiChoice_0_0","cmi.interactions.0.objectives._count":"1","cmi.interactions.0.objectives.0.id":"Assessment_Part","cmi.interactions.0.correct_responses._count":"1","cmi.interactions.0.correct_responses.0.pattern":"","cmi.interactions.0.time":"09:25:47","cmi.interactions.0.type":"choice","cmi.interactions.0.weighting":"1","cmi.interactions.0.student_response":"z","cmi.interactions.0.result":"correct","cmi.interactions.0.latency":"","cmi.interactions.1.id":"Scene5_Slide2_MultiChoice_0_0","cmi.interactions.1.objectives._count":"1","cmi.interactions.1.objectives.0.id":"Assessment_Part","cmi.interactions.1.correct_responses._count":"1","cmi.interactions.1.correct_responses.0.pattern":"","cmi.interactions.1.time":"09:38:37","cmi.interactions.1.type":"choice","cmi.interactions.1.weighting":"1","cmi.interactions.1.student_response":"z","cmi.interactions.1.result":"wrong","cmi.interactions.1.latency":"","cmi.interactions.2.id":"Scene5_Slide3_MultiChoice_0_0","cmi.interactions.2.objectives._count":"1","cmi.interactions.2.objectives.0.id":"Assessment_Part","cmi.interactions.2.correct_responses._count":"1","cmi.interactions.2.correct_responses.0.pattern":"","cmi.interactions.2.time":"10:03:46","cmi.interactions.2.type":"choice","cmi.interactions.2.weighting":"1","cmi.interactions.2.student_response":"z","cmi.interactions.2.result":"correct","cmi.interactions.2.latency":"0000:00:05.14","cmi.interactions.3.id":"Scene5_Slide4_MultiResponse_0_0","cmi.interactions.3.objectives._count":"1","cmi.interactions.3.objectives.0.id":"Assessment_Part","cmi.interactions.3.correct_responses._count":"1","cmi.interactions.3.correct_responses.0.pattern":"","cmi.interactions.3.time":"10:03:48","cmi.interactions.3.type":"choice","cmi.interactions.3.weighting":"1","cmi.interactions.3.student_response":"z,z","cmi.interactions.3.result":"correct","cmi.interactions.3.latency":"","cmi.interactions.4.id":"Scene5_Slide2_MultiChoice_0_0","cmi.interactions.4.objectives._count":"1","cmi.interactions.4.objectives.0.id":"Assessment_Part","cmi.interactions.4.correct_responses._count":"1","cmi.interactions.4.correct_responses.0.pattern":"","cmi.interactions.4.time":"10:16:12","cmi.interactions.4.type":"choice","cmi.interactions.4.weighting":"1","cmi.interactions.4.student_response":"z","cmi.interactions.4.result":"correct","cmi.interactions.4.latency":"","cmi.interactions.5.id":"Scene5_Slide3_MultiChoice_0_0","cmi.interactions.5.objectives._count":"1","cmi.interactions.5.objectives.0.id":"Assessment_Part","cmi.interactions.5.correct_responses._count":"1","cmi.interactions.5.correct_responses.0.pattern":"z","cmi.interactions.5.time":"10:19:08","cmi.interactions.5.type":"choice","cmi.interactions.5.weighting":"1","cmi.interactions.5.student_response":"z","cmi.interactions.5.result":"correct","cmi.interactions.5.latency":"0000:01:00.33,"}
    //  scormdata = JSON.stringify(data)
    scormdata = ''
     checkProgress();
    //  scormStructure();

    //  console.log("Number of Interactions:", data);
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
let cmiInteractions = {};
let remainingData = {};
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
    // if (scormdata != null){
    //     console.log(JSON.parse(scormdata));
    //     alert(scormdata)

    // }    
    alert(message.data)
    // checkProgress();
  });

function checkProgress(){
    if( scormdata != ''){
        document.getElementById('playSlideSaved').style.display='block';
    } else {
        document.getElementById('playSlide').style.display='block';
    }

    // console.log("CMI Interactions:", cmiInteractions);
    // console.log("Remaining Data:", remainingData);
}

function countInteractions(data) {
    // Initialize the count to 0
    let interactionsCount = 0;

    // Iterate through the keys in data
    for (let key in data) {
        // Check if the key starts with "cmi.interactions."
        if (key.startsWith("cmi.interactions.") && !isNaN(key.split(".")[2])) {
            interactionsCount++;
        }
    }

    // Return the count
    return interactionsCount;
}

function loadScorm(){
    if( scormdata != ''){
        document.getElementById('playSlideSaved').style.display='none';
        document.getElementById('homePage').style.display='block';
        document.getElementById('homePageAudio').play()
    } else {
        startScorm();
    }
}

// let slideInfo = {}
// let assetLibrary = {}
// let totalSlides = 0

// function scormStructure (){
//     const datajson = '{"version":"3.68.28820.0","bwVersion":"4.0","tincanVersion":"1.0","tincanLanguage":"und","projectId":"5qLv8aclUeA","courseId":"6DglS7CSMIm_course_id","entryPoint":"_player.5qMcVdRA9Xn","iosFonts":"mobile/fonts.json","debugMode":false,"lessonDuration":0,"textDirection":"ltr","playervars":[{"kind":"playervar","name":"menuProgress","value":0},{"kind":"playervar","name":"menuSectionNumber","value":0},{"kind":"playervar","name":"menuSectionsViewed","value":0},{"kind":"playervar","name":"menuSlideNumber","value":0},{"kind":"playervar","name":"menuSlideReference","value":0},{"kind":"playervar","name":"menuSlidesViewed","value":0},{"kind":"playervar","name":"menuSlideTitle","value":""},{"kind":"playervar","name":"menuTotalSections","value":0},{"kind":"playervar","name":"menuTotalSlides","value":0},{"kind":"playervar","name":"menuSectionProgress","value":0},{"kind":"playervar","name":"menuSectionSlideNumber","value":0},{"kind":"playervar","name":"menuSectionSlidesViewed","value":0},{"kind":"playervar","name":"menuSectionTotalSlides","value":0},{"kind":"playervar","name":"accessibleText","value":false},{"kind":"playervar","name":"displayCaptions","value":false},{"kind":"playervar","name":"zoomToFit","value":false},{"kind":"playervar","name":"projectProgress","value":0},{"kind":"playervar","name":"projectSceneNumber","value":0},{"kind":"playervar","name":"projectScenesViewed","value":0},{"kind":"playervar","name":"projectSlideNumber","value":0},{"kind":"playervar","name":"projectSlideReference","value":0},{"kind":"playervar","name":"projectSlidesViewed","value":0},{"kind":"playervar","name":"projectSlideTitle","value":""},{"kind":"playervar","name":"projectTotalScenes","value":0},{"kind":"playervar","name":"projectTotalSlides","value":0},{"kind":"playervar","name":"sceneProgress","value":0},{"kind":"playervar","name":"sceneSlideNumber","value":0},{"kind":"playervar","name":"sceneSlidesViewed","value":0},{"kind":"playervar","name":"sceneTotalSlides","value":0},{"kind":"playervar","name":"activityId","value":""},{"kind":"playervar","name":"currentSlideId","value":""},{"kind":"playervar","name":"slideElapsedTime","value":""},{"kind":"playervar","name":"sceneElapsedTime","value":""},{"kind":"playervar","name":"projectElapsedTime","value":""},{"kind":"playervar","name":"questionCorrect","value":false},{"kind":"playervar","name":"fullScreenMode","value":false}],"slideMap":{"queueSize":3,"slideRefs":[{"kind":"slideref","id":"5qMcVdRA9Xn.5mcjhe8HTy1","type":"slide","assetIds":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22],"linksTo":[{"kind":"link","id":"5qMcVdRA9Xn.6WC3rmVVRIx","type":"slide"}]},{"kind":"slideref","id":"5qMcVdRA9Xn.6WC3rmVVRIx","type":"slide","assetIds":[0,1,2,3,23,24,21,22],"linksTo":[{"kind":"link","id":"5qMcVdRA9Xn.6By9EfSRXJ5","type":"slide"},{"kind":"link","id":"nextviewedslide","type":"action","data":"_player.5fpC70CZpTD"},{"kind":"link","id":"MsgScene_6DglS7CSMIm.InvalidPromptSlide","type":"slide"}]},{"kind":"slideref","id":"5qMcVdRA9Xn.6By9EfSRXJ5","type":"slide","assetIds":[0,1,2,3,23,21,22],"linksTo":[{"kind":"link","id":"5qMcVdRA9Xn.6qzLZzPTK1I","type":"slide"},{"kind":"link","id":"nextviewedslide","type":"action","data":"_player.5fpC70CZpTD"},{"kind":"link","id":"MsgScene_6DglS7CSMIm.InvalidPromptSlide","type":"slide"}]},{"kind":"slideref","id":"5qMcVdRA9Xn.6qzLZzPTK1I","type":"slide","assetIds":[0,1,2,3,23,21,22],"linksTo":[{"kind":"link","id":"5qMcVdRA9Xn.5cF86OcVPBn","type":"slide"},{"kind":"link","id":"nextviewedslide","type":"action","data":"_player.5fpC70CZpTD"},{"kind":"link","id":"MsgScene_6DglS7CSMIm.InvalidPromptSlide","type":"slide"}]},{"kind":"slideref","id":"5qMcVdRA9Xn.5cF86OcVPBn","type":"slide","assetIds":[0,1,2,3,23,21,22],"linksTo":[{"kind":"link","id":"5qMcVdRA9Xn.5kiRQOWZKao","type":"slide"},{"kind":"link","id":"nextviewedslide","type":"action","data":"_player.5fpC70CZpTD"},{"kind":"link","id":"MsgScene_6DglS7CSMIm.InvalidPromptSlide","type":"slide"}]},{"kind":"slideref","id":"5qMcVdRA9Xn.5kiRQOWZKao","type":"slide","assetIds":[0,1,2,3,23,21,22],"linksTo":[{"kind":"link","id":"5qMcVdRA9Xn.674rHSieUec","type":"slide"},{"kind":"link","id":"nextviewedslide","type":"action","data":"_player.5fpC70CZpTD"},{"kind":"link","id":"MsgScene_6DglS7CSMIm.InvalidPromptSlide","type":"slide"}]},{"kind":"slideref","id":"5qMcVdRA9Xn.674rHSieUec","type":"slide","assetIds":[0,1,2,3,23,25,26,27,28,21,22]},{"kind":"slideref","id":"PromptScene.ResumePromptSlide","type":"slide","assetIds":[]},{"kind":"slideref","id":"PromptScene.ExternalInterfaceErrorSlide","type":"slide","assetIds":[]},{"kind":"slideref","id":"MsgScene_6DglS7CSMIm.InvalidPromptSlide","type":"slide","assetIds":[]},{"kind":"slideref","id":"MsgScene_6DglS7CSMIm.PrintPromptSlide","type":"slide","assetIds":[]},{"kind":"slideref","id":"MsgScene_6DglS7CSMIm.ScrollPromptSlide","type":"slide","assetIds":[]}]},"display":{"frameData":"story_content/frame.xml","width":1044,"height":812,"windows":[{"kind":"window","id":"MessageWnd","linkId":"StoryWindow","width":420,"height":210,"alignTo":"content","align":"center","valign":"center"},{"kind":"window","id":"LightboxWnd","linkId":"StoryPopup","width":878,"height":660,"alignTo":"player","align":"center","valign":"center"},{"kind":"window","id":"LightboxControlsWnd","linkId":"StoryPopupControls","width":882,"height":702,"alignTo":"player","align":"center","valign":"center"}]},"resume":{"id":"6FbN7kWddIX","window":"MessageWnd","slideId":"_player.PromptScene.ResumePromptSlide","lmsresume":true,"flashresume":false,"prompt":true,"everySlide":false},"string_table":[{"kind":"group","id":"chrome23","strings":[{"kind":"string","id":"title","Text":"Can\'t Play Course"},{"kind":"string","id":"description","Text":"For security reasons, Flash cannot access files on your computer\'s hard disk from your web browser."},{"kind":"string","id":"linkText","Text":"Learn More"},{"kind":"string","id":"linkUrl","Text":"https://ipc.articulate.com/slw/360/en/localplayback/"}]}],"errorMsgs":{"external_interface":{"kind":"error","window":"MessageWnd","slideId":"_player.PromptScene.ExternalInterfaceErrorSlide"}},"scenes":[{"kind":"scene","lmsId":"Scene5","isMessageScene":false,"startingSlide":"_player.5qMcVdRA9Xn.5mcjhe8HTy1","sceneNumber":2,"slides":[{"kind":"slide","html5url":"html5/data/js/5mcjhe8HTy1.js","title":"Independence 5.37","trackViews":true,"showMenuResultIcon":false,"viewGroupId":"","historyGroupId":"","videoZoom":"","scrolling":false,"transition":"appear","transDuration":0,"transDir":1,"wipeTrans":false,"slideLock":false,"navIndex":-1,"globalAudioId":"","thumbnailid":"","slideNumberInScene":1,"includeInSlideCounts":true,"showAnimationId":"","lmsId":"Slide1","width":1024,"height":768,"resume":false,"id":"5mcjhe8HTy1","slideLayers":[{"enableSeek":true,"enableReplay":true,"startTime":-1,"elapsedTimeMode":"normal","useHandCursor":false,"resume":false,"kind":"slidelayer","isBaseLayer":true}]},{"kind":"slide","html5url":"html5/data/js/6WC3rmVVRIx.js","title":"Independence Part 1_Q1","trackViews":true,"showMenuResultIcon":false,"viewGroupId":"","historyGroupId":"","videoZoom":"","scrolling":false,"transition":"appear","transDuration":0,"transDir":1,"wipeTrans":false,"slideLock":false,"navIndex":-1,"globalAudioId":"","thumbnailid":"","slideNumberInScene":2,"includeInSlideCounts":true,"interactions":[{"kind":"interaction","id":"6XeigHsxRKM","lmsId":"MultiChoice","lmstext":"1. What is the maximum allowed deployment time for the forward emergency \\ntowing system?","type":"multiplechoice","maxpoints":1,"aoinclude":false,"istracked":true,"issurvey":false,"skipenabled":false,"choices":[{"kind":"choice","id":"choice_5rmKet3kPbU","lmstext":" A. 1 hour"},{"kind":"choice","id":"choice_5WeQ0A7DyHK","lmstext":" B. 2 hours"},{"kind":"choice","id":"choice_6OhNKRMzhWB","lmstext":" C. 15 minutes"},{"kind":"choice","id":"choice_67ZMcKnUXmD","lmstext":" D. 5 minutes"}],"responseDefinition":{"actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"6eCxLaJLmmR.5rmKet3kPbU.#_checked","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"addchoiceresponse","interactionId":"6XeigHsxRKM","value":"choices.choice_5rmKet3kPbU","type":"string"}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"6eCxLaJLmmR.5WeQ0A7DyHK.#_checked","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"addchoiceresponse","interactionId":"6XeigHsxRKM","value":"choices.choice_5WeQ0A7DyHK","type":"string"}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"6eCxLaJLmmR.6OhNKRMzhWB.#_checked","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"addchoiceresponse","interactionId":"6XeigHsxRKM","value":"choices.choice_6OhNKRMzhWB","type":"string"}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"6eCxLaJLmmR.67ZMcKnUXmD.#_checked","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"addchoiceresponse","interactionId":"6XeigHsxRKM","value":"choices.choice_67ZMcKnUXmD","type":"string"}]}]},"answers":[{"kind":"answer","id":"5rmKet3kPbU","points":1,"status":"correct","evaluate":{"statements":[{"kind":"equals","choiceid":"choices.choice_5rmKet3kPbU","ignorecase":false}]},"actions":[{"kind":"trigger_next_slide"}]},{"kind":"answer","id":"5WeQ0A7DyHK","points":0,"status":"incorrect","evaluate":{"statements":[{"kind":"equals","choiceid":"choices.choice_5WeQ0A7DyHK","ignorecase":false}]},"actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"gte","valuea":"6XeigHsxRKM.$AttemptCount","typea":"property","valueb":1,"typeb":"number"}},"thenActions":[{"kind":"trigger_next_slide"}]}]},{"kind":"answer","id":"6OhNKRMzhWB","points":0,"status":"incorrect","evaluate":{"statements":[{"kind":"equals","choiceid":"choices.choice_6OhNKRMzhWB","ignorecase":false}]},"actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"gte","valuea":"6XeigHsxRKM.$AttemptCount","typea":"property","valueb":1,"typeb":"number"}},"thenActions":[{"kind":"trigger_next_slide"}]}]},{"kind":"answer","id":"67ZMcKnUXmD","points":0,"status":"incorrect","evaluate":{"statements":[{"kind":"equals","choiceid":"choices.choice_67ZMcKnUXmD","ignorecase":false}]},"actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"gte","valuea":"6XeigHsxRKM.$AttemptCount","typea":"property","valueb":1,"typeb":"number"}},"thenActions":[{"kind":"trigger_next_slide"}]}]},{"kind":"answer","id":"5blDYTTyHPd","points":0,"status":"incorrect","evaluate":{"statements":[{"kind":"other"}]},"actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"gte","valuea":"6XeigHsxRKM.$AttemptCount","typea":"property","valueb":1,"typeb":"number"}},"thenActions":[{"kind":"trigger_next_slide"}]}]}]}],"showAnimationId":"","lmsId":"Slide2","width":1024,"height":768,"resume":true,"id":"6WC3rmVVRIx","slideLayers":[{"enableSeek":true,"enableReplay":true,"startTime":-1,"elapsedTimeMode":"normal","useHandCursor":false,"resume":true,"kind":"slidelayer","isBaseLayer":true}]},{"kind":"slide","html5url":"html5/data/js/6By9EfSRXJ5.js","title":"Independence Part 1_Q2","trackViews":true,"showMenuResultIcon":false,"viewGroupId":"","historyGroupId":"","videoZoom":"","scrolling":false,"transition":"appear","transDuration":0,"transDir":1,"wipeTrans":false,"slideLock":false,"navIndex":-1,"globalAudioId":"","thumbnailid":"","slideNumberInScene":0,"includeInSlideCounts":false,"interactions":[{"kind":"interaction","id":"6hA7dySEGzY","lmsId":"MultiChoice","lmstext":"2. What should be the working strength of towing components of tankers with 20,000 tons deadweight and over but less than 50,000 tons deadweight?","type":"multiplechoice","maxpoints":1,"aoinclude":false,"istracked":true,"issurvey":false,"skipenabled":false,"choices":[{"kind":"choice","id":"choice_5mTjQvXZn98","lmstext":" A. at least 2,000 kiloNewtons"},{"kind":"choice","id":"choice_6Eyy634MoQQ","lmstext":" B. at least 1,000 kiloNewtons"},{"kind":"choice","id":"choice_6JOKiPFi4X4","lmstext":" C. at least 5,000 kiloNewtons"},{"kind":"choice","id":"choice_5vSMiFCDVb0","lmstext":" D. at least 3,000 kiloNewtons"}],"responseDefinition":{"actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"5lfflPZYpBj.5mTjQvXZn98.#_checked","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"addchoiceresponse","interactionId":"6hA7dySEGzY","value":"choices.choice_5mTjQvXZn98","type":"string"}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"5lfflPZYpBj.6Eyy634MoQQ.#_checked","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"addchoiceresponse","interactionId":"6hA7dySEGzY","value":"choices.choice_6Eyy634MoQQ","type":"string"}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"5lfflPZYpBj.6JOKiPFi4X4.#_checked","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"addchoiceresponse","interactionId":"6hA7dySEGzY","value":"choices.choice_6JOKiPFi4X4","type":"string"}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"5lfflPZYpBj.5vSMiFCDVb0.#_checked","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"addchoiceresponse","interactionId":"6hA7dySEGzY","value":"choices.choice_5vSMiFCDVb0","type":"string"}]}]},"answers":[{"kind":"answer","id":"5mTjQvXZn98","points":0,"status":"incorrect","evaluate":{"statements":[{"kind":"equals","choiceid":"choices.choice_5mTjQvXZn98","ignorecase":false}]},"actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"gte","valuea":"6hA7dySEGzY.$AttemptCount","typea":"property","valueb":1,"typeb":"number"}},"thenActions":[{"kind":"trigger_next_slide"}]}]},{"kind":"answer","id":"6Eyy634MoQQ","points":1,"status":"correct","evaluate":{"statements":[{"kind":"equals","choiceid":"choices.choice_6Eyy634MoQQ","ignorecase":false}]},"actions":[{"kind":"trigger_next_slide"}]},{"kind":"answer","id":"6JOKiPFi4X4","points":0,"status":"incorrect","evaluate":{"statements":[{"kind":"equals","choiceid":"choices.choice_6JOKiPFi4X4","ignorecase":false}]},"actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"gte","valuea":"6hA7dySEGzY.$AttemptCount","typea":"property","valueb":1,"typeb":"number"}},"thenActions":[{"kind":"trigger_next_slide"}]}]},{"kind":"answer","id":"5vSMiFCDVb0","points":0,"status":"incorrect","evaluate":{"statements":[{"kind":"equals","choiceid":"choices.choice_5vSMiFCDVb0","ignorecase":false}]},"actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"gte","valuea":"6hA7dySEGzY.$AttemptCount","typea":"property","valueb":1,"typeb":"number"}},"thenActions":[{"kind":"trigger_next_slide"}]}]},{"kind":"answer","id":"5vMDXkonAF4","points":0,"status":"incorrect","evaluate":{"statements":[{"kind":"other"}]},"actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"gte","valuea":"6hA7dySEGzY.$AttemptCount","typea":"property","valueb":1,"typeb":"number"}},"thenActions":[{"kind":"trigger_next_slide"}]}]}]}],"showAnimationId":"","lmsId":"Slide3","width":1024,"height":768,"resume":true,"id":"6By9EfSRXJ5","slideLayers":[{"enableSeek":true,"enableReplay":true,"startTime":-1,"elapsedTimeMode":"normal","useHandCursor":false,"resume":true,"kind":"slidelayer","isBaseLayer":true}]},{"kind":"slide","html5url":"html5/data/js/6qzLZzPTK1I.js","title":"Independence Part 1_Q3","trackViews":true,"showMenuResultIcon":false,"viewGroupId":"","historyGroupId":"","videoZoom":"","scrolling":false,"transition":"appear","transDuration":0,"transDir":1,"wipeTrans":false,"slideLock":false,"navIndex":-1,"globalAudioId":"","thumbnailid":"","slideNumberInScene":0,"includeInSlideCounts":false,"interactions":[{"kind":"interaction","id":"6Fn9qAoC3Co","lmsId":"MultiResponse","lmstext":"3. Which of the following emergency towing components do have specific strength requirements? Select all that apply.","type":"multipleresponse","maxpoints":1,"aoinclude":false,"istracked":true,"issurvey":false,"skipenabled":false,"choices":[{"kind":"choice","id":"choice_66SJ9wYgniC","lmstext":" C. fairlead"},{"kind":"choice","id":"choice_6d6A2M0i07T","lmstext":" B. chafing gear"},{"kind":"choice","id":"choice_6WyEdFkHCjz","lmstext":" D. pick-up gear"},{"kind":"choice","id":"choice_5tYk6jLNw0P","lmstext":" A. roller pedestal"}],"responseDefinition":{"actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"6liletWvi5J.66SJ9wYgniC.#_checked","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"addchoiceresponse","interactionId":"6Fn9qAoC3Co","value":"choices.choice_66SJ9wYgniC","type":"string"}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"6liletWvi5J.6d6A2M0i07T.#_checked","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"addchoiceresponse","interactionId":"6Fn9qAoC3Co","value":"choices.choice_6d6A2M0i07T","type":"string"}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"6liletWvi5J.6WyEdFkHCjz.#_checked","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"addchoiceresponse","interactionId":"6Fn9qAoC3Co","value":"choices.choice_6WyEdFkHCjz","type":"string"}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"6liletWvi5J.5tYk6jLNw0P.#_checked","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"addchoiceresponse","interactionId":"6Fn9qAoC3Co","value":"choices.choice_5tYk6jLNw0P","type":"string"}]}]},"answers":[{"kind":"answer","id":"66SJ9wYgniC","points":1,"status":"correct","evaluate":{"statements":[{"kind":"equals","choiceid":"choices.choice_66SJ9wYgniC","ignorecase":false},{"kind":"equals","choiceid":"choices.choice_6d6A2M0i07T","ignorecase":false}]},"actions":[{"kind":"trigger_next_slide"}]},{"kind":"answer","id":"6byZTc2lSi8","points":0,"status":"incorrect","evaluate":{"statements":[{"kind":"other"}]},"actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"gte","valuea":"6Fn9qAoC3Co.$AttemptCount","typea":"property","valueb":1,"typeb":"number"}},"thenActions":[{"kind":"trigger_next_slide"}]}]}]}],"showAnimationId":"","lmsId":"Slide4","width":1024,"height":768,"resume":true,"id":"6qzLZzPTK1I","slideLayers":[{"enableSeek":true,"enableReplay":true,"startTime":-1,"elapsedTimeMode":"normal","useHandCursor":false,"resume":true,"kind":"slidelayer","isBaseLayer":true}]},{"kind":"slide","html5url":"html5/data/js/5cF86OcVPBn.js","title":"Independence Part 1_Q4","trackViews":true,"showMenuResultIcon":false,"viewGroupId":"","historyGroupId":"","videoZoom":"","scrolling":false,"transition":"appear","transDuration":0,"transDir":1,"wipeTrans":false,"slideLock":false,"navIndex":-1,"globalAudioId":"","thumbnailid":"","slideNumberInScene":0,"includeInSlideCounts":false,"interactions":[{"kind":"interaction","id":"6cHfuoiCqCs","lmsId":"MultiChoice","lmstext":"4. Which one of the following IMO publications sets out the requirements for emergency towing system?","type":"multiplechoice","maxpoints":1,"aoinclude":false,"istracked":true,"issurvey":false,"skipenabled":false,"choices":[{"kind":"choice","id":"choice_5bpS9UTwDWK","lmstext":" A. MARPOL"},{"kind":"choice","id":"choice_5xtSwpmntIE","lmstext":" B. SOLAS"},{"kind":"choice","id":"choice_6KA8QxoreN1","lmstext":" C. STCW"},{"kind":"choice","id":"choice_6bVqeMoP0Qo","lmstext":" D. FSS Code"}],"responseDefinition":{"actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"5aEdVWFmdtX.5bpS9UTwDWK.#_checked","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"addchoiceresponse","interactionId":"6cHfuoiCqCs","value":"choices.choice_5bpS9UTwDWK","type":"string"}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"5aEdVWFmdtX.5xtSwpmntIE.#_checked","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"addchoiceresponse","interactionId":"6cHfuoiCqCs","value":"choices.choice_5xtSwpmntIE","type":"string"}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"5aEdVWFmdtX.6KA8QxoreN1.#_checked","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"addchoiceresponse","interactionId":"6cHfuoiCqCs","value":"choices.choice_6KA8QxoreN1","type":"string"}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"5aEdVWFmdtX.6bVqeMoP0Qo.#_checked","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"addchoiceresponse","interactionId":"6cHfuoiCqCs","value":"choices.choice_6bVqeMoP0Qo","type":"string"}]}]},"answers":[{"kind":"answer","id":"5bpS9UTwDWK","points":0,"status":"incorrect","evaluate":{"statements":[{"kind":"equals","choiceid":"choices.choice_5bpS9UTwDWK","ignorecase":false}]},"actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"gte","valuea":"6cHfuoiCqCs.$AttemptCount","typea":"property","valueb":1,"typeb":"number"}},"thenActions":[{"kind":"trigger_next_slide"}]}]},{"kind":"answer","id":"5xtSwpmntIE","points":1,"status":"correct","evaluate":{"statements":[{"kind":"equals","choiceid":"choices.choice_5xtSwpmntIE","ignorecase":false}]},"actions":[{"kind":"trigger_next_slide"}]},{"kind":"answer","id":"6KA8QxoreN1","points":0,"status":"incorrect","evaluate":{"statements":[{"kind":"equals","choiceid":"choices.choice_6KA8QxoreN1","ignorecase":false}]},"actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"gte","valuea":"6cHfuoiCqCs.$AttemptCount","typea":"property","valueb":1,"typeb":"number"}},"thenActions":[{"kind":"trigger_next_slide"}]}]},{"kind":"answer","id":"6bVqeMoP0Qo","points":0,"status":"incorrect","evaluate":{"statements":[{"kind":"equals","choiceid":"choices.choice_6bVqeMoP0Qo","ignorecase":false}]},"actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"gte","valuea":"6cHfuoiCqCs.$AttemptCount","typea":"property","valueb":1,"typeb":"number"}},"thenActions":[{"kind":"trigger_next_slide"}]}]},{"kind":"answer","id":"5bdPOAvXJDb","points":0,"status":"incorrect","evaluate":{"statements":[{"kind":"other"}]},"actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"gte","valuea":"6cHfuoiCqCs.$AttemptCount","typea":"property","valueb":1,"typeb":"number"}},"thenActions":[{"kind":"trigger_next_slide"}]}]}]}],"showAnimationId":"","lmsId":"Slide5","width":1024,"height":768,"resume":true,"id":"5cF86OcVPBn","slideLayers":[{"enableSeek":true,"enableReplay":true,"startTime":-1,"elapsedTimeMode":"normal","useHandCursor":false,"resume":true,"kind":"slidelayer","isBaseLayer":true}]},{"kind":"slide","html5url":"html5/data/js/5kiRQOWZKao.js","title":"Independence Part 1_Q5","trackViews":true,"showMenuResultIcon":false,"viewGroupId":"","historyGroupId":"","videoZoom":"","scrolling":false,"transition":"appear","transDuration":0,"transDir":1,"wipeTrans":false,"slideLock":false,"navIndex":-1,"globalAudioId":"","thumbnailid":"","slideNumberInScene":0,"includeInSlideCounts":false,"interactions":[{"kind":"interaction","id":"6FMZZ7Y2bCk","lmsId":"MultiChoice","lmstext":"5. What is the minimum number of copies of the emergency towing booklet that should be kept on board?","type":"multiplechoice","maxpoints":1,"aoinclude":false,"istracked":true,"issurvey":false,"skipenabled":false,"choices":[{"kind":"choice","id":"choice_6GYge9UUvZS","lmstext":" A. 1"},{"kind":"choice","id":"choice_608akqVKDzW","lmstext":" B. 2"},{"kind":"choice","id":"choice_5c2iFTSib1n","lmstext":" C. 3"},{"kind":"choice","id":"choice_6fXg7QVGzf9","lmstext":" D. 4"}],"responseDefinition":{"actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"6rowCDWWnYc.6GYge9UUvZS.#_checked","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"addchoiceresponse","interactionId":"6FMZZ7Y2bCk","value":"choices.choice_6GYge9UUvZS","type":"string"}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"6rowCDWWnYc.608akqVKDzW.#_checked","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"addchoiceresponse","interactionId":"6FMZZ7Y2bCk","value":"choices.choice_608akqVKDzW","type":"string"}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"6rowCDWWnYc.5c2iFTSib1n.#_checked","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"addchoiceresponse","interactionId":"6FMZZ7Y2bCk","value":"choices.choice_5c2iFTSib1n","type":"string"}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"6rowCDWWnYc.6fXg7QVGzf9.#_checked","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"addchoiceresponse","interactionId":"6FMZZ7Y2bCk","value":"choices.choice_6fXg7QVGzf9","type":"string"}]}]},"answers":[{"kind":"answer","id":"6GYge9UUvZS","points":0,"status":"incorrect","evaluate":{"statements":[{"kind":"equals","choiceid":"choices.choice_6GYge9UUvZS","ignorecase":false}]},"actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"gte","valuea":"6FMZZ7Y2bCk.$AttemptCount","typea":"property","valueb":1,"typeb":"number"}},"thenActions":[{"kind":"trigger_next_slide"}]}]},{"kind":"answer","id":"608akqVKDzW","points":0,"status":"incorrect","evaluate":{"statements":[{"kind":"equals","choiceid":"choices.choice_608akqVKDzW","ignorecase":false}]},"actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"gte","valuea":"6FMZZ7Y2bCk.$AttemptCount","typea":"property","valueb":1,"typeb":"number"}},"thenActions":[{"kind":"trigger_next_slide"}]}]},{"kind":"answer","id":"5c2iFTSib1n","points":1,"status":"correct","evaluate":{"statements":[{"kind":"equals","choiceid":"choices.choice_5c2iFTSib1n","ignorecase":false}]},"actions":[{"kind":"trigger_next_slide"}]},{"kind":"answer","id":"6fXg7QVGzf9","points":0,"status":"incorrect","evaluate":{"statements":[{"kind":"equals","choiceid":"choices.choice_6fXg7QVGzf9","ignorecase":false}]},"actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"gte","valuea":"6FMZZ7Y2bCk.$AttemptCount","typea":"property","valueb":1,"typeb":"number"}},"thenActions":[{"kind":"trigger_next_slide"}]}]},{"kind":"answer","id":"6dvyEuAPOhh","points":0,"status":"incorrect","evaluate":{"statements":[{"kind":"other"}]},"actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"gte","valuea":"6FMZZ7Y2bCk.$AttemptCount","typea":"property","valueb":1,"typeb":"number"}},"thenActions":[{"kind":"trigger_next_slide"}]}]}]}],"showAnimationId":"","lmsId":"Slide6","width":1024,"height":768,"resume":true,"id":"5kiRQOWZKao","slideLayers":[{"enableSeek":true,"enableReplay":true,"startTime":-1,"elapsedTimeMode":"normal","useHandCursor":false,"resume":true,"kind":"slidelayer","isBaseLayer":true}]},{"kind":"slide","html5url":"html5/data/js/674rHSieUec.js","title":"Assessment Result","trackViews":true,"showMenuResultIcon":false,"viewGroupId":"","historyGroupId":"","videoZoom":"","scrolling":false,"transition":"appear","transDuration":0,"transDir":1,"wipeTrans":false,"slideLock":false,"navIndex":-1,"globalAudioId":"","thumbnailid":"","slideNumberInScene":0,"includeInSlideCounts":false,"showAnimationId":"","lmsId":"Slide7","width":1024,"height":768,"resume":true,"id":"674rHSieUec","slideLayers":[{"enableSeek":true,"enableReplay":true,"startTime":-1,"elapsedTimeMode":"normal","useHandCursor":false,"resume":true,"kind":"slidelayer","isBaseLayer":true}]}],"id":"5qMcVdRA9Xn"},{"kind":"scene","lmsId":"","isMessageScene":true,"startingSlide":"_player.PromptScene.ResumePromptSlide","sceneNumber":0,"slides":[{"kind":"slide","title":"<p dir=\'ltr\' align=\'left\' style=\\"font-family: \'Lato22AB4CAF\';\\">Resume</p>","trackViews":false,"showMenuResultIcon":false,"viewGroupId":"","historyGroupId":"prompt","videoZoom":"","scrolling":false,"transition":"appear","transDuration":0,"transDir":1,"wipeTrans":false,"slideLock":false,"navIndex":-1,"globalAudioId":"","thumbnailid":"","slideNumberInScene":0,"includeInSlideCounts":false,"showAnimationId":"","lmsId":"","width":420,"height":210,"resume":false,"id":"ResumePromptSlide","slideLayers":[{"enableSeek":true,"enableReplay":true,"timeline":{"duration":1000,"events":[{"kind":"ontimelinetick","time":0,"actions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6DglS7CSMIm_ResumePromptSlide_btn0"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6DglS7CSMIm_ResumePromptSlide_btn1"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"ResumePromptSlide_Scroll.6DglS7CSMIm_ResumePromptSlide_text"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"ResumePromptSlide_Scroll"}}]}]},"objects":[{"kind":"scrollarea","contentwidth":381,"contentheight":23,"objects":[{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6DglS7CSMIm_ResumePromptSlide_text","id":"01","linkId":"6DglS7CSMIm_ResumePromptSlide_text","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":370,"bottom":23,"pngfb":false,"pr":{"l":"common","i":1}}}],"shapemaskId":"","xPos":0,"yPos":0,"tabIndex":1,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":194,"rotateYPos":11.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":1,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":370,"bottom":23,"altText":"Would you like to resume where you left off?","pngfb":false,"pr":{"l":"common","i":0}},"html5data":{"xPos":0,"yPos":0,"width":370,"height":23,"strokewidth":0}},"width":388,"height":23,"resume":false,"useHandCursor":true,"id":"6DglS7CSMIm_ResumePromptSlide_text"}],"shapemaskId":"","xPos":13,"yPos":16,"tabIndex":0,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":205.5,"rotateYPos":39,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":1,"scrolling":true,"shuffleLock":false,"width":411,"height":78,"resume":false,"useHandCursor":true,"id":"ResumePromptSlide_Scroll"},{"kind":"button","shapemaskId":"","xPos":107,"yPos":110,"tabIndex":2,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":50,"rotateYPos":15,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":2,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"textdata":{"uniqueId":"6DglS7CSMIm_ResumePromptSlide_btn0","type":"vectortext","altText":"Yes","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":63,"bottom":25,"pngfb":false,"pr":{"l":"common","i":2}}}},"width":100,"height":30,"resume":false,"useHandCursor":true,"id":"6DglS7CSMIm_ResumePromptSlide_btn0","events":[{"kind":"onrelease","actions":[{"kind":"resume_player","resume":true}]}]},{"kind":"button","shapemaskId":"","xPos":212,"yPos":110,"tabIndex":3,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":50,"rotateYPos":15,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":3,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"textdata":{"uniqueId":"6DglS7CSMIm_ResumePromptSlide_btn1","type":"vectortext","altText":"No","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":61,"bottom":25,"pngfb":false,"pr":{"l":"common","i":3}}}},"width":100,"height":30,"resume":false,"useHandCursor":true,"id":"6DglS7CSMIm_ResumePromptSlide_btn1","events":[{"kind":"onrelease","actions":[{"kind":"resume_player","resume":false}]}]}],"startTime":-1,"elapsedTimeMode":"normal","useHandCursor":false,"resume":false,"kind":"slidelayer","isBaseLayer":true}]},{"kind":"slide","title":"<p dir=\'ltr\' align=\'left\' style=\\"font-family: \'Lato22AB4CAF\';\\">Warning</p>","trackViews":false,"showMenuResultIcon":false,"viewGroupId":"","historyGroupId":"prompt","videoZoom":"","scrolling":false,"transition":"appear","transDuration":0,"transDir":1,"wipeTrans":false,"slideLock":false,"navIndex":-1,"globalAudioId":"","thumbnailid":"","slideNumberInScene":0,"includeInSlideCounts":false,"showAnimationId":"","lmsId":"","width":415,"height":151,"resume":false,"id":"ExternalInterfaceErrorSlide","slideLayers":[{"enableSeek":true,"enableReplay":true,"timeline":{"duration":1000,"events":[{"kind":"ontimelinetick","time":0,"actions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"Text"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"buttonOK"}}]}]},"objects":[{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","id":"01","linkId":"01","type":"vartext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":383,"height":105,"device":true,"valign":"center","wordwrap":false,"textshadow":false,"shadowIndex":-1,"scrollOverflow":false,"vartext":"<html><p dir=\'ltr\' align=\'left\'><font face=\'Lato\' size=\'18pt\'color=\'#FFFFFF\'>The %_player.$LastErrorFeature% feature on this slide has been disabled while viewing locally because your browser does not support it.</font></p></html>"}],"shapemaskId":"","xPos":16,"yPos":0,"tabIndex":0,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":191.5,"rotateYPos":52.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":1,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":383,"bottom":105,"altText":"Warning Message","pngfb":false,"pr":{"l":"common","i":4}},"html5data":{"xPos":0,"yPos":0,"width":383,"height":105,"strokewidth":0}},"width":383,"height":105,"resume":false,"useHandCursor":true,"id":"Text"},{"kind":"button","shapemaskId":"","xPos":299,"yPos":105,"tabIndex":1,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":50,"rotateYPos":15,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":2,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"textdata":{"uniqueId":"buttonOK","type":"vectortext","altText":"OK","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":62,"bottom":25,"pngfb":false,"pr":{"l":"common","i":5}}}},"width":100,"height":30,"resume":false,"useHandCursor":true,"id":"buttonOK","events":[{"kind":"onrelease","actions":[{"kind":"close_window","id":"MessageWnd"}]}]}],"startTime":-1,"elapsedTimeMode":"normal","useHandCursor":false,"resume":false,"kind":"slidelayer","isBaseLayer":true}]}],"id":"PromptScene"},{"kind":"scene","lmsId":"","isMessageScene":true,"startingSlide":"_player.MsgScene_6DglS7CSMIm.InvalidPromptSlide","sceneNumber":0,"slides":[{"kind":"slide","title":"<p dir=\'ltr\' align=\'left\' style=\\"font-family: \'Lato22AB4CAF\';\\">Invalid Answer</p>","trackViews":false,"showMenuResultIcon":false,"viewGroupId":"","historyGroupId":"prompt","videoZoom":"","scrolling":false,"transition":"appear","transDuration":0,"transDir":1,"wipeTrans":false,"slideLock":false,"navIndex":-1,"globalAudioId":"","thumbnailid":"","slideNumberInScene":0,"includeInSlideCounts":false,"showAnimationId":"","lmsId":"","width":420,"height":210,"resume":false,"id":"InvalidPromptSlide","slideLayers":[{"enableSeek":true,"enableReplay":true,"timeline":{"duration":1000,"events":[{"kind":"ontimelinetick","time":0,"actions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6DglS7CSMIm_InvalidPromptSlide_btn0"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"InvalidPromptSlide_Scroll.6DglS7CSMIm_InvalidPromptSlide_text"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"InvalidPromptSlide_Scroll"}}]}]},"objects":[{"kind":"scrollarea","contentwidth":336,"contentheight":46,"objects":[{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6DglS7CSMIm_InvalidPromptSlide_text","id":"01","linkId":"6DglS7CSMIm_InvalidPromptSlide_text","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":330,"bottom":46,"pngfb":false,"pr":{"l":"common","i":6}}}],"shapemaskId":"","xPos":0,"yPos":0,"tabIndex":1,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":194,"rotateYPos":23,"scaleX":100,"scaleY":100,"alpha":100,"depth":1,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":330,"bottom":46,"altText":"You must complete the question before submitting.","pngfb":false,"pr":{"l":"common","i":0}},"html5data":{"xPos":0,"yPos":0,"width":330,"height":46,"strokewidth":0}},"width":388,"height":46,"resume":false,"useHandCursor":true,"id":"6DglS7CSMIm_InvalidPromptSlide_text"}],"shapemaskId":"","xPos":13,"yPos":16,"tabIndex":0,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":205.5,"rotateYPos":39,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":1,"scrolling":true,"shuffleLock":false,"width":411,"height":78,"resume":false,"useHandCursor":true,"id":"InvalidPromptSlide_Scroll"},{"kind":"button","shapemaskId":"","xPos":160,"yPos":110,"tabIndex":2,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":50,"rotateYPos":15,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":2,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"textdata":{"uniqueId":"6DglS7CSMIm_InvalidPromptSlide_btn0","type":"vectortext","altText":"OK","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":62,"bottom":25,"pngfb":false,"pr":{"l":"common","i":5}}}},"width":100,"height":30,"resume":false,"useHandCursor":true,"id":"6DglS7CSMIm_InvalidPromptSlide_btn0","events":[{"kind":"onrelease","actions":[{"kind":"close_window","id":"MessageWnd"}]}]}],"startTime":-1,"elapsedTimeMode":"normal","useHandCursor":false,"resume":false,"kind":"slidelayer","isBaseLayer":true}]},{"kind":"slide","title":"<p dir=\'ltr\' align=\'left\' style=\\"font-family: \'Lato22AB4CAF\';\\">Enter name</p>","trackViews":false,"showMenuResultIcon":false,"viewGroupId":"","historyGroupId":"prompt","videoZoom":"","scrolling":false,"transition":"appear","transDuration":0,"transDir":1,"wipeTrans":false,"slideLock":false,"navIndex":-1,"globalAudioId":"","thumbnailid":"","slideNumberInScene":0,"includeInSlideCounts":false,"showAnimationId":"","lmsId":"","width":420,"height":210,"resume":false,"id":"PrintPromptSlide","actionGroups":{"PrintOkButtonClick":{"kind":"actiongroup","actions":[{"kind":"printresults","showuserscore":true,"showpassingscore":true,"showpassfail":true,"showquizreview":true,"displayusername":true,"usernamevar":"_player.PrintPromptUsername_5uqoqPVWnwx","quizid":"_player.PrintPromptWindowQuizVar_5uqoqPVWnwx","quizidtype":"var"},{"kind":"close_window","id":"MessageWnd"}]}},"slideLayers":[{"enableSeek":true,"enableReplay":true,"timeline":{"duration":1000,"events":[{"kind":"ontimelinetick","time":0,"actions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6DglS7CSMIm_PrintPromptSlide_btn0"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"PrintPromptSlide_Scroll.6DglS7CSMIm_PrintPromptSlide_text"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"PrintPromptSlide_Scroll"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"PrintPromptSlide_Input"}},{"kind":"setfocus","showrect":true,"value":{"type":"string","value":"PrintPromptSlide_Input"}}]}]},"objects":[{"kind":"scrollarea","contentwidth":296,"contentheight":23,"objects":[{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6DglS7CSMIm_PrintPromptSlide_text","id":"01","linkId":"6DglS7CSMIm_PrintPromptSlide_text","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":289,"bottom":23,"pngfb":false,"pr":{"l":"common","i":7}}}],"shapemaskId":"","xPos":0,"yPos":0,"tabIndex":1,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":194,"rotateYPos":11.5,"scaleX":100,"scaleY":100,"alpha":100,"depth":1,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":289,"bottom":23,"altText":"Enter your name in the field below:","pngfb":false,"pr":{"l":"common","i":0}},"html5data":{"xPos":0,"yPos":0,"width":289,"height":23,"strokewidth":0}},"width":388,"height":23,"resume":false,"useHandCursor":true,"id":"6DglS7CSMIm_PrintPromptSlide_text"}],"shapemaskId":"","xPos":13,"yPos":16,"tabIndex":0,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":205.5,"rotateYPos":39,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":1,"scrolling":true,"shuffleLock":false,"width":411,"height":78,"resume":false,"useHandCursor":true,"id":"PrintPromptSlide_Scroll"},{"kind":"button","shapemaskId":"","xPos":160,"yPos":110,"tabIndex":3,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":50,"rotateYPos":15,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":2,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"textdata":{"uniqueId":"6DglS7CSMIm_PrintPromptSlide_btn0","type":"vectortext","altText":"OK","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":62,"bottom":25,"pngfb":false,"pr":{"l":"common","i":5}}}},"width":100,"height":30,"resume":false,"useHandCursor":true,"id":"6DglS7CSMIm_PrintPromptSlide_btn0","events":[{"kind":"onrelease","actions":[{"kind":"exe_actiongroup","id":"_parent.PrintOkButtonClick"}]}]},{"kind":"textinput","bindto":"","align":"left","verticalAlign":"top","rtl":false,"numeric":false,"multiline":false,"maxchars":0,"fontsize":14,"textcolor":"0x000000","bold":false,"italic":false,"marginleft":2,"marginright":2,"margintop":2,"marginbottom":2,"shapemaskId":"","xPos":13,"yPos":66,"tabIndex":2,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":192.5,"rotateYPos":13.5,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":3,"scrolling":true,"shuffleLock":false,"width":385,"height":27,"resume":false,"useHandCursor":true,"id":"PrintPromptSlide_Input","events":[{"kind":"onlosefocus","actions":[{"kind":"adjustvar","variable":"_player.PrintPromptUsername_5uqoqPVWnwx","operator":"set","value":{"type":"property","value":"$Text"}}]},{"kind":"onkeypress","keycode":13,"shift":false,"ctrl":false,"alt":false,"actions":[{"kind":"adjustvar","variable":"_player.PrintPromptUsername_5uqoqPVWnwx","operator":"set","value":{"type":"property","value":"$Text"}},{"kind":"exe_actiongroup","id":"_parent.PrintOkButtonClick"}]}]}],"startTime":-1,"elapsedTimeMode":"normal","useHandCursor":false,"resume":false,"kind":"slidelayer","isBaseLayer":true}]},{"kind":"slide","title":"<p dir=\'ltr\' align=\'left\' style=\\"font-family: \'Lato22AB4CAF\';\\">Scroll to Bottom</p>","trackViews":false,"showMenuResultIcon":false,"viewGroupId":"","historyGroupId":"prompt","videoZoom":"","scrolling":false,"transition":"appear","transDuration":0,"transDir":1,"wipeTrans":false,"slideLock":false,"navIndex":-1,"globalAudioId":"","thumbnailid":"","slideNumberInScene":0,"includeInSlideCounts":false,"showAnimationId":"","lmsId":"","width":420,"height":210,"resume":false,"id":"ScrollPromptSlide","slideLayers":[{"enableSeek":true,"enableReplay":true,"timeline":{"duration":1000,"events":[{"kind":"ontimelinetick","time":0,"actions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6DglS7CSMIm_ScrollPromptSlide_btn0"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"ScrollPromptSlide_Scroll.6DglS7CSMIm_ScrollPromptSlide_text"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"ScrollPromptSlide_Scroll"}}]}]},"objects":[{"kind":"scrollarea","contentwidth":314,"contentheight":46,"objects":[{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6DglS7CSMIm_ScrollPromptSlide_text","id":"01","linkId":"6DglS7CSMIm_ScrollPromptSlide_text","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":308,"bottom":46,"pngfb":false,"pr":{"l":"common","i":8}}}],"shapemaskId":"","xPos":0,"yPos":0,"tabIndex":1,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":194,"rotateYPos":23,"scaleX":100,"scaleY":100,"alpha":100,"depth":1,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":308,"bottom":46,"altText":"You must scroll to the bottom before submitting.","pngfb":false,"pr":{"l":"common","i":0}},"html5data":{"xPos":0,"yPos":0,"width":308,"height":46,"strokewidth":0}},"width":388,"height":46,"resume":false,"useHandCursor":true,"id":"6DglS7CSMIm_ScrollPromptSlide_text"}],"shapemaskId":"","xPos":13,"yPos":16,"tabIndex":0,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":205.5,"rotateYPos":39,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":1,"scrolling":true,"shuffleLock":false,"width":411,"height":78,"resume":false,"useHandCursor":true,"id":"ScrollPromptSlide_Scroll"},{"kind":"button","shapemaskId":"","xPos":160,"yPos":110,"tabIndex":2,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":50,"rotateYPos":15,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":2,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"textdata":{"uniqueId":"6DglS7CSMIm_ScrollPromptSlide_btn0","type":"vectortext","altText":"OK","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":62,"bottom":25,"pngfb":false,"pr":{"l":"common","i":5}}}},"width":100,"height":30,"resume":false,"useHandCursor":true,"id":"6DglS7CSMIm_ScrollPromptSlide_btn0","events":[{"kind":"onrelease","actions":[{"kind":"close_window","id":"MessageWnd"}]}]}],"startTime":-1,"elapsedTimeMode":"normal","useHandCursor":false,"resume":false,"kind":"slidelayer","isBaseLayer":true}]}],"id":"MsgScene_6DglS7CSMIm"}],"slideBank":{},"quizzes":[{"kind":"quiz","lmstext":"Assessment Part ","issurvey":false,"passPercent":70,"submitunanswered":"viewed","scoretype":"partial","reviewtype":"all","resettype":"all","id":"6ZGvSpq2R7D","actionGroups":{"EvaluateQuiz":{"kind":"actiongroup","actions":[{"kind":"eval_all_unanswered","objRef":{"type":"string","value":"_this"}}]}}},{"kind":"quiz","lmstext":"Assessment Part ","issurvey":true,"passPercent":70,"submitunanswered":"all","scoretype":"all","reviewtype":"all","resettype":"all","id":"65FBwE4teM9","actionGroups":{"EvaluateQuiz":{"kind":"actiongroup","actions":[{"kind":"eval_all_unanswered","objRef":{"type":"string","value":"_this"}}]}}},{"kind":"quiz","lmstext":"Assessment Part ","issurvey":true,"passPercent":70,"submitunanswered":"all","scoretype":"all","reviewtype":"all","resettype":"all","id":"5xLSXT394hs","actionGroups":{"EvaluateQuiz":{"kind":"actiongroup","actions":[{"kind":"eval_all_unanswered","objRef":{"type":"string","value":"_this"}}]}}},{"kind":"quiz","lmstext":"Assessment Part ","issurvey":false,"passPercent":70,"submitunanswered":"all","scoretype":"all","reviewtype":"all","resettype":"all","id":"6V6zkrTJF7r","actionGroups":{"EvaluateQuiz":{"kind":"actiongroup","actions":[{"kind":"eval_all_unanswered","objRef":{"type":"string","value":"_this"}}]}}},{"kind":"quiz","lmstext":"Assessment Part ","issurvey":false,"passPercent":70,"submitunanswered":"all","scoretype":"all","reviewtype":"all","resettype":"all","id":"6SsaJ20Ibh0","actionGroups":{"EvaluateQuiz":{"kind":"actiongroup","actions":[{"kind":"eval_all_unanswered","objRef":{"type":"string","value":"_this"}}]}}},{"kind":"quiz","lmstext":"Assessment Part ","issurvey":true,"passPercent":70,"submitunanswered":"all","scoretype":"all","reviewtype":"all","resettype":"all","id":"6XKBRLcGRL8","actionGroups":{"EvaluateQuiz":{"kind":"actiongroup","actions":[{"kind":"eval_all_unanswered","objRef":{"type":"string","value":"_this"}}]}}},{"kind":"quiz","lmstext":"Assessment Part ","issurvey":true,"passPercent":70,"submitunanswered":"all","scoretype":"all","reviewtype":"all","resettype":"all","id":"5xM2CPhABDk","actionGroups":{"EvaluateQuiz":{"kind":"actiongroup","actions":[{"kind":"eval_all_unanswered","objRef":{"type":"string","value":"_this"}}]}}},{"kind":"quiz","lmstext":"Assessment Part ","issurvey":false,"passPercent":70,"submitunanswered":"all","scoretype":"all","reviewtype":"all","resettype":"all","id":"6rIURxbn6iS","actionGroups":{"EvaluateQuiz":{"kind":"actiongroup","actions":[{"kind":"eval_all_unanswered","objRef":{"type":"string","value":"_this"}}]}}},{"kind":"quiz","lmstext":"Assessment Part ","issurvey":false,"passPercent":70,"submitunanswered":"all","scoretype":"all","reviewtype":"all","resettype":"all","sliderefs":[{"kind":"slideref","id":"_player.5qMcVdRA9Xn.6WC3rmVVRIx"},{"kind":"slideref","id":"_player.5qMcVdRA9Xn.6By9EfSRXJ5"},{"kind":"slideref","id":"_player.5qMcVdRA9Xn.6qzLZzPTK1I"},{"kind":"slideref","id":"_player.5qMcVdRA9Xn.5cF86OcVPBn"},{"kind":"slideref","id":"_player.5qMcVdRA9Xn.5kiRQOWZKao"}],"id":"5fpC70CZpTD","actionGroups":{"EvaluateQuiz":{"kind":"actiongroup","actions":[{"kind":"eval_all_unanswered","objRef":{"type":"string","value":"_this"}}]}}}],"assetLib":[{"kind":"asset","id":0,"imageType":"normal","width":1024,"height":627,"mobiledx":0,"mobiledy":0,"fileSize":45160,"maskref":"0","url":"mobile/6LioQ6mC4kN_80.png"},{"kind":"asset","id":1,"imageType":"normal","width":1024,"height":76,"mobiledx":0,"mobiledy":0,"fileSize":6278,"maskref":"1","url":"mobile/5wtkxthIOiT_P_0_0_1024_76.png"},{"kind":"asset","id":2,"imageType":"normal","width":1024,"height":69,"mobiledx":0,"mobiledy":0,"fileSize":5839,"maskref":"2","url":"mobile/5tdauCtkMUG_P_0_517_1024_69.png"},{"kind":"asset","id":3,"imageType":"normal","width":1851,"height":896,"mobiledx":0,"mobiledy":0,"fileSize":97726,"maskref":"3","url":"mobile/6BelCmpdv8g_P_109_560_1850_896.png"},{"kind":"asset","id":4,"imageType":"normal","width":70,"height":70,"mobiledx":0,"mobiledy":0,"fileSize":412106,"maskref":"4","url":"mobile/6h5N4eSxU7A.png"},{"kind":"asset","id":5,"imageType":"normal","width":70,"height":70,"mobiledx":0,"mobiledy":0,"fileSize":434610,"maskref":"5","url":"mobile/6VwbbYKD0NO.png"},{"kind":"asset","id":6,"imageType":"normal","width":70,"height":70,"mobiledx":0,"mobiledy":0,"fileSize":303668,"maskref":"6","url":"mobile/6h5N4eSxU7A_B30.png"},{"kind":"asset","id":7,"imageType":"normal","width":70,"height":70,"mobiledx":0,"mobiledy":0,"fileSize":343309,"maskref":"7","url":"mobile/6VwbbYKD0NO_B30.png"},{"kind":"asset","id":8,"imageType":"normal","width":70,"height":70,"mobiledx":0,"mobiledy":0,"fileSize":411293,"maskref":"8","url":"mobile/6ECQ48AuLiZ.png"},{"kind":"asset","id":9,"imageType":"normal","width":70,"height":70,"mobiledx":0,"mobiledy":0,"fileSize":304393,"maskref":"9","url":"mobile/6ECQ48AuLiZ_B30.png"},{"kind":"asset","id":10,"imageType":"normal","width":70,"height":70,"mobiledx":0,"mobiledy":0,"fileSize":324521,"maskref":"10","url":"mobile/6oUJrZ0q9kA.png"},{"kind":"asset","id":11,"imageType":"normal","width":70,"height":70,"mobiledx":0,"mobiledy":0,"fileSize":253348,"maskref":"11","url":"mobile/6oUJrZ0q9kA_B30.png"},{"kind":"asset","id":12,"imageType":"normal","width":70,"height":70,"mobiledx":0,"mobiledy":0,"fileSize":470571,"maskref":"12","url":"mobile/69s6DPNOMPn.png"},{"kind":"asset","id":13,"imageType":"normal","width":70,"height":70,"mobiledx":0,"mobiledy":0,"fileSize":297177,"maskref":"13","url":"mobile/69s6DPNOMPn_B30.png"},{"kind":"asset","id":14,"imageType":"normal","width":70,"height":70,"mobiledx":0,"mobiledy":0,"fileSize":385107,"maskref":"14","url":"mobile/6HdPRZOZ4ZU.png"},{"kind":"asset","id":15,"imageType":"normal","width":70,"height":70,"mobiledx":0,"mobiledy":0,"fileSize":260782,"maskref":"15","url":"mobile/6HdPRZOZ4ZU_B30.png"},{"kind":"asset","id":16,"imageType":"normal","width":720,"height":412,"mobiledx":0,"mobiledy":0,"fileSize":75495,"maskref":"16","url":"mobile/5WGz90qWQJ4_80.png"},{"kind":"asset","id":17,"imageType":"normal","width":536,"height":381,"mobiledx":0,"mobiledy":0,"fileSize":43381,"maskref":"17","url":"mobile/5zNb0x5SgBr.png"},{"kind":"asset","id":18,"imageType":"normal","width":1842,"height":1256,"mobiledx":0,"mobiledy":0,"fileSize":34060,"maskref":"18","url":"mobile/5XbHuY67cor_P_85_34_1842_1256.png"},{"kind":"asset","id":19,"imageType":"normal","width":474,"height":306,"mobiledx":0,"mobiledy":0,"fileSize":87086,"url":"mobile/6UpeADc8aJc_80_Q8.jpg"},{"kind":"asset","id":20,"width":0,"height":0,"duration":8012,"fileSize":48089,"url":"story_content/6HNulVK5rAz_44100_48_0.mp3"},{"kind":"asset","id":21,"imageType":"normal","width":49,"height":49,"mobiledx":0,"mobiledy":0,"fileSize":662,"maskref":"19","url":"mobile/5tJYotr8wRK.png"},{"kind":"asset","id":22,"imageType":"normal","width":49,"height":49,"mobiledx":0,"mobiledy":0,"fileSize":640,"maskref":"20","url":"mobile/5tJYotr8wRK_B30_C40.png"},{"kind":"asset","id":23,"imageType":"normal","width":872,"height":654,"mobiledx":0,"mobiledy":0,"fileSize":63592,"url":"mobile/6ELPsle15XD_80_P_113_0_872_654.jpg"},{"kind":"asset","id":24,"width":0,"height":0,"duration":8692,"fileSize":52164,"url":"story_content/6HAkwi7jPFl_44100_48_0.mp3"},{"kind":"asset","id":25,"width":0,"height":0,"duration":6762,"fileSize":40565,"url":"story_content/62JzEZLBqKk_44100_48_0.mp3"},{"kind":"asset","id":26,"width":0,"height":0,"duration":3292,"fileSize":19720,"url":"story_content/6UPlJiQGUiF_44100_48_0.mp3"},{"kind":"asset","id":27,"width":0,"height":0,"duration":5222,"fileSize":31318,"url":"story_content/6V9WQkPc8wy_44100_48_0.mp3"},{"kind":"asset","id":28,"width":0,"height":0,"duration":2611,"fileSize":15644,"url":"story_content/6ZVUji9Jkxj_44100_48_0.mp3"}],"fontLib":[{"name":"Century Gothic Charset05E871ACC"},{"name":"Century GothicBold BoldF1011AC7"},{"name":"Tahoma Charset0_v5lJO4J78EA908D"},{"name":"TahomaBold Charset0Bold1EECF806"}],"xapi":{"activityId":"http://6DglS7CSMIm_course_id","manualConfiguration":false,"lrsEnabled":false},"scorings":[{"kind":"scoring","type":"action","passPercent":80,"viewThreshold":0,"slidesViewedMode":"project","passStatus":"pass","failStatus":"incomplete","scoreRefs":[],"id":"scoringId_Trigger"},{"kind":"scoring","type":"quiz","passPercent":70,"viewThreshold":0,"slidesViewedMode":"project","passStatus":"pass","failStatus":"incomplete","scoreRefs":[{"kind":"scoreref","type":"quiz","ref":"6V6zkrTJF7r","weight":1,"maxvalue":100,"mustpass":false}],"id":"scoringId_Results_e82f4fbb-1064-4bbb-9ca4-5e00e865fd0d"},{"kind":"scoring","type":"quiz","passPercent":70,"viewThreshold":0,"slidesViewedMode":"project","passStatus":"pass","failStatus":"incomplete","scoreRefs":[{"kind":"scoreref","type":"quiz","ref":"6rIURxbn6iS","weight":1,"maxvalue":100,"mustpass":false}],"id":"scoringId_Results_a41e8d04-0910-4fe6-ba49-cb042f760d8a"},{"kind":"scoring","type":"quiz","passPercent":70,"viewThreshold":0,"slidesViewedMode":"project","passStatus":"pass","failStatus":"incomplete","scoreRefs":[{"kind":"scoreref","type":"quiz","ref":"5fpC70CZpTD","weight":1,"maxvalue":100,"mustpass":false}],"id":"scoringId_Results_eb590e47-7e36-4218-9df2-fda653015e61"}],"slideCount":52,"flags":["AccessibleVideo","FullScreenToggle","InsertSvgPicture","LayerPresentAsDialog","MultipleQuizTracking","QuestionCorrectVariable","UpdatedThemeEditor"],"id":"_player","variables":[{"kind":"variable","name":"QuizAdvanceModeWarningShown","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"CurrentQuiz_5h9UH7IRCSF","type":"string","value":"","resume":true},{"kind":"variable","name":"CurrentQuiz_5aCHP4mLop5","type":"string","value":"","resume":true},{"kind":"variable","name":"CurrentQuiz_5XsWOhlZZCI","type":"string","value":"","resume":true},{"kind":"variable","name":"CurrentQuiz_6dFh5wpCpQO","type":"string","value":"","resume":true},{"kind":"variable","name":"CurrentQuiz_62PBCCG98VZ","type":"string","value":"","resume":true},{"kind":"variable","name":"CurrentQuiz_5plS1VnMsww","type":"string","value":"","resume":true},{"kind":"variable","name":"CurrentQuiz_5uSC9QmyKs7","type":"string","value":"","resume":true},{"kind":"variable","name":"CurrentQuiz_5aLhMmttm06","type":"string","value":"","resume":true},{"kind":"variable","name":"CurrentQuiz_5XovNDG1CBs","type":"string","value":"","resume":true},{"kind":"variable","name":"CurrentQuiz_5vjyS0Uru9J","type":"string","value":"","resume":true},{"kind":"variable","name":"CurrentQuiz_5l5Tdv9I9NF","type":"string","value":"","resume":true},{"kind":"variable","name":"CurrentQuiz_69E4b73wyTt","type":"string","value":"","resume":true},{"kind":"variable","name":"CurrentQuiz_5l3bD34YqO4","type":"string","value":"","resume":true},{"kind":"variable","name":"CurrentQuiz_5zbTpGPczPh","type":"string","value":"","resume":true},{"kind":"variable","name":"CurrentQuiz_5nYHzlWKHPX","type":"string","value":"","resume":true},{"kind":"variable","name":"CurrentQuiz_5a5SPHkacjQ","type":"string","value":"","resume":true},{"kind":"variable","name":"CurrentQuiz_6DEKIw9lK8h","type":"string","value":"","resume":true},{"kind":"variable","name":"CurrentQuiz_6WnGsAyN2qU","type":"string","value":"","resume":true},{"kind":"variable","name":"CurrentQuiz_5ZVzQVj4wuo","type":"string","value":"","resume":true},{"kind":"variable","name":"CurrentQuiz_6V7aYWFCZpy","type":"string","value":"","resume":true},{"kind":"variable","name":"CurrentQuiz_6R2hZlMW2Qq","type":"string","value":"","resume":true},{"kind":"variable","name":"CurrentQuiz_6WrbSl9Vyxn","type":"string","value":"","resume":true},{"kind":"variable","name":"CurrentQuiz_5Yy3mUyUQwt","type":"string","value":"","resume":true},{"kind":"variable","name":"CurrentQuiz_6bGSCfnozMx","type":"string","value":"","resume":true},{"kind":"variable","name":"CurrentQuiz_5ua2wlmyTQC","type":"string","value":"","resume":true},{"kind":"variable","name":"CurrentQuiz_5Vg2pI7B4Hc","type":"string","value":"","resume":true},{"kind":"variable","name":"CurrentQuiz_5X3K9OO2jYE","type":"string","value":"","resume":true},{"kind":"variable","name":"CurrentQuiz_5k77ShnoGFA","type":"string","value":"","resume":true},{"kind":"variable","name":"CurrentQuiz_5XnOvbptIuD","type":"string","value":"","resume":true},{"kind":"variable","name":"CurrentQuiz_6eesZa4SzPQ","type":"string","value":"","resume":true},{"kind":"variable","name":"CurrentQuiz_5cuh1RfEZNw","type":"string","value":"","resume":true},{"kind":"variable","name":"CurrentQuiz_5WPZG5Df9y4","type":"string","value":"","resume":true},{"kind":"variable","name":"CurrentQuiz_5xssiy5XhcF","type":"string","value":"","resume":true},{"kind":"variable","name":"CurrentQuiz_5sXJ51RPtUf","type":"string","value":"","resume":true},{"kind":"variable","name":"CurrentQuiz_5i5XgqRkAHa","type":"string","value":"","resume":true},{"kind":"variable","name":"CurrentQuiz_6ARLAyFSPal","type":"string","value":"","resume":true},{"kind":"variable","name":"CurrentQuiz_6eCxLaJLmmR","type":"string","value":"","resume":true},{"kind":"variable","name":"CurrentQuiz_5lfflPZYpBj","type":"string","value":"","resume":true},{"kind":"variable","name":"CurrentQuiz_6liletWvi5J","type":"string","value":"","resume":true},{"kind":"variable","name":"CurrentQuiz_5aEdVWFmdtX","type":"string","value":"","resume":true},{"kind":"variable","name":"CurrentQuiz_6rowCDWWnYc","type":"string","value":"","resume":true},{"kind":"variable","name":"LearnerName","type":"string","value":"","resume":true},{"kind":"variable","name":"Toggle","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"KCTorF_Score","type":"number","value":0,"resume":true},{"kind":"variable","name":"KCDragCorrectQ1_1","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"KCDragCorrectQ1_2","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"KCDragCorrectQ1_3","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"KCDragCorrectQ1_4","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"KCDragCorrectQ1_5","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"KCDragCorrectQ1_6","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"KCDragDropQ1_Score","type":"number","value":0,"resume":true},{"kind":"variable","name":"KCDragDropQ2_Score","type":"number","value":0,"resume":true},{"kind":"variable","name":"KCDragCorrectQ2_1","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"KCDragCorrectQ2_2","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"KCDragCorrectQ2_3","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"KCDragCorrectQ2_4","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"KCDragCorrectQ2_5","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"KCDragCorrectQ2_6","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"KCDragCorrectQ2_7","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"KCDragDropQ3_Score","type":"number","value":0,"resume":true},{"kind":"variable","name":"KCDragCorrectQ3_1","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"KCDragCorrectQ3_2","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"KCDragCorrectQ3_3","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"KCDragCorrectQ3_4","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"KCDragCorrectQ3_5","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"KCDragCorrectQ3_6","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"KCDragDropQ4_Score","type":"number","value":0,"resume":true},{"kind":"variable","name":"KCDragCorrectQ4_1","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"KCDragCorrectQ4_2","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"KCDragCorrectQ4_3","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"KCDragCorrectQ4_4","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"KCDragCorrectQ4_5","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"KCDragCorrectQ4_6","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"KCPickMany_Score","type":"number","value":0,"resume":true},{"kind":"variable","name":"TextEntry","type":"string","value":"","resume":true},{"kind":"variable","name":"TextEntry1","type":"string","value":"","resume":true},{"kind":"variable","name":"TextEntry2","type":"string","value":"","resume":true},{"kind":"variable","name":"TextEntry3","type":"string","value":"","resume":true},{"kind":"variable","name":"TextEntry4","type":"string","value":"","resume":true},{"kind":"variable","name":"TextEntry5","type":"string","value":"","resume":true},{"kind":"variable","name":"TextEntry6","type":"string","value":"","resume":true},{"kind":"variable","name":"TextEntry7","type":"string","value":"","resume":true},{"kind":"variable","name":"WordCount","type":"number","value":0,"resume":true},{"kind":"variable","name":"SetA_AssessmentPart2_Score","type":"number","value":0,"resume":true},{"kind":"variable","name":"SetA_AssessmentPart3_Q1","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"SetA_AssessmentPart3_Q2","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"SetA_AssessmentPart3_Q3","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"SetA_AssessmentPart3_Q4","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"SetA_AssessmentPart3_Q5","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"SetA_AssessmentPart3_Q6","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"SetA_AssessmentPart3_Q7","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"SetA_AssessmentPart3_Score","type":"number","value":0,"resume":true},{"kind":"variable","name":"SetB_AssessmentPart2_Score","type":"number","value":0,"resume":true},{"kind":"variable","name":"SetB_AssessmentPart3_Q1","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"SetB_AssessmentPart3_Q2","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"SetB_AssessmentPart3_Q3","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"SetB_AssessmentPart3_Q4","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"SetB_AssessmentPart3_Q5","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"SetB_AssessmentPart3_Q6","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"SetB_AssessmentPart3_Q7","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"SetB_AssessmentPart3_Score","type":"number","value":0,"resume":true},{"kind":"variable","name":"TextEntry8","type":"string","value":"","resume":true},{"kind":"variable","name":"SetB_KCPickMany_Score","type":"number","value":0,"resume":true},{"kind":"variable","name":"SetB_KCTorF_Score","type":"number","value":0,"resume":true},{"kind":"variable","name":"SetB_KCDragCorrectQ1_1","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"SetB_KCDragCorrectQ2_1","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"SetB_KCDragCorrectQ2_5","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"SetB_KCDragCorrectQ2_2","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"SetB_KCDragCorrectQ2_3","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"SetB_KCDragCorrectQ2_4","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"SetB_KCDragCorrectQ1_2","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"SetB_KCDragCorrectQ1_3","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"SetB_KCDragCorrectQ1_4","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"SetB_KCDragCorrectQ1_5","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"SetB_KCDragCorrectQ1_6","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"SetB_KCDragCorrectQ2_6","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"SetB_KCDragCorrectQ3_1","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"SetB_KCDragCorrectQ2_7","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"SetB_KCDragCorrectQ3_2","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"SetB_KCDragCorrectQ3_3","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"SetB_KCDragCorrectQ3_4","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"SetB_KCDragCorrectQ3_5","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"SetB_KCDragCorrectQ3_6","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"SetB_KCDragCorrectQ4_1","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"SetB_KCDragCorrectQ4_2","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"SetB_KCDragCorrectQ4_3","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"SetB_KCDragCorrectQ4_4","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"SetB_KCDragCorrectQ4_5","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"SetB_KCDragCorrectQ4_6","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"SetB_KCDragDropQ1_Score","type":"number","value":0,"resume":true},{"kind":"variable","name":"SetB_KCDragDropQ2_Score","type":"number","value":0,"resume":true},{"kind":"variable","name":"SetB_KCDragDropQ3_Score","type":"number","value":0,"resume":true},{"kind":"variable","name":"SetB_KCDragDropQ4_Score","type":"number","value":0,"resume":true},{"kind":"variable","name":"5mcjhe8HTy1_RetryModeInteractionIncompleteOnLoad","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"ReviewMode_6eCxLaJLmmR","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"6WC3rmVVRIx_RetryModeInteractionIncompleteOnLoad","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"ReviewMode_5lfflPZYpBj","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"6By9EfSRXJ5_RetryModeInteractionIncompleteOnLoad","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"ReviewMode_6liletWvi5J","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"6qzLZzPTK1I_RetryModeInteractionIncompleteOnLoad","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"ReviewMode_5aEdVWFmdtX","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"5cF86OcVPBn_RetryModeInteractionIncompleteOnLoad","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"ReviewMode_6rowCDWWnYc","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"5kiRQOWZKao_RetryModeInteractionIncompleteOnLoad","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"ReviewMode_6S2Q2LcU8Je","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"674rHSieUec_RetryModeInteractionIncompleteOnLoad","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"LastSlideViewed_6DglS7CSMIm","type":"string","value":"_player.5W8lhla3qmQ.5j0NXPrevEG","resume":true},{"kind":"variable","name":"PrintPromptWindowQuizVar_5uqoqPVWnwx","type":"string","value":"","resume":true},{"kind":"variable","name":"PrintPromptUsername_5uqoqPVWnwx","type":"string","value":"","resume":true}],"actionGroups":{"ActGrpOnPrevButtonClick":{"kind":"actiongroup","actions":[{"kind":"trigger_prev_slide"}]},"ActGrpOnNextButtonClick":{"kind":"actiongroup","actions":[{"kind":"trigger_next_slide"}]},"ActGrpOnFinishButtonClick":{"kind":"actiongroup","actions":[{"kind":"trigger_slide_finish"}]},"ActGrpOnSubmitButtonClick":{"kind":"actiongroup","actions":[{"kind":"trigger_submit_slide"}]},"ActGrpOnSubmitAllButtonClick":{"kind":"actiongroup","actions":[{"kind":"trigger_submitall_slide"}]},"_setstates":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"varexists","value":"_state","type":"string"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"and","statements":[{"kind":"varexists","value":"_disabled","type":"string"},{"kind":"compare","operator":"eq","valuea":"#_disabled","typea":"var","valueb":true,"typeb":"boolean"}]}},"thenActions":[{"kind":"set_enabled","objRef":{"type":"string","value":"_this"},"enabled":{"type":"boolean","value":false}}],"elseActions":[{"kind":"set_enabled","objRef":{"type":"string","value":"_this"},"enabled":{"type":"boolean","value":true}}]},{"kind":"adjustvar","variable":"_stateName","operator":"set","value":{"type":"var","value":"#_state"}},{"kind":"foreach","iterables":[{"kind":"iterable","valueref":[{"kind":"valueref","name":"valueref1","type":"string","value":"_hover"},{"kind":"valueref","name":"valueref2","type":"var","value":"#_hover"},{"kind":"valueref","name":"valueref3","type":"string","value":"_Hover"}]},{"kind":"iterable","valueref":[{"kind":"valueref","name":"valueref1","type":"string","value":"_down"},{"kind":"valueref","name":"valueref2","type":"var","value":"#_down"},{"kind":"valueref","name":"valueref3","type":"string","value":"_Down"}]},{"kind":"iterable","valueref":[{"kind":"valueref","name":"valueref1","type":"string","value":"_visited"},{"kind":"valueref","name":"valueref2","type":"var","value":"#_visited"},{"kind":"valueref","name":"valueref3","type":"string","value":"_Visited"}]},{"kind":"iterable","valueref":[{"kind":"valueref","name":"valueref1","type":"string","value":"_checked"},{"kind":"valueref","name":"valueref2","type":"var","value":"#_checked"},{"kind":"valueref","name":"valueref3","type":"string","value":"_Selected"}]},{"kind":"iterable","valueref":[{"kind":"valueref","name":"valueref1","type":"string","value":"_disabled"},{"kind":"valueref","name":"valueref2","type":"var","value":"#_disabled"},{"kind":"valueref","name":"valueref3","type":"string","value":"_Disabled"}]},{"kind":"iterable","valueref":[{"kind":"valueref","name":"valueref1","type":"string","value":"_review"},{"kind":"valueref","name":"valueref2","type":"var","value":"#_review"},{"kind":"valueref","name":"valueref3","type":"string","value":"_Review"}]}],"actions":[{"kind":"if_action","condition":{"statement":{"kind":"and","statements":[{"kind":"varexists","value":"valueref1","type":"valueref"},{"kind":"compare","operator":"eq","valuea":"valueref2","typea":"valueref","valueb":true,"typeb":"boolean"}]}},"thenActions":[{"kind":"adjustvar","variable":"_tempStateName","operator":"set","value":{"type":"var","value":"#_stateName"}},{"kind":"adjustvar","variable":"_tempStateName","operator":"add","value":{"type":"valueref","value":"valueref3"}},{"kind":"if_action","condition":{"statement":{"kind":"stateexists","objRef":{"type":"string","value":"_this"},"stateRef":{"type":"var","value":"#_tempStateName"}}},"thenActions":[{"kind":"adjustvar","variable":"_stateName","operator":"set","value":{"type":"var","value":"#_tempStateName"}}],"elseActions":[]}]}]},{"kind":"setobjstate","stateRef":{"type":"var","value":"#_stateName"},"objRef":{"type":"string","value":"_this"}}]},{"kind":"if_action","condition":{"statement":{"kind":"and","statements":[{"kind":"actiongroupexists","value":"ActGrpSetStatesFinal","type":"string"}]}},"thenActions":[{"kind":"exe_actiongroup","id":"ActGrpSetStatesFinal"}]}]}},"events":[{"kind":"onobjectevent","eventName":"prev_pressed","actions":[{"kind":"exe_actiongroup","id":"ActGrpOnPrevButtonClick"}]},{"kind":"onobjectevent","eventName":"next_pressed","actions":[{"kind":"exe_actiongroup","id":"ActGrpOnNextButtonClick"}]},{"kind":"onobjectevent","eventName":"finish_pressed","actions":[{"kind":"exe_actiongroup","id":"ActGrpOnFinishButtonClick"}]},{"kind":"onobjectevent","eventName":"submit_pressed","actions":[{"kind":"exe_actiongroup","id":"ActGrpOnSubmitButtonClick"}]},{"kind":"onobjectevent","eventName":"submitall_pressed","actions":[{"kind":"exe_actiongroup","id":"ActGrpOnSubmitAllButtonClick"}]}]}'
//     const data = JSON.parse(datajson)
//     slideInfo = data.slideMap
//     assetLibrary = data.assetLib
//     totalSlides = slideInfo.slideRefs.length
//     console.log('SLIDEINFO',slideInfo)
//     console.log('ASSETLIB', assetLibrary)
//     console.log('ASSETLIB', totalSlides)
//     const sampleindex = slideInfo.slideRefs[0].assetIds[0]
//     console.log('SAMPLEURL', assetLibrary[sampleindex].url)


// }