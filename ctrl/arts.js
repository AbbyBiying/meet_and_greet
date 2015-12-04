app.controller('artsCtrl', ['$scope', '$http', '$log', function($scope,$http,$log) {
  $scope.showmaterial = {'artiststatement': false, 'review': false};
  $scope.statement = "I am interested in the ways that history and personal memory intersect in visual narratives. I paint pictures of emotional situations. My paintings explore a zone that fuses familiar landscapes with a sense of alienation. My paintings explore loss, displacement, and anxiety. I paint landscapes and cityscapes with mattresses as a central theme. In my work, the mattresses become characters with personal memory and a social history. They are set in public and private worlds simultaneously. The beds are sometimes placed in front of old temples, sculptures, demolished machines, highways and sewage tunnels. It's my hope that the viewer can identify with the mattresses as though they were living beings. The beds are fragile and must make their way through a landscape of threatening events. In several paintings, the beds appear as if they were pulled from a private bedroom and exposed to the freezing night highway. I am interested in the relationship between comfort, despair, and purpose. I hope the audience can relate to my work while considering their own experience and values. I hope my work can be a starting point for discussion about who we are and how we fit into a world that is forever entangled in conflict, contrast, comfort, despair, and an enduring hope for the future.";
  $scope.cv = "ABZ_CV.pdf";
  $scope.paintings = [];

  $scope.togmaterial = function(material){
    $scope.showmaterial[material] = !$scope.showmaterial[material];
  };

  $scope.showart = function(){
    $http.get('paintings.json').success(function(data, status, headers, config){
      console.log(data);
      $scope.paintings = data.paintings;
      // debugger
    });
  };

  $scope.addReview = function(painting) {
    painting.reviews.push($scope.review);
    $scope.review = {};
  };
}]);
