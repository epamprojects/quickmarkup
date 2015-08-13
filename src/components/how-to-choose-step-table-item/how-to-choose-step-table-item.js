(function(){
    StartApp.directive('tableItem', function(){
            return{
                restrict : 'AECM',
                templateUrl:'components/how-to-choose-step-table-item/how-to-choose-step-table-item.html',
                controller : function($scope){
                    console.log('controller tableItem');
                    $scope.tableItemObj = {
                        "title"              : "adult Bike sizing",
                        /*"title"              : "adult Bike sizing adult Bike sizing",*/
                        "comparedQuantities" : [
                            {
                                "name"   : "Leg Inseam",
                                "values" : [1,2,3]
                            },

                            {
                                "name"   : "Heigt",
                                "values" : [1,2,3]
                            },

                            {
                                "name"   : "Frame size",
                                "values" : [1,2,3]
                            }
                        ]
                    }
                }
            }
        })
})();