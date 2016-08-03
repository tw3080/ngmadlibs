/*
TODO: make gender other by default?
*/

angular.module('app', [])
    .controller('MainCtrl', function() {
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
