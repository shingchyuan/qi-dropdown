(function() {
  'use strict';

  angular
    .module('qi')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController() {
    var vm = this;
    vm.profiles1 = [
                    {
                      id:1,
                      driver:{name:'Mr A', contact:'99999999', photo:'http://placehold.it/120x120'},
                      vehicle:{plate:'SGX1111A', model:'Mitsubishi', photo:'http://placehold.it/120x120'}
                    },
                    {
                      id:2,
                      driver:{name:'Mr B', contact:'88888888', photo:'http://placehold.it/120x120'}
                    },
                    {
                      id:3,
                      vehicle:{plate:'SGX2222A', model:'BMW', photo:'http://placehold.it/120x120'}
                    },
                    {
                      id:4,
                      driver:{name:'Mr D', contact:'66666666', photo:'http://placehold.it/120x120'},
                      vehicle:{plate:'SGX3333A', model:'Toyota', photo:'http://placehold.it/120x120'}
                    },
                    {
                      id:5,
                      driver:{name:'Mr E', contact:'55555555', photo:'http://placehold.it/120x120'},
                      vehicle:{plate:'SGX4444A', model:'Honda', photo:'http://placehold.it/120x120'}
                    }
                  ];

    vm.profiles2 = [
                    {
                      id:6,
                      driver:{name:'Mr F', contact:'44444444', photo:'http://placehold.it/120x120'},
                      vehicle:{plate:'SGX5555A', model:'Mitsubishi', photo:'http://placehold.it/120x120'}
                    },
                    {
                      id:7,
                      driver:{name:'Mr G', contact:'33333333', photo:'http://placehold.it/120x120'}
                    },
                    {
                      id:8,
                      vehicle:{plate:'SGX6666A', model:'BMW', photo:'http://placehold.it/120x120'}
                    },
                    {
                      id:9,
                      driver:{name:'Mr H', contact:'11111111', photo:'http://placehold.it/120x120'},
                      vehicle:{plate:'SGX7777A', model:'Toyota', photo:'http://placehold.it/120x120'}
                    },
                    {
                      id:10,
                      driver:{name:'Mr I', contact:'00000000', photo:'http://placehold.it/120x120'},
                      vehicle:{plate:'SGX8888A', model:'Honda', photo:'http://placehold.it/120x120'}
                    }
                  ];
  }
})();
