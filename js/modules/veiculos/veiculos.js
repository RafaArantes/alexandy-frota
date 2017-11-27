var modulo = angular.module('main')

	.controller('controllerVeiculos', function ($location, $scope, $timeout, $http) {


		console.log('Veiculos controller');

		//Entities to cadastrate
		$scope.veiculo = {};


		$scope.send = function(){
			console.log($scope.veiculo);
		}

        $scope.veiculos = [];
        $.getJSON('http://www.whateverorigin.org/get?url=' + encodeURIComponent('http://frotasystembackend.azurewebsites.net/api/services/app/Veiculo/GetVeiculo') + '&callback=?', function(data){
	        
	        $(JSON.parse(data.contents)['result']['items']).each(function(index,object){
	            
	            $scope.veiculos.push(object);
	            
	        });
	        console.log($scope.veiculos);
	        
        });


	});