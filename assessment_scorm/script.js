
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

     displayQuestionAndOptions(questionList[currentQuestionIndex]);
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

    // Function to display a question and its options
    function displayQuestionAndOptions(question) {
        displayQuestion.textContent = question.question;
        displayChoices.innerHTML = ''; // Clear previous options
  
        question.options.forEach((option, index) => {
          const optionElement = document.createElement('div');
          optionElement.className = 'option';
          optionElement.id = `options_${index}`;
  
          const radioInput = document.createElement('input');
          radioInput.type = 'radio';
          radioInput.className = 'radio-button'
          radioInput.name = `question_${currentQuestionIndex}`; // Use a unique name for each question
          radioInput.checked = option.isSelected;
          radioInput.id = `option_${index}`;
  
          const optionLabel = document.createElement('label');
          optionLabel.textContent = option.choice;
          optionLabel.setAttribute('for', `option_${index}`);
  
          optionElement.appendChild(radioInput);
          optionElement.appendChild(optionLabel);
  
          // Attach an event listener to manually toggle the radio button when the div is clicked
          optionElement.addEventListener('click', () => {
            question.options.forEach((o) => (o.isSelected = false));
            option.isSelected = !option.isSelected;
            radioInput.checked = option.isSelected;
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
    //    displayQuestion.textContent = questionList[0].question
    // displayQuestionAndOptions(questionList[currentQuestionIndex]);
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

function nextQuestion() {
    // Check if there is a selected answer
    const selectedAnswer = questionList[currentQuestionIndex].options.find(option => option.isSelected);
    if (!selectedAnswer) {
      console.log('No selected answer');
      return;
    }

    // Proceed to the next question
    currentQuestionIndex++;
    if (currentQuestionIndex < questionList.length) {
      displayQuestionAndOptions(questionList[currentQuestionIndex]);
    } else {
      alert('End of questions');
    }
  }


window.addEventListener("message", message => {
   showQuestions()
   // alert(message.data)
 });