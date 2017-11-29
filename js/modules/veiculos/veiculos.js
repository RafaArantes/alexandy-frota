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

      $http.post(
        "http://frotasystembackend.azurewebsites.net/api/services/app/Veiculo/CreateVeiculoAsync",
        $scope.veiculo,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
          }
        }
      );
    };

    $.getJSON(
      "http://frotasystembackend.azurewebsites.net/api/services/app/Veiculo/GetVeiculo",
      function(data) {
        $scope.veiculos = [];

        $(data["result"]["items"]).each(function(index, object) {
          $scope.veiculos.push(object);
          $scope.$apply();
        });
      }
    );

     $.getJSON(
      "http://frotasystembackend.azurewebsites.net/api/services/app/Combustivel/GetCombustiveis", function(data)
      function(data) {
        $scope.combustiveis = [];
        $(JSON.parse(data.contents)["result"]["items"]).each(function(
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
        $(JSON.parse(data.contents)["result"]["items"]).each(function(
          index,
          object
        ) {
          $scope.contratos.push(object);
          $scope.$apply();
        });
      }
    );

                    $.getJSON(
      "http://frotasystembackend.azurewebsites.net/api/services/app/TipoVeiculo/GetTipoVeiculo"
       ,
      function(data) {
        $scope.tiposveiculo = [];
        $(JSON.parse(data.contents)["result"]["items"]).each(function(
          index,
          object
        ) {
          $scope.tiposveiculo.push(object);
          $scope.$apply();
        });
      }
    );

     $.getJSON(
      "http://frotasystembackend.azurewebsites.net/api/services/app/StatusVeiculo/GetStatusVeiculo"
        ,
      function(data) {
        $scope.statusveiculos = [];
        $(JSON.parse(data.contents)["result"]["items"]).each(function(
          index,
          object
        ) {
          $scope.statusveiculos.push(object);
          $scope.$apply();
        });
      }
    );
  });