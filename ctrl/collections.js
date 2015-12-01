app.controller('collectionsCtrl', ['$scope', function($scope){
  $scope.showsec = {'section1': false, 'section2': false, 'section3': false, 'section4': false, 'section5': false, 'section6': false}
  $scope.togsec = function(sec){
    $scope.showsec[sec] = !$scope.showsec[sec];
  };
  $scope.bio = "A curiosity-driven web developer with an interest in art, design, technology and culture, I am passionate about writing clean code and I am committed to finding solutions to complex problems. I like swimming and playing basketball. I speak, write and read Cantonese, Mandarin and English. I also make paintings, videos, sound art and design. My favorite movies are Terminator 2: Judgment Day, Star Wars, and The Matrix.";
  $scope.abz = "ABZ-Exchange, built with Ruby on Rails, JavaScript, and PostgreSQL";
  $scope.oa = "Open Assembly, built with Ruby with AngularJS on Rails, and Neo4j";
  $scope.backend = "Ruby (Rails, Sinatra)";
  $scope.frontend = "JavaScript, AngularJS, Sass, jQuery, Responsive, Bootstrap";
  $scope.database = "Neo4j, PostgreSQL, MongoDB";
  $scope.others = "Cucumber, RSpec, Capybara, SimpleCov, Amazon Web Services (AWS), TDD/BDD, regex, Git, GitHub, Photoshop, Illustrator, After Effects, Final Cut Pro, and Pro Tools.";

}]);
