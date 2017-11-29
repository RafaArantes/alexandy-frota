var modulo = angular
  .module("main")

  .controller("controllerVeiculos", function(
    $location,
    $scope,
    $timeout,
    $http
  ) {
    console.log("Veiculos controller");

    //Entities to cadastrate
    $scope.veiculo = {};

    $scope.send = function() {
      console.log($scope.veiculo);

      $http({
        method: "POST",
        data: $scope.veiculo,
        crossDomain: true,
        dataType: "json",
        url:
          "http://frotasystembackend.azurewebsites.net/api/services/app/Veiculo/CreateVeiculoAsync"
      }).then(
        function successCallback(response) {},
        function errorCallback(response) {}
      );
    };

    $.getJSON(
      "http://frotasystembackend.azurewebsites.net/api/services/app/Veiculo/GetVeiculo",
      function(data) {
        $scope.veiculos = [];
        $(data["result"]["items"]).each(function(
          index,
          object
        ) {
          $scope.veiculos.push(object);
          $scope.$apply();
        });
      }
    );

    $.getJSON(
      "http://frotasystembackend.azurewebsites.net/api/services/app/Combustivel/GetCombustiveis",
      function(data) {
        $scope.combustiveis = [];
        $(data["result"]["items"]).each(function(
          index,
          object
        ) {
          $scope.combustiveis.push(object);
          $scope.$apply();
        });
      }
    );

    $.getJSON(
      "http://frotasystembackend.azurewebsites.net/api/services/app/Contrato/GetContrato",
      function(data) {
        $scope.contratos = [];
        $(data["result"]["items"]).each(function(
          index,
          object
        ) {
          $scope.contratos.push(object);
          $scope.$apply();
        });
      }
    );

    $.getJSON(
      "http://frotasystembackend.azurewebsites.net/api/services/app/TipoVeiculo/GetTipoVeiculo",
      function(data) {
        $scope.tiposveiculo = [];
        $(data["result"]["items"]).each(function(
          index,
          object
        ) {
          $scope.tiposveiculo.push(object);
          $scope.$apply();
        });
      }
    );

    $.getJSON(
      "http://frotasystembackend.azurewebsites.net/api/services/app/StatusVeiculo/GetStatusVeiculo",
      function(data) {
        $scope.statusveiculos = [];
        $(data["result"]["items"]).each(function(
          index,
          object
        ) {
          $scope.statusveiculos.push(object);
          $scope.$apply();
        });
      }
    );
  });