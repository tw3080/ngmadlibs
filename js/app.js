/*
TODO: make gender female by default?
*/

angular.module('app', [])
    .controller('MadLibCtrl', function($scope) {
        $scope.personName = '{{ name }}';
        $scope.jobTitle = '{{ job title }}';
        $scope.tediousTask = '{{ tedious task }}';
        $scope.dirtyTask = '{{ dirty task }}';
        $scope.celebrity = '{{ celebrity }}';
        $scope.uselessSkill = '{{ useless skill }}';
        $scope.obnoxiousCelebrity = '{{ obnoxious celebrity }}';
        $scope.hugeNumber = '{{ huge number }}';
        $scope.adjective = '{{ adjective }}';
        $scope.genderText = {
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
    });
