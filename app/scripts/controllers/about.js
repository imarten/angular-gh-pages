'use strict';

/**
 * @ngdoc function
 * @name angularGhPagesApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularGhPagesApp
 */
angular.module('angularGhPagesApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
