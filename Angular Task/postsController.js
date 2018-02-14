var postAppModule = angular.module("postApp", []);

postAppModule.controller("postCtrl", function ($scope,$http) {

    //reading posts from web service
    $http.get('https://jsonplaceholder.typicode.com/posts')
    .success(function(data){
        $scope.posts = data;
    })
    .error(function(data,status){
       console.error('Fail to load data', status, data);
       $scope.posts = { }; 
    });

});