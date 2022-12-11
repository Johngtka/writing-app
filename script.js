var app = angular.module("myApp", []);

app.controller("myCtrl", function ($scope) {
    $scope.first = "Text to PDF Saver!"
    $scope.desc = "Write Something"
    $scope.text = "Your text is writing here :-)"
    $scope.info = 'To contact with us, write an email to:';
    $scope.mail = '<a href="#">example@gmail.com</a>'
    function concat() {
        var element = document.getElementById("info")
        element.innerHTML = $scope.info + $scope.mail;
    }
    concat();
})
const hide = document.getElementById("a")
function conv() {
    hide.classList.add("printhide")
    window.print();
}
function unhide() {
    hide.classList.remove("printhide")
}