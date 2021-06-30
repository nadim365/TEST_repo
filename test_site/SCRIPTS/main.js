

let  myImage = document.querySelector('img');
myImage.onclick = function() {
    let mysrc = myImage.getAttribute('src');
    if(mysrc === 'IMAGES/Firefox_logo,_2019.svg.png') {
        myImage.setAttribute('src','IMAGES/firefox-logo-2014-vertical-4sts.jpg');
       }
    else {
        myImage.setAttribute('src','IMAGES/Firefox_logo,_2019.svg.png');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Mozilla is cool, ' + myName;
  }
}

myButton.onclick = function () {
    setUserName();
}