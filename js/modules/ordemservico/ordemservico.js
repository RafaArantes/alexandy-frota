var modulo = angular.module('main')

	.controller('controllerOrdemServico', function ($location, $scope, $timeout, $http) {

		console.log('frm_create_ordem');

		$scope.pag = 1; //default page

		$scope.setAdminPage = function(){
			$scope.pag = 2;
		}

		$scope.setUserPage = function(){
			$scope.pag = 1;
		}
		var veiculoObj = [
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
		var motoristaObj = [
      {
        "nome": "string",
        "telefone": null,
        "freelancer": true,
        "id": 1
      },
      {
        "nome": "Testando",
        "telefone": null,
        "freelancer": true,
        "id": 2
      }
    ]
		$scope.diretorias = [
      {
        "nome": "DIREX",
        "id": 2
      },
      {
        "nome": "PRESI",
        "id": 1
      }
    ]
		$scope.departamentos = [
      {
        "nome": "DIREX",
        "id": 2
      },
      {
        "nome": "PRESI",
        "id": 1
      }
    ]
		$scope.unidades = [
      {
        "nome": "COINT",
        "ramal": "1000",
        "departamentoId": 1,
        "id": 2
      },
      {
        "nome": "DIORF",
        "ramal": "2000",
        "departamentoId": 2,
        "id": 1
      }
    ]
		$scope.statusordem = [
      {
        "nome": "Agendada",
        "id": 1
      },
      {
        "nome": "Em Andamento",
        "id": 2
      },
      {
        "nome": "Executada",
        "id": 3
      }
    ]
		$scope.ordemservico = [
      {
        "dtSolicitacao": "2017-11-12T20:19:42.994",
        "passageiro": "string",
        "dtSaida": "2017-11-12T20:19:42.994",
        "enderecoDestino": "string",
        "finalidadeServido": "string",
        "localSaida": "string",
        "dtChegada": "2017-11-12T20:19:42.994",
        "kmInicial": 0,
        "kmFinal": 0,
        "arquivo": "string",
        "statusOrdemServicoId": 1,
        "unidadeId": 1,
        "motoristaId": 1,
        "veiculoId": 1,
        "userSolicitacaoId": 1,
        "userConfirmacaoId": 1,
        "userBaixaId": 1,
        "id": 10
      },
      {
        "dtSolicitacao": "2017-11-12T20:19:42.994",
        "passageiro": "string",
        "dtSaida": "2017-11-12T20:19:42.994",
        "enderecoDestino": "string",
        "finalidadeServido": "string",
        "localSaida": "string",
        "dtChegada": "2017-11-12T20:19:42.994",
        "kmInicial": 0,
        "kmFinal": 0,
        "arquivo": "string",
        "statusOrdemServicoId": 1,
        "unidadeId": 1,
        "motoristaId": 2,
        "veiculoId": 2,
        "userSolicitacaoId": 1,
        "userConfirmacaoId": 1,
        "userBaixaId": 1,
        "id": 11
      },
      {
        "dtSolicitacao": "2017-11-12T20:19:42.994",
        "passageiro": "string",
        "dtSaida": "2017-11-12T20:19:42.994",
        "enderecoDestino": "string",
        "finalidadeServido": "string",
        "localSaida": "string",
        "dtChegada": "2017-11-12T20:19:42.994",
        "kmInicial": 0,
        "kmFinal": 0,
        "arquivo": "string",
        "statusOrdemServicoId": 1,
        "unidadeId": 1,
        "motoristaId": 2,
        "veiculoId": 2,
        "userSolicitacaoId": 1,
        "userConfirmacaoId": 1,
        "userBaixaId": 1,
        "id": 12
      }
    ]
		var usuario = [
	    {
	      "userName": "string",
	      "name": "string",
	      "surname": "string",
	      "emailAddress": "string",
	      "isActive": true,
	      "fullName": "string",
	      "lastLoginTime": "2017-11-26T20:21:18.826Z",
	      "creationTime": "2017-11-26T20:21:18.826Z",
	      "roleNames": [
	        "string"
	      ],
	      "id": 1
	    }
  	]
		for(var i = 0; i < $scope.ordemservico.length; i++){
			var motorista_id = $scope.ordemservico[i].motoristaId;
			var veiculo_id = $scope.ordemservico[i].veiculoId;
			var usersolicitacao_Id = $scope.ordemservico[i].userSolicitacaoId;

			var motoristaobject = motoristaObj.find(item => item.id === motorista_id);
			var veiculoidobject = veiculoObj.find(item => item.id === veiculo_id);
			var usersolidobject = usuario.find(item => item.id === usersolicitacao_Id);

			console.log(usersolidobject)
			$scope.ordemservico[i].motorista = motoristaobject;
			$scope.ordemservico[i].veiculo = veiculoidobject;
		};
		$scope.editarOs = function(os){
			var osc = $scope.ordemservico;
			osc.placa = os.veiculo.placa;
			osc.id = os.id;
			osc.dtSaida = os.dtSaida;
			osc.dtSolicitacao = os.dtSolicitacao;
		}
		$scope.clearCamps = function() {
      $scope.ordemservico.ordemServicoForm = "";
		}
	})
