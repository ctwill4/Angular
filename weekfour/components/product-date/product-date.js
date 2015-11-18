console.log("product title component");

// to avoid the iffy / closure
angular.module('store')
  .directive('productDate', function(){
    return {
      restrict: 'E',
      templateUrl: 'components/product-date/product-date.html',
      replace: true,
      transclude: true,
      scope: {
        // =, @, &,
      },
      controller: function($scope) {
        console.log('directive controller: ', $scope);
        $scope.date = new Date();
      },
      controllerAs: 'ctrl',
      // DOM ready
      link: function(scope, element, attrs) {
        console.log('scope: ', scope);
        console.log('element: ', element);
        console.log('attrs: ', attrs);
      }
    }
  });

  // pass in the logic through it's own controller