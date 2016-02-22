var myApp = angular.module('MyApp', []);
myApp.filter('reverse', [function(){
    return function(string){
        return string.split('').reverse().join('');
    }
}]);