//initialize the error message with responsive separate messages under pc and phones
const Err = '<div id="err" class="errmsg">Error: <span id="pc">Check the console</span><span id="mobile">You must write something</span></div>'
//The handlers to left and right side of page
const left_element = document.querySelector('#left')
const right_element = document.querySelector('#right')
//handler to return button
const returnBTN = document.querySelector('#btn')
// hide the return button at start off app
returnBTN.style.display = 'none'
// handler to textarea
const text_Space = document.querySelector('#enter')
// handler to container where must to show the number off signs in textarea
const tex_len = document.querySelector('#txt-len')
// handler to space of showing text when you write
const your_txt = document.querySelector('#test')
// handler to print button
const printBTN = document.querySelector('#print')
// the state variable(functioinal expression) with Anonymous function which return the nuber off signs in textarea 
const kalkulator = function (x) {
    return x
}
const app = angular.module('myApp', []);
app.controller('myCtrl', function ($scope) {
    // Variables after the period are store the text informations and are assigned to function $scope parameter and are called in index
    $scope.title = 'Text to PDF Saver!'
    $scope.desc = 'Write Something'
    $scope.text = 'Your text is writing here :-)'
    $scope.info = 'To contact with us, write an email to:'
    $scope.mail = '<a href="mailto: example@gmail.com"> example@gmail.com</a>'
    // the onload method off window object is calling at first time, the timing off the function set to real automatic changes with called the contact() and tl() functions  
    window.onload = () => {
        setInterval(tl, 1)
        tl()
        contact()
    }
    // function to show contact info in footer
    function contact() {
        // handler to footer in app
        const element = document.querySelector('#info')
        element.innerHTML = $scope.info + $scope.mail
    }
    // function to counting the number off signs in textarea 
    function tl() {
        // download the value from textarea
        let v = text_Space.value
        // remove from v white signs
        v = v.trim()
        // get the length from v
        v = v.length
        // send the twice processed value as parameter off anonymous function in state variable kalkulator
        let text = kalkulator(v)
        // add to angular variable assigned to $scope parameter off angular controller function, the html replacement with number off signs who is called in index
        $scope.len = tex_len.innerHTML = 'Your text have: ' + text + ' signs'
    }
})
//function to hide the left side off the page and print the screen along with the corresponding page view
function conv() {
    // A condition that checks if there is any value in the textarea
    if (text_Space.value) {
        // turn off the container with number of signs and print button
        tex_len.style.display = 'none'
        printBTN.style.display = 'none'
        // hide the left side of app
        left_element.classList.add('printhide')
        right_element.style.width = '100%'
        right_element.style.height = '100vh'
        // turn on the return button
        returnBTN.style.display = 'block'
        // centering the return button
        returnBTN.classList.add('backbtn')
        // make a printscreen method on all off the app
        your_txt.classList.add('test1')
        window.print()
    } else {
        // opposite
        right_element.insertAdjacentHTML('beforeend', Err)
        // handler to container with error message
        const hide_Msg = document.querySelector("#err")
        let msg = "You must write something"
        console.log(msg)
        // turn off the error message in range 5 seconds
        setTimeout(() => {
            hide_Msg.style.display = 'none'
        }, 5000)
    }
}
//Function to show the original view off the page
function unhide() {
    // turn on the left side off app
    left_element.classList.remove('printhide')
    // make reload method on app
    window.location.reload()
}
