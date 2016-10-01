SiemApp.controller('SiemAppWelcome', function($scope, SiemAuth, $state) {

    $scope.links = [];

    $scope.vm = {};
    $scope.vm.loading = true;

    SiemAuth.checkLogin(function(loggedin) {

        if(!loggedin) {
            $state.go('auth');
            return;
        }

        $scope.vm.loading = false;

        var j = 1;
        for(var i in SiemAuth.User.frames) if(SiemAuth.User.frames.hasOwnProperty(i)) {
            $scope.links.push({title: i, url: SiemAuth.User.frames[i], id: 'link' + j});
            j++;
        }

        $scope.$$phase || $scope.$apply();
    });
});