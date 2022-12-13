var app = angular.module('myApp', []);

app.controller('myCtrl', function ($scope) {
    /*Variables after the period are assigned to function arguments and are called in index */
    $scope.title = 'Text to PDF Saver!'
    $scope.desc = 'Write Something'
    $scope.text = 'Your text is writing here :-)'
    $scope.info = 'To contact with us, write an email to:'
    $scope.mail = '<a href="mailto: example@gmail.com"> example@gmail.com</a>'
    //Function to show contact info in footer
    function contact() {
        var element = document.querySelector('#info')
        element.innerHTML = $scope.info + $scope.mail
    }
    //call the function
    contact()
})
//initiali the error message with responsive separate messages under pc and phones
const Err = '<div id="err" class="errmsg">Error: <span id="pc">Check the console</span><span id="mobile">You must write something</span></div>'
// the handler to main container with all part off the app
const app_Err = document.querySelector("#content")
// the handler to return button which is hidden on the start of page
const returnBTN = document.querySelector('#btn')
returnBTN.style.display = 'none'
//The handlers to left and right side of page
const hiden_element = document.querySelector('#left')
const text_element = document.querySelector('#right')
// handler to textarea
const text_Space = document.querySelector('#enter')
//Function to hide the left side of the page and print the screen along with the corresponding page view
function conv() {
    // A condition that checks if there is any value in the textarea
    if (text_Space.value) {
        hiden_element.classList.add('printhide')
        text_element.style.width = '100%'
        returnBTN.style.display = 'block'
        returnBTN.classList.add('backbtn')
        window.print()
    } else {
        // opposite
        app_Err.insertAdjacentHTML('afterend', Err)
        const hide_Msg = document.querySelector("#err")
        let msg = "You must write something"
        for(let i=0; i<=10; i++){
         console.log(msg)
        }
        setTimeout(() => {
            hide_Msg.style.display = 'none'
        }, 5000)
    }
}
//Function to show the original view of the page
function unhide() {
    hiden_element.classList.remove('printhide')
    window.location.reload()
}
