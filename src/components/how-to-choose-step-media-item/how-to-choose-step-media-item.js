(function(){

    StartApp.directive('mediaItem', function(){
            return{
                restrict   : 'AECM',
                templateUrl:'components/how-to-choose-step-media-item/how-to-choose-step-media-item.html',
                controller : function($scope){
                    console.log('controller mediaItem');
                    $scope.mediaObj = {
                        "img"    : "../img/media-obj.jpg",
                        "title"  : "Mountain Bikes",
                        "text"   : "Mountain Bikes. Mountain bikes are ideal for trail and path enthusiasts. These bikes feature a front suspension that forces the front wheels to maintain contact with the path and absorb vibrations.",
                        "seeAll" : "SEE ALL MOUNTAIN BIKES"
                    }

                }
            }
        })

})();