var app = angular.module("myApp", []);
app.controller("myCtrl", function ($scope) {
    $scope.first = "Hello World!"
    $scope.desc = "Write Something"
    $scope.text = "Your text is writing here :-)"
})
function conv() {
    const hide = document.getElementById("a");
    hide.classList.add("printhide");
    const hide1 = document.getElementById("info")
    hide1.style.display = "none"
    window.print()
}