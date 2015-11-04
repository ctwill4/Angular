console.log("product title component");

  app.directive('productTitle', function(){
    return {
      restrict: 'E',
      templateUrl: 'dir_js/product_title.html',
      };
    });

  app.directive('productPanels', function(){
    return {
      restrict: 'E',
      templateUrl: 'product-panels.html',
      controller: function(){
      },
      controllerAs: 'panels'
    };
  });

  app.controller('PanelController', function(){});