angular.module('main', ['ngRoute']).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/teste', { 
      templateUrl: 'teste.html', 
      controller: 'controllerTeste'
    })
    .when('/veiculos', { 
      templateUrl: 'veiculos.html', 
      controller: 'controllerVeiculos'
    })
	.when('/ordemservico', { 
      templateUrl: 'ordemservico.html', 
      controller: 'controllerOrdemServico'
    }) 
}])