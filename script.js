var app = angular.module("myApp", []);

app.controller("myCtrl", function ($scope) {
    $scope.first = "Text to PDF Saver!"
    $scope.desc = "Write Something"
    $scope.text = "Your text is writing here :-)"
    $scope.info = 'To contact with us, write an email to:'
    $scope.mail = '<a href="#">example@gmail.com</a>'
    function contact() {
        var element = document.getElementById("info")
        element.innerHTML = $scope.info + $scope.mail;
    }
    contact();
})
const btn = document.getElementById("btn")
btn.style.display = "none"
const hide = document.getElementById("a")
const text = document.getElementById("conv")
function conv() {
    hide.classList.add("printhide")
    text.style.width = "100%"
    btn.style.display = "block"
    btn.classList.add("backbtn")
    window.print();
}
function unhide() {
    hide.classList.remove("printhide")
    window.location.reload()
}