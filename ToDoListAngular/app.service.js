angular
    .module('mars')
    .service('MarsPicService', function($http) {

function getMarsPic(img) {
  return $http.get('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=rhfgYnDVG0S0Y3TtU5ZHalFcQSewjdNktIiv60HW')
}


function randoMarPhoto (photos) {
    return photos[Math.floor(Math.random() * photos.length)];
}

 return {

   getMarsPic: getMarsPic,
   randoMarPhoto: randoMarPhoto

        }
    })
