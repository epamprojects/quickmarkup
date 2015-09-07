(function(){

    StartApp.directive('example', function(){
            return{
                restrict : 'AECM',
                templateUrl:'components/example/example.html',
                controller : function($scope){
                    console.log('example');

                }
            }
        })

})();