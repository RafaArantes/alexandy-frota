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

		$scope.veiculoObj = []

		$scope.tipoveiculos = [
      {
        "nome": "Executivo",
        "id": 2
      },
      {
        "nome": "Popular",
        "id": 1
      }
    ]
		$scope.motoristaObj = [
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
		$scope.ordemservico = []; 
		 
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
     
    //Entities to populate
    $scope.ordemcadastro = {}; 

    $scope.send = function(){
      $scope.ordemcadastro.unidadeId = $scope.selectedUnidade;
      $scope.ordemcadastro.departamentoId = $scope.selectedDepartamento;   
      console.log($scope.ordemcadastro); 
    }

		$scope.cadastrarOs = function() {
			var nSolicitacao = $scope.ordemservico.slice(-1)[0];    
		  var toNumber = Number(nSolicitacao.id);
			$scope.ordemservico.id = toNumber + 1;
			var conilas = (new Date()).toISOString()
			$scope.ordemservico.dtSolicitacao = conilas;
		}

		$scope.editarOs = function(os){
			var osc = $scope.ordemservico;
			osc.placa = os.veiculo.placa;  
			osc.id = os.id; 
			osc.dtSaida = os.dtSaida;
			osc.dtSolicitacao = os.dtSolicitacao;
		} 

    $scope.loadOrdemServico = function(){
      $http.get("http://frotasystembackend.azurewebsites.net/api/services/app/OrdemServico/GetOrdemServico").then(response => {
        $scope.ordemservico = response.data.result.items;
            for(var i = 0; i < $scope.ordemservico.length; i++){
                var motorista_id = $scope.ordemservico[i].motoristaId; 
                var veiculo_id = $scope.ordemservico[i].veiculoId;
                var usersolicitacao_Id = $scope.ordemservico[i].userSolicitacaoId;
                var unidade_Id = $scope.ordemservico[i].unidadeId;

                var unidadeobj = usuario.find(item => item.id === unidade_Id);
                var motoristaobject = $scope.motoristaObj.find(item => item.id === motorista_id);
                var veiculoidobject = $scope.veiculoObj.find(item => item.id === veiculo_id); 
                var usersolidobject = usuario.find(item => item.id === usersolicitacao_Id);

                console.log(unidadeobj)
                $scope.ordemservico[i].motorista = motoristaobject;
                $scope.ordemservico[i].veiculo = veiculoidobject;
          };  
      })  
    }

    $scope.loadVeiculos = function(){
      $http.get("http://frotasystembackend.azurewebsites.net/api/services/app/Veiculo/GetVeiculo").then(response => {
          $scope.veiculoObj = response.data.result.items;
          $scope.loadOrdemServico(); 
      });
    }

    $scope.loadAll = function(){
      $scope.loadVeiculos();
      $scope.ordemcadastro.dtSolicitacao = "10/08/2014";   
      $scope.ordemcadastro.hrSolicitacao = "11:30";
    }

    $scope.loadAll(); 

		$scope.clearCamps = function() {
      $scope.ordemservico.ordemServicoForm = "";
		}
	})
 