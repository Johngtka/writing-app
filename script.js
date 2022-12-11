var app = angular.module("myApp", []);
app.controller("myCtrl", function ($scope) {
    $scope.first = "Hello World!"
    $scope.desc = "Write Something"
    $scope.text = "Your text is writing here :-)"
})
const hide = document.getElementById("a")
function conv() {
    hide.classList.add("printhide")
    window.print();
}
function unhide() {
    hide.classList.remove("printhide")
}