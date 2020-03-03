let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/gibbon.jpg') {
      myImage.setAttribute ('src','Unbenannt.PNG');
    } else {
      myImage.setAttribute ('src','images/gibbon.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'PANAMA MUZ KOKUYOR, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'PANAMA MUZ KOKUYOR, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}