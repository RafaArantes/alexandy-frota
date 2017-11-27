var modulo = angular.module('main')

.controller('controllerVeiculos', function($location, $scope, $timeout, $http)
{

    console.log('Veiculos controller');

    //Entities to cadastrate
    $scope.veiculo = {};

    $scope.send = function()
    {
        console.log($scope.veiculo);
    }

    $.getJSON('http://www.whateverorigin.org/get?url=' + encodeURIComponent('http://frotasystembackend.azurewebsites.net/api/services/app/Veiculo/GetVeiculo') + '&callback=?', function(data)
    {

        $scope.veiculos = [];
        $(JSON.parse(data.contents)['result']['items']).each(function(index, object)
        {

            $scope.veiculos.push(object);
            $scope.$apply();

        });

    });

    $.getJSON('http://www.whateverorigin.org/get?url=' + encodeURIComponent('http://frotasystembackend.azurewebsites.net/api/services/app/Combustivel/GetCombustiveis') + '&callback=?', function(data)
    {

        $scope.combustiveis = [];
        $(JSON.parse(data.contents)['result']['items']).each(function(index, object)
        {

            $scope.combustiveis.push(object);
            $scope.$apply();

        });

    });

    $.getJSON('http://www.whateverorigin.org/get?url=' + encodeURIComponent('http://frotasystembackend.azurewebsites.net/api/services/app/Contrato/GetContrato') + '&callback=?', function(data)
    {

        $scope.contratos = [];
        $(JSON.parse(data.contents)['result']['items']).each(function(index, object)
        {

            $scope.contratos.push(object);
            $scope.$apply();

        });

    });

    $.getJSON('http://www.whateverorigin.org/get?url=' + encodeURIComponent('http://frotasystembackend.azurewebsites.net/api/services/app/TipoVeiculo/GetTipoVeiculo') + '&callback=?', function(data)
    {

        $scope.tiposveiculo = [];
        $(JSON.parse(data.contents)['result']['items']).each(function(index, object)
        {

            $scope.tiposveiculo.push(object);
            $scope.$apply();

        });

    });

});