var app = angular.module("myApp", []);

app.controller("myCtrl", function ($scope) {
    $scope.first = "Text to PDF Saver!"
    $scope.desc = "Write Something"
    $scope.text = "Your text is writing here :-)"
    $scope.info = 'To contact with us, write an email to:'
    $scope.mail = '<a href="mailto: example@gmail.com">example@gmail.com</a>'
//function to show on UI(user interface) information about contact
    function contact() {
        var element = document.getElementById("info")
        element.innerHTML = $scope.info + $scope.mail
    }
    //call the function
    contact()
}) 
//handler to button and turn off his visibility
const btn = document.getElementById("btn")
btn.style.display = "none"
//The handlers to left and right side of page
const hide = document.getElementById("a")
const text = document.getElementById("conv")
//function to painting window with a simple view
function conv() {
    hide.classList.add("printhide")
    text.style.width = "100%"
    btn.style.display = "block"
    btn.classList.add("backbtn")
    window.print();
}
//function to show the primery view of page
function unhide() {
    hide.classList.remove("printhide")
    window.location.reload()
}
