/*
TODO: make gender other by default?
*/

angular.module('app', [])
    .controller('MainCtrl', function($scope) {
        var vm = this;
        vm.personName = '{{ name }}';
        vm.jobTitle = '{{ job title }}';
        vm.tediousTask = '{{ tedious task }}';
        vm.dirtyTask = '{{ dirty task }}';
        vm.celebrity = '{{ celebrity }}';
        vm.uselessSkill = '{{ useless skill }}';
        vm.obnoxiousCelebrity = '{{ obnoxious celebrity }}';
        vm.hugeNumber = '{{ huge number }}';
        vm.adjective = '{{ adjective }}';
        vm.genderText = '';
        vm.showMadLib = false;
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

        /*{
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
        };
        */
});
