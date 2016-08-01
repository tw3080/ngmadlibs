angular.module('app', [])
    .controller('MadLibCtrl', function($scope) {
        $scope.femaleName = '{{ female name }}';
        $scope.jobTitle = '{{ job title }}';
        $scope.tediousTask = '{{ tedious task }}';
        $scope.dirtyTask = '{{ dirty task }}';
        $scope.celebrity = '{{ celebrity }}';
        $scope.uselessSkill = '{{ useless skill }}';
        $scope.obnoxiousCelebrity = '{{ obnoxious celebrity }}';
        $scope.hugeNumber = '{{ huge number }}';
        $scope.adjective = '{{ adjective }}';
    });
