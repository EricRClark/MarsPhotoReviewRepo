angular
    .module('mars')
    .controller('HomeController', function($scope) {


    })


.controller('MarsPicController', function($scope, MarsPicService) {
    $scope.date = '';
    $scope.name = '';
    $scope.img = '';

    $scope.getMarsPicCtrl = function(photo) {
        console.log("Boom!");
        MarsPicService.getMarsPic(photo)
          .then(function(photo) {
            console.log(photo);
            $scope.photo = MarsPicService.randoMarPhoto(photo.data.photos);
                
            $scope.date = $scope.photo.earth_date;
            $scope.name = $scope.photo.camera.full_name
            $scope.img = $scope.photo.img_src
          })
   }
}
)
