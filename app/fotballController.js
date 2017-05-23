app.controller("fotballController", function($scope,$http){
    $http({
      method: 'GET',
      url : "https://sportsop-soccer-sports-open-data-v1.p.mashape.com/v1/leagues/serie-a/seasons/15-16/topscorers",
      headers: { "X-Mashape-Key": "kxSXmUymofmshFHhhKxWOSJpqJsJp1I3zNnjsnqKwhITAiC1zw"}

    }).then(function successCallback(data) {
        $scope.myData = data.data.data.topscorers;
        console.log($scope.myData);
      }, function errorCallback(response) {
          $scope.myData = response.statusText;
      });
});