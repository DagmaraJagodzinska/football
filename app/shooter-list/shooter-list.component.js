(function() {
    'use strict';

angular
.module('shooterList')
  .component('shooterList', {
    templateUrl: 'shooter-list/shooter-list.template.html',
    controllerAs: "vm",
    controller: function ($http){
        var vm = this;
            
        $http({
            method: 'GET',
            url : "https://sportsop-soccer-sports-open-data-v1.p.mashape.com/v1/leagues/serie-a/seasons/15-16/topscorers",
            headers: { "X-Mashape-Key": "kxSXmUymofmshFHhhKxWOSJpqJsJp1I3zNnjsnqKwhITAiC1zw"}

        }).then(function successCallback(data) {
            vm.myData = data.data.data.topscorers;
        }, function errorCallback(response) {
            console.log('We don\'t have a data');
        });
     }
  });
})();
