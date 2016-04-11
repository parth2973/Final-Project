(function(){
   "use strict";

    angular
        .module("employeeManagement")
        .controller("EmployeeDetailController",["employee",EmployeeDetailController]);
    function EmployeeDetailController(employee){

        var vm=this;
        vm.employee =  employee;
        vm.title="Employee Details" + vm.employee.ename;
        /*if(vm.employee.tags){
            vm.employee.tagList = vm.employee.tags.toString();
        }*/
    }
}());
