var app = angular.module('AbbyIntroduction', []);

app.controller('GreetCtrl', ['$scope', function($scope){
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

app.controller('collectionsCtrl', ['$scope', function($scope){
  $scope.showsec = {'section1': false, 'section2': false, 'section3': false, 'section4': false, 'section5': false, 'section6': false}
  $scope.togsec = function(sec){
    $scope.showsec[sec] = !$scope.showsec[sec];
  };
}]);

app.controller('questionsCtrl', function($scope) {
  $scope.totalquestions = "questions";

  $scope.questions = [
  //   {text:'What is the date today?', done:false},
  //   {text:'How is the weather today?', done:false},
    {text:'Do you drink coffee or tea?', done:false}
  ];

  $scope.getTotalquestions = function () {
    return $scope.questions.length;
  };

  $scope.clearQuestion = function () {
    $scope.questions = _.filter($scope.questions, function(question){
      return !question.done;
    })
  };

  $scope.addQuestion = function() {
    $scope.questions.push({text:$scope.formquestionText, done:false});
    $scope.formquestionText = '';
  };
})

