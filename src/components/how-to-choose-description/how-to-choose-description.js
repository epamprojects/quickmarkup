(function(){

    StartApp.directive('description', function(){
            return{
                restrict : 'AECM',
                templateUrl:'components/how-to-choose-description/how-to-choose-description.html',
                controller : function($scope){
                    console.log('controller description');
                    $scope.descObj={
                        "img"    : "img",
                        "title"  : "HOw to choose a bike",
                        "text"   : "Bike riding provides a great way to enjoy time with your family while getting some exercise, and it's also an environmentally- friendly way to get around. Canadian Tire is Canada's top bicycle retailer. We've got a variety of brands and models to suit every rider. We'll help you find one that's right for you.",
                        "button" : "EMAIL THIS PROJECT"
                    }
                }
            }
        })

})();