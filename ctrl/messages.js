app.controller('messagesCtrl', ['$scope', function($scope) {
  $scope.messages = [{title:'the color', body:"I like the intense color you use"}];
  $scope.addMessage = function() {
    $scope.messages.push({title:$scope.titleText, body:$scope.bodyText});
    $scope.bodyText = '';
    $scope.titleText = '';
  };
  $scope.body = "";
  $scope.title ="";
}]);
