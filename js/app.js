angular.module('app', []).controller('MainCtrl', function($scope) {
        var vm = this;

        /* TODO: Is making formData/genderText an empty object best practice? Originally I had initialized each key-value pair to something blank, but it seemed better to just dynamically create them thru angular rather than initialize ALL of them?
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

        vm.showMadLib = false;

        vm.submit = function() {
            if ($scope.madLibForm.$valid) {
                vm.showMadLib = true;
            } else {
                console.log('The form is invalid');
            }
            /* TODO: DIDN'T WORK; why? Had to replace vm with $scope,
            and add $scope as a parameter of the controller itself

            vm.submit = function() {
                if (vm.madLibForm.$valid) {
                    console.log('The form is valid');
                } else {
                    console.log('The form is invalid');
                }
            };
            */
        };

        // Resets scope variables and returns form to pristine state
        vm.resetForm = function() {
            vm.showMadLib = false;
            vm.formData = {};
            /* TODO: How do I reset the gender radio buttons to default back to female? Resetting genderText to anything just causes all the radio buttons to be unchecked */
            /*
            vm.genderText = {};
            vm.genderText = 'female';
            vm.genderText.subjectPronoun = 'she';
            vm.genderText.objectPronoun = 'her';
            vm.genderText.possessivePronoun = 'her';
            */
            $scope.madLibForm.$setPristine();
        };
});
