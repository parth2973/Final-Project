(function() {
    "use strict";
    var app = angular.module("employeeManagement",
        ["common.services",
            "ui.router",
            "ui.mask",
            "ui.bootstrap",
         "employeeResourceMock"]);

    app.config(["$stateProvider",
                "$urlRouterProvider",
                    function($stateProvider,$urlRouterProvider){
                        console.log($urlRouterProvider);
                        $urlRouterProvider.otherwise("/");


                        $stateProvider

                            .state("home",{
                                url:"/",
                                templateUrl:"app/mainView.html"

                            })
                            .state("emplList",{
                                url:"/personaldetails",
                                templateUrl:"app/personaldetails/emplListView.html",
                                controller: "EmployeeListController as vm"
                            })
                            .state("emplEdit",{
                                abstract:true,
                                url:"/personaldetails/edit/:emplId",
                                templateUrl:"app/personaldetails/emplEditView.html",
                                controller: "EmployeeEditController as vm",
                                resolve:{
                                    employeeResource :"employeeResource", //defining dependency, key name can be any name
                                    employee: function(employeeResource,$stateParams) {

                                        var emplId = $stateParams.emplId;
                                        return employeeResource.get({emplId: emplId}).$promise;
                                    }
                                }

                            })
                            .state("emplEdit.personal",{
                                url:"/personal",
                                templateUrl:"app/personaldetails/emplEditPersonalView.html"

                            })
                            .state("emplEdit.salary",{
                                url:"/salary",
                                templateUrl:"app/personaldetails/emplEditSalaryView.html"

                            })

                            .state("emplDetail",{
                                url:"/personaldetails/:emplId",
                                templateUrl:"app/personaldetails/emplDetailsView.html",
                                controller: "EmployeeDetailController as vm", //Once resolve returned success, controller created
                                resolve:{
                                    employeeResource :"employeeResource", //defining dependency, key name can be any name
                                    employee: function(employeeResource,$stateParams) {

                                        var emplId = $stateParams.emplId;
                                        return employeeResource.get({emplId: emplId}).$promise;
                                    }
                                }
                            })
                    }]

    );

}());
