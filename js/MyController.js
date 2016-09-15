

var  application =  angular.module('MyRegistrationLetter',[]);

application.controller('RegistrationController', function($scope){
    $scope.firstName = "Jackson";
    $scope.middleNames = "Lumaar";
    $scope.surname = "Nadia";
    $scope.sender = "Senior Web Developer"
});