angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $mdSidenav) {
      $scope.toggleLeft = function() {
        $mdSidenav('left').toggle();
      };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

    .controller('LoginCtrl', function($scope, $state) {
      // Form data for the login modal
      $scope.loginData = {};

      // Create the login modal that we will use later
      /*$ionicModal.fromTemplateUrl('templates/login.html', {
       scope: $scope
       }).then(function(modal) {
       $scope.modal = modal;
       });*/

      // Triggered in the login modal to close it
      $scope.closeLogin = function() {
        $scope.modal.hide();
      };

      // Open the login modal
      $scope.login = function() {
        $scope.modal.show();
      };

      // Perform the login action when the user submits the login form
      $scope.doLogin = function() {
        console.log('Doing login', $scope.loginData);

        // Simulate a login delay. Remove this and replace with your login
        // code if using a login system
          $state.go('browse');
      };
    })

.controller('ListCtrl', function($scope, $mdSidenav){
      $mdSidenav('left').toggle();

      $scope.phones = [
        { type: 'Home', number: '(555) 251-1234' },
        { type: 'Cell', number: '(555) 786-9841' },
      ];
      $scope.todos = [
        {
          face : 'img/60.jpeg',
          what: 'Hey, teacher',
          who: 'Pink Floyd',
          when: '3:08PM',
          notes: "Leave those kids alone!"
        },
        {
          face : 'img/60.jpeg',
          what: 'Hey, teacher',
          who: 'Pink Floyd',
          when: '3:08PM',
          notes: "Leave those kids alone!"
        },
        {
          face : 'img/60.jpeg',
          what: 'Hey, teacher',
          who: 'Pink Floyd',
          when: '3:08PM',
          notes: "Leave those kids alone!"
        },
        {
          face : 'img/60.jpeg',
          what: 'Hey, teacher',
          who: 'Pink Floyd',
          when: '3:08PM',
          notes: "Leave those kids alone!"
        },
        {
          face : 'img/60.jpeg',
          what: 'Hey, teacher',
          who: 'Pink Floyd',
          when: '3:08PM',
          notes: "Leave those kids alone!"
        },
      ];
    })

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
