angular.module('starter', ['starter.controllers', 'ngMaterial', 'ui.router'])

.config(function($stateProvider, $urlRouterProvider, $mdThemingProvider, $mdIconProvider) {
  $stateProvider
    .state('search', {
      url: "/search",
          templateUrl: "templates/search.html"
    })

    .state('browse', {
      url: "/browse",
          templateUrl: "templates/browse.html",
          controller: 'ListCtrl'
    })
      .state('playlists', {
        url: "/playlists",
            templateUrl: "templates/playlists.html",
            controller: 'PlaylistsCtrl'
      })

        .state('login', {
          url: "/login",
              templateUrl: "templates/login.html",
              controller: 'LoginCtrl'
        })

    .state('app.single', {
      url: "/playlists/:playlistId",
          templateUrl: "templates/playlist.html",
          controller: 'PlaylistCtrl'
    });
    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/login');

      $mdIconProvider
          .defaultIconSet("./img/svg/avatars.svg", 128)
          .icon("menu"       , "./img/svg/menu.svg"        , 24)
          .icon("search"       , "./img/svg/magnify.svg"   , 24)
          .icon("share"      , "./img/svg/share.svg"       , 24)
          .icon("google_plus", "./img/svg/google_plus.svg" , 512)
          .icon("hangouts"   , "./img/svg/hangouts.svg"    , 512)
          .icon("twitter"    , "./img/svg/twitter.svg"     , 512)
          .icon("pres"    , "./img/svg/pres.svg"     , 512)
          .icon("people"    , "./img/svg/people.svg"     , 512)
          .icon("phone"      , "./img/svg/phone.svg"       , 512);

      $mdThemingProvider.theme('default')
          .primaryPalette('cyan')
          .accentPalette('yellow');

      var whiteMain = $mdThemingProvider.extendPalette('amber', {
        '500': 'ffffff'
      });
      // Register the new color palette map with the name <code>neonRed</code>
      $mdThemingProvider.definePalette('whiteMain', whiteMain);
      // Use that theme for the primary intentions

      $mdThemingProvider.theme('forms')
          .primaryPalette('whiteMain');
});
