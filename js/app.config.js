app.config(function($routeProvider){
  $routeProvider
    .when('/', {templateUrl: 'content/home.html', controller: 'postsCtrl'})
    .when('/comments/:id', {templateUrl: 'content/comments.html', controller: 'commentsCtrl'})
    .otherwise({redirectTo: '/'});
});

//
// template de configuration
// app.config(function($routeProvider) {
//     $routeProvider
//     .when("/", {
//         templateUrl : "main.htm"
//     })
//     .when("/red", {
//         templateUrl : "red.htm"
//     })
//     .when("/green", {
//         templateUrl : "green.htm"
//     })
//     .when("/blue", {
//         templateUrl : "blue.htm"
//     });
// });
