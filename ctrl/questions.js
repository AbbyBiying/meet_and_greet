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
});
