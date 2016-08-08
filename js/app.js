angular.module('app', ['ngAnimate']).controller('MainCtrl', function($scope) {
    var vm = this;

    // Form data from user input
    vm.formData = {};
    vm.genderText = {};

    // If true, mad lib will show; if false, it's hidden
    vm.showMadLib = false;
    // Display error message if true; if false, form is submitted
    vm.formIncomplete = false;

    // Submit form
    vm.submit = function() {
        // If the form is valid, show the mad lib
        if ($scope.madLibForm.$valid) {
            vm.showMadLib = true;
        // Else, display error message
        } else {
            vm.formIncomplete = true;
        }
    };

    // Resets scope variables and returns form to pristine state
    vm.resetForm = function() {
        vm.showMadLib = false;
        vm.formIncomplete = false;
        vm.formData = {};
        vm.genderText = 'female';
        $scope.genderText.subjectPronoun = 'she';
        $scope.genderText.objectPronoun = 'her';
        $scope.genderText.possessivePronoun = 'her';
        $scope.madLibForm.$setPristine();
    };
});
