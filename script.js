console.log("Page is loading..");

//1. Make sure that the page has loaded
window.addEventListener('load', function () {
    console.log("Page has loaded.")

    //2. Send a request for data
    fetch("http://api.open-notify.org/astros.json")
        //3. Receive a response object that includes information about the data
        .then(response =>
            //console.log(response);
            response.json() //return the json inside the response object
        )
        //4. Access the data
        .then(data => {
            console.log(data);
            console.log(data.number);

            //Setting global variable = to the object
            astronautNumber = data.number;
            // //5. Do something with the data
            // let astronautNo = data.number;

            // //create a new html element
            // let numberPar = document.createElement('p');
            // //add content to the paragraph
            // numberPar.innerHTML = astronautNo;

            // //select a section element
            // let container = document.querySelector('.container');

            // //append the p element to the section
            // container.appendChild(numberPar);

            // //add styling
            // numberPar.setAttribute('class','astronaut_number');
        })
        .catch(error => {
            console.log(error);
        })
});

/*---p5js----*/

//Global variable to receive the data
let astronautNumber;

function setup() {
    let myCanvas = createCanvas(600, 400);
    myCanvas.parent('data_container');

    // background(40);
}

function draw() {
    //Makes sure astronaut number variable is set to the data
    if (astronautNumber) {
        for (let i = 0; i < astronautNumber; i++) {
            ellipse(70 + (70 * i), 200, 50);
        }
    } else {
        console.log('data is not ready');
    }
}