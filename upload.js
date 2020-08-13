// //Zooms into the stories
// const button = document.querySelector("#number1");
// function onClick(event){
//     event.preventDefault()

//     var el = document.createElement('div');


//     button.style.width = '100%';
//     button.style.height = '100vh';
//     button.style.textAlign = "left"
// }

// button.addEventListener("click", onClick); 

// this might get deleteed
// let database = ;
// function updateDB(event){
//     event.preventDefault();
//     const username        = usernameElement.value;
//     const message         = messageElement.value;

//     usernameElement.value = "";
//     messageElement.value  = "";

//     console.log(username + " : " + message);

//     //Update database here

//     let value = {
// // make 2 columns
// NAME: username,
// MESSAGE: message
//     }
//     // make a row
// database.push(value);
// }

// // Set database "child_added" event listener here
// database.on("child_added", addMessageToBoard);
// // .on is an event listener that listens to when data is added
//  function addMessageToBoard(rowData) {//call back function
//  let row = rowData.val();
// console.log(row);

// let  =document.querySelector(".allMessages");
// let newP = document.createElement("p");
// newP.innerText = row.NAME + ":" + row.MESSAGE;
// number1.appendChild(newP);

// const usernameElement = document.getElementById("username");
// const messageElement = document.getElementById("message");
// const button = document.getElementById("submitButton");
// button.addEventListener("click",updateDB);

//Set database object here
let database = firebase.database().ref(); // establish a reference to the root of our databsase

let button = document.getElementById("submitButton");
const usernameElement = document.getElementById("username");
const messageElement = document.getElementById("message");

button.addEventListener("click", updateDB);
/**
 * Updates the database with the username and message.
 */
function updateDB(event){
    event.preventDefault();
    const username        = usernameElement.value;
    const message         = messageElement.value;

    // emptying out the textboc after they submit
    usernameElement.value = "";
    messageElement.value  = "";

    console.log(username + " : " + message);

    //Update database here

    let value = {
        // make 2 columns
        NAME: username,
        MESSAGE: message
    }
    // make a row
    database.push(value);
}

// Set database "child_added" event listener here
database.on("child_added", addMessageToBoard);

// .on is an event listener that listens to when data is added
 function addMessageToBoard(rowData) {//call back function
    let row = rowData.val();
    console.log(row);

    let number1 =document.querySelector(".allMessages");
    let newP = document.createElement("p");
    newP.innerText = row.NAME + ":" + row.MESSAGE;
    number1.appendChild(newP);




 }



