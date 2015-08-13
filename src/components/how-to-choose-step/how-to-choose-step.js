(function(){
    StartApp.directive('step', function(){
            return{
                restrict : 'AECM',
                templateUrl:'components/how-to-choose-step/how-to-choose-step.html',
                controller : function($scope){
                    console.log('controller Step');
                    $scope.stepObj = {
                        "stepNumber" : "1",
                        "stepTitle"  : "Choose the type of bike you are looking for"
                    }
                }
            }
        })

})();