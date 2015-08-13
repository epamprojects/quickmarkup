(function(){
    StartApp.directive('mediaItemCollection', function(){

        return{
            restrict : 'AECM',
            templateUrl:'components/how-to-choose-step-media-collection-item/how-to-choose-step-media-collection-item.html',
            controller : function($scope){
                console.log('controller mediaItemCollection');
                $scope.mediaItemCollection = [
                    {
                        "img"   : "img/col-item-img.jpg",
                        "title" : "title1"
                    },
                    {
                        "img"   : "img/col-item-img.jpg",
                        "title" : "title2"
                    },
                    {
                        "img"   : "img/col-item-img.jpg",
                        "title" : "title3"
                    },
                    {
                        "img"   : "img/col-item-img.jpg",
                        "title" : "title4"
                    },
                    {
                        "img"   : "img/col-item-img.jpg",
                        "title" : "title5"
                    },
                    {
                        "img"   : "img/col-item-img.jpg",
                        "title" : "title6"
                    }

                ]
            }
        }
    })
}());