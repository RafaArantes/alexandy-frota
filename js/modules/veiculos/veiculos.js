var modulo = angular.module('main')

	.controller('controllerVeiculos', function ($location, $scope, $timeout, $http) {


		console.log('Veiculos controller');

		//Entities to cadastrate
		$scope.veiculo = {};


		$scope.send = function(){
			console.log($scope.veiculo);
		}

		$scope.veiculos = [
      {
        "dtEntregaVenda": "2017-11-12T20:27:23.539",
        "dtVenda": "2017-11-12T20:27:23.539",
        "revendedor": "string",
        "placa": "PAK0538",
        "kmAtual": 0,
        "fabricante": "string",
        "modelo": "string",
        "cor": "string",
        "chassi": "string",
        "renavam": "string",
        "dtFabricacao": "2017-11-12T20:27:23.54",
        "capacidadeTanque": 1,
        "combustivelId": 1,
        "contratoId": 1,
        "statusVeiculoId": 1,
        "tipoVeiculoId": 1,
        "id": 2
      },
      {
        "dtEntregaVenda": "2017-11-12T20:19:43.75",
        "dtVenda": "2017-11-12T20:19:43.751",
        "revendedor": "string",
        "placa": "string",
        "kmAtual": 0,
        "fabricante": "string",
        "modelo": "string",
        "cor": "string",
        "chassi": "string",
        "renavam": "string",
        "dtFabricacao": "2017-11-12T20:19:43.751",
        "capacidadeTanque": 0,
        "combustivelId": 1,
        "contratoId": 1,
        "statusVeiculoId": 1,
        "tipoVeiculoId": 1,
        "id": 1
      }
		]

	});
