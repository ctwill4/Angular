console.log("product title component");

// to avoid the iffy / closure
angular.module('app-components')
  .directive('productTitle', function(){
    return {
      restrict: 'E',
      templateUrl: 'components/product-title/product-title.html',
      replace: true,
      transclude: true,
      scope: {
        // =, @, &,
      },
      controller: function($scope) {
        console.log('directive controller: ', $scope);
      },
      controllerAs: 'ctrl',
      bindToController: {
        product: '=product'
      },
      // DOM ready
      link: function(scope, element, attrs) {
        console.log('scope: ', scope);
        console.log('element: ', element);
        console.log('attrs: ', attrs);
      }
    }
  });