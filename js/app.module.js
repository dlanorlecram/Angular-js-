
var app = angular.module('myApp', ['ngRoute']);
//création d'un service pour lier des donnée entre deux controller
app.factory('postFactory',function(){
  var factory = {
    posts:[
      {
        "id": 0,
        "name": "Pulze",
        "content": "Est laboris in quis magna Lorem sunt deserunt nulla culpa. In irure eu mollit elit id commodo quis eu ut quis officia ullamco. Exercitation eiusmod deserunt officia aliquip ipsum eiusmod deserunt aliqua et anim. Labore ea elit nisi magna duis officia aliqua adipisicing officia pariatur esse. Mollit irure tempor occaecat aute est Lorem.",
        "comments": [
          {
            "username": "Porter",
            "city": "Websterville",
            "email": "porterjames@pulze.com",
            "content": "Esse commodo minim consectetur nisi dolore id eiusmod ex laboris ut officia dolore mollit. Aliqua laborum ad amet irure est sit duis labore laborum fugiat id nostrud officia. Ut non duis ullamco tempor consectetur ut proident."
          }
        ]
      },
      {
        "id": 1,
        "name": "Geeknet",
        "content": "Officia incididunt Lorem aliqua nostrud nisi est minim Lorem. Ad proident laborum reprehenderit et do duis. Veniam amet irure fugiat occaecat eiusmod consectetur mollit ullamco sunt adipisicing dolor. In tempor esse occaecat laboris ea ullamco ad proident proident id aliqua proident velit. Deserunt nostrud elit velit sit sint culpa deserunt eu aliqua culpa amet.",
        "comments": [
          {
            "username": "Lambert",
            "city": "Canoochee",
            "email": "lambertjames@geeknet.com",
            "content": "Veniam cupidatat nostrud adipisicing in nisi. Sit magna laborum culpa commodo adipisicing ex aliquip esse. Laborum mollit dolore occaecat aliqua proident amet."
          },
          {
            "username": "Frances",
            "city": "Cavalero",
            "email": "francesjames@geeknet.com",
            "content": "Ipsum Lorem irure cillum velit consequat occaecat nisi adipisicing ad officia veniam adipisicing cillum. Nisi aliqua consequat sunt deserunt sit tempor est. Labore adipisicing est elit aute culpa in enim sint officia eu irure veniam."
          }
        ]
      },
      {
        "id": 2,
        "name": "Bittor",
        "content": "Minim aute in minim quis cupidatat reprehenderit dolor eu exercitation exercitation anim. Reprehenderit sint dolor excepteur Lorem voluptate quis quis eiusmod esse irure ex eiusmod id. Nostrud aliqua velit consectetur aliqua irure duis tempor. Occaecat enim excepteur ad ex sunt esse dolore mollit eu. Mollit nostrud Lorem velit non.",
        "comments": [
          {
            "username": "Berger",
            "city": "Jackpot",
            "email": "bergerjames@bittor.com",
            "content": "Anim et non aliquip qui aliqua proident pariatur sunt culpa ea dolor. Officia anim ex elit sit do. Consequat eiusmod esse eu ut ullamco sint."
          },
          {
            "username": "Burnett",
            "city": "Delco",
            "email": "burnettjames@bittor.com",
            "content": "Ea adipisicing et velit reprehenderit. Occaecat est nostrud exercitation do magna sint adipisicing non Lorem cupidatat quis aliqua. Qui dolor irure excepteur enim in magna adipisicing id."
          },
          {
            "username": "Copeland",
            "city": "Townsend",
            "email": "copelandjames@bittor.com",
            "content": "Magna laboris culpa incididunt exercitation officia cupidatat deserunt esse sunt occaecat qui voluptate. Exercitation mollit laborum dolore est excepteur pariatur est. Id magna id elit nulla commodo nostrud veniam pariatur pariatur occaecat laborum."
          }
        ]
      },
      {
        "id": 3,
        "name": "Fossiel",
        "content": "Velit commodo sunt incididunt et anim ad aute officia ipsum occaecat. Excepteur ea laboris aliquip labore tempor. Non aliqua aliquip sint nisi magna in velit. Lorem mollit enim minim sint nostrud consectetur ullamco. Aliqua exercitation aute veniam ea.",
        "comments": [
          {
            "username": "Ina",
            "city": "Berwind",
            "email": "inajames@fossiel.com",
            "content": "Est sunt ipsum incididunt quis nisi cillum pariatur. Dolore magna sunt eu fugiat ullamco laboris fugiat consectetur do pariatur ullamco minim. Id sunt occaecat enim ea irure adipisicing excepteur."
          }
        ]
      },
      {
        "id": 4,
        "name": "Concility",
        "content": "Deserunt id duis consectetur ipsum aliqua et in. Id ut aute ea sunt officia pariatur ullamco pariatur. Cillum consequat ipsum consectetur et aute amet voluptate. Excepteur adipisicing pariatur ea exercitation. Dolor nisi qui occaecat aliqua ullamco occaecat eu excepteur et.",
        "comments": [
          {
            "username": "Noelle",
            "city": "Emory",
            "email": "noellejames@concility.com",
            "content": "Dolore esse ex cillum consectetur enim non minim laboris aliqua consequat ea. Deserunt duis ullamco est in. Quis cupidatat minim commodo enim reprehenderit duis irure duis consequat amet ullamco reprehenderit commodo commodo."
          },
          {
            "username": "Mavis",
            "city": "Lawrence",
            "email": "mavisjames@concility.com",
            "content": "Lorem nisi ad ex dolor in esse et. Fugiat id velit laboris reprehenderit cupidatat est quis aute enim ea. Ea consectetur excepteur quis reprehenderit laborum laborum nostrud sunt ipsum commodo consequat qui."
          }
        ]
      },
      {
        "id": 5,
        "name": "Zilodyne",
        "content": "Do veniam aliquip do sint esse veniam laborum. Minim ea qui sunt laboris proident ex commodo cillum enim enim nulla incididunt ad amet. Sunt laborum sunt dolore culpa proident pariatur voluptate qui aliqua adipisicing excepteur cillum aute. Proident non duis adipisicing excepteur. Anim veniam qui fugiat cupidatat excepteur eiusmod in ad incididunt magna.",
        "comments": [
          {
            "username": "Effie",
            "city": "Brutus",
            "email": "effiejames@zilodyne.com",
            "content": "Qui eiusmod amet aliqua ullamco veniam non et excepteur sit. Est quis et eiusmod fugiat minim occaecat aute mollit ea. Velit ipsum excepteur commodo deserunt sunt reprehenderit non labore culpa."
          },
          {
            "username": "Lorena",
            "city": "Baden",
            "email": "lorenajames@zilodyne.com",
            "content": "Excepteur fugiat sint nostrud do ex amet amet. Ex fugiat exercitation amet ut consequat exercitation ad fugiat duis fugiat mollit sint nostrud. Voluptate do ex magna do velit eiusmod Lorem esse adipisicing."
          },
          {
            "username": "Carole",
            "city": "Ola",
            "email": "adelinejames@zilodyne.com",
            "content": "Lorem ad aliquip sit voluptate ullamco laboris consectetur aliqua ipsum. Enim ex officia do tempor Lorem in cupidatat consectetur proident nisi consectetur adipisicing ipsum dolor. Aute veniam nostrud ad reprehenderit ipsum anim id sit labore esse dolore officia eu."
          }
        ]
      }
    ],
    Get_posts: function(){
      return factory.posts;
    },
    Get_post: function(id){
      var post = {};
      angular.forEach(factory.posts,function(value, key){
        console.log('value id' + value.id)
        console.log('id' + id)
          if(value.id == id){
            post = value
          }
      });
      return post;
    },
  }
  return factory;
})

// controller to manage posts
app.controller('postsCtrl', function($scope, postFactory){
  $scope.posts = postFactory.Get_posts();
});
// controller to manage comments
app.controller('commentsCtrl', function($scope, postFactory, $routeParams){
  console.log($routeParams);
  $scope.comments = postFactory.Get_post().comments;
});
  // $scope.comments = [
  //         {
  //           username: 'Bob',
  //           content: 'lorem loremloremloremloremlorem ',
  //           date: '28 mars'
  //         },
  //         {
  //           username: 'Rocky',
  //           content: 'lorem loremloremloremloremlorem ',
  //           date: '28 mars'
  //         },
  //         {
  //           username: 'Django',
  //           content: 'lorem loremloremloremloremlorem ',
  //           date: '28 mars'
  //         },
  //         {
  //           username: 'Rogers',
  //           content: 'lorem loremloremloremloremlorem ',
  //           date: '28 mars'
  //         }
  //       ];
  //});
// Définition d'un controleur
// app.controller('myCtrl', function($scope) {});
