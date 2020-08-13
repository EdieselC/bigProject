
let database = firebase.database().ref(); // establish a reference to the root of our databsase
//Zooms into the stories



// Set database "child_added" event listener here
database.on("child_added", addMessageToBoard);

// .on is an event listener that listens to when data is added
 function addMessageToBoard(rowData) {//call back function
    let row = rowData.val();
    console.log(row);

    let number1 =document.querySelector("#Stories");
    let newbutton = document.createElement("button");
    newbutton.className = "inputs"

    newbutton.innerText = row.NAME + ":" + row.MESSAGE;
    number1.appendChild(newbutton);




 }

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

// let number1 =document.querySelector(".allMessages");
// let newP = document.createElement("p");
// newP.innerText = row.NAME + ":" + row.MESSAGE;
// number1.appendChild(newP);

// const usernameElement = document.getElementById("username");
// const messageElement = document.getElementById("message");
// const button = document.getElementById("submitButton");
// button.addEventListener("click",updateDB);

// //Set database object here


// /**
//  * Updates the database with the username and message.
//  */
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

// let number1 =document.querySelector(".allMessages");
// let newP = document.createElement("p");
// newP.innerText = row.NAME + ":" + row.MESSAGE;
// number1.appendChild(newP);




//  }



//  }