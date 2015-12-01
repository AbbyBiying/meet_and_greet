app.controller('greetCtrl', ['$scope', function($scope){
  $scope.name = "";
  $scope.usernote = "";

  $scope.greeting = function(){
    if($scope.name.length > 0){
      $scope.greet = "Nice to see you here " + $scope.name + "!";
    } else {
      alert("Please type your name!");
    }

    $scope.name = "";
  };

  $scope.note = function(){
    if($scope.usernote.length > 0){
      $scope.notebody = "Your note: " + $scope.usernote;
    } else {
      alert("Please type your note!");
    }
    $scope.usernote = "";
  };
}]);
