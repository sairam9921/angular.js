/**
 * Created by SAIRAM9921 on 11-Dec-16.
 */
angular.module('directiveApp').directive('required',function () {
    return function ($scope,element) {
        $(element).parents("tr").children(":nth-child(1)").children("label").append("<span style='color:red;'><strong>&nbsp;*</strong></span>");


    };

})
.directive('bold',function () {
    return function ($scope,element) {
        var innerText = $(element).text();
        $(element).html("<b >"+innerText+"</b>");

    }
    });
