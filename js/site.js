//get the inputs
function getValues() {
    //get each input by ID
    let startInput = document.getElementById('startInput');
    let endInput = document.getElementById('endInput');
    // get the value out of the <input>
    let startNumber = parseInt(startInput.value);
    let endNumber = parseInt(endInput.value);
    //parseInt turns a string into a number

    //if the input is not a number we get NAN 

    // validate that the inputs are numbers
    if (Number.isInteger(startNumber) && Number.isInteger(endNumber)) {

        //after you know if the number are both integers you 
        let generatedNumbers = generateNumbers(startNumber, endNumber);


        //want to generate the numbers with function generateNumbers
        displayNumbers(generatedNumbers);

    } else {
        //tell the user to enter valid numbers
        Swal.fire({
            backdrop: false,
            title: 'oops',
            text: 'please enter valid start and end numbers',
            icon: 'error',
        });


    }


    // what do i do if theyre not numbers 


}


//generate some numbers
function generateNumbers(start, end) {
    //generate numbers between start and end
    let numbers = [];


    for (let i = start; i <= end; i = i + 1) {
        // if i is less than or equal to a hundred it will do whatever we 
        // want it to in the curly bracket
        // write down the number i is on
        numbers.push(i);
    }

    return numbers;


}


//display the numbers on the page
function displayNumbers(numbers) {

    let tableHtml = '';



    //go through each number in the array
    for (let index = 0; index < numbers.length; index = index + 1) {
        //get one number out of the array
        let currentNumber = numbers[index];
        let className = '';

        //figure out if current number is even or odd
        if (currentNumber % 2 == 0) {
            className = 'even';

            //the number is even
        } else {
            //the number is odd
            className = 'odd';

        }



        //write the Html for that number
        tableHtml = tableHtml + `<tr><td class="${className}"> ${currentNumber}</td></tr>`;
    }


    // create html for each number 
    // after, put that html in the table 

    let tableElement = document.getElementById('resultsTable');
    //put that html in the table
    tableElement.innerHTML = tableHtml;

    //bold the even numbers
    // figure out where to display them in the <table> 


}


