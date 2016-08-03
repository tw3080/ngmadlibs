/*
TODO: make gender other by default?
*/

angular.module('app', [])
    .controller('MainCtrl', function($scope) {
        var vm = this;

        /* TODO: Is making formData an empty object best practice?
            Originally I had initialized each key-value pair to something
            blank, but it seemed better to just dynamically create them
            thru angular rather than initialize ALL of them?
        */
        vm.formData = {};
        vm.genderText = {
            /*
            female: {
                subjectPronoun: 'she',
                objectPronoun: 'her',
                possessivePronoun: 'her'
            },
            male: {
                subjectPronoun: 'he',
                objectPronoun: 'him',
                possessivePronoun: 'his'
            },
            other: {
                subjectPronoun: 'they',
                objectPronoun: 'them',
                possessivePronoun: 'their'
            }
            */
        };

        vm.submit = function() {
            if ($scope.madLibForm.$valid) {
                console.log('The form is valid');
            } else {
                console.log('The form is invalid');
            }
        };

        /* TODO: DIDN'T WORK; why? Had to replace vm with $scope,
        and add $scope as a parameter of the controller

        vm.submit = function() {
            if (vm.madLibForm.$valid) {
                console.log('The form is valid');
            } else {
                console.log('The form is invalid');
            }
        };
        */

        /* TODO: Not sure how to get it to switch between the pronouns
        */
});
