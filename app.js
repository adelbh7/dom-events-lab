/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/

/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/

/*-------------------------------- Functions --------------------------------*/
let inputNumber1=""
let inputNumber2=""
let calcOperator=""
let inputValue=""
let equalSign=""

const buttons = document.querySelectorAll('.button')
let calcDisplay = document.querySelector(".display")

buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
      // This log is for testing purposes to verify we're getting the correct value
      
      console.log(event.target.innerText)

      inputValue=event.target.innerText

      // Future logic to capture the button's value would go here...
    });
    
  });

const clr = (()=>{
  inputNumber1=""
  inputNumber2=""
  calcOperator=""
  calcDisplay.innerText="SALMAN"
  equalSign=""
})
  const calculator = document.querySelector('#calculator');

  calculator.addEventListener('click', (event) => {
    // This log is for testing purposes to verify we're getting the correct value
    // You have to click a button to see this log
    if (equalSign==="=")
      {
        clr()
        //calcDisplay.innerText=""
      }

    console.log(event.target.innerText);
    
    
    
    if (calcOperator===""&&event.target.classList.contains('number')) {
      // Do something with a number
      inputNumber1+= inputValue
      calcDisplay.innerText= inputNumber1

    }
    
      // Example
    else if (inputNumber1!==""&&(event.target.innerText === '*'||event.target.innerText === '+'||event.target.innerText === '/'||event.target.innerText === '-' )) {

      // Do something with this operator
      calcOperator=inputValue
      calcDisplay.innerText= `${inputNumber1} ${calcOperator}`

    }
    else if (calcOperator!==""&&event.target.classList.contains('number')) {
      inputNumber2+=inputValue
      calcDisplay.innerText=  `${inputNumber1} ${calcOperator} ${inputNumber2}`
    }
    else if (calcOperator!==""&&inputNumber1!==""&&inputNumber2!==""&&inputValue==="="){
      equalSign="="
      if (calcOperator==="*")
      calcDisplay.innerText= Number(inputNumber1)* Number(inputNumber2) //`${inputNumber1} ${calcOperator} ${inputNumber2}`
      else if (calcOperator==="+")
        calcDisplay.innerText= Number(inputNumber1)+ Number(inputNumber2)
      else if (calcOperator==="-")
        calcDisplay.innerText= Number(inputNumber1)- Number(inputNumber2)
      else if (calcOperator==="/")
        calcDisplay.innerText= Number(inputNumber1)/ Number(inputNumber2)

    }
    else if (inputValue==="C")
    {
      clr()
    }

  });
  
  