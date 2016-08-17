(function() {
  'use strict';

  angular
    .module('qi')
    .directive('customDropdown', customDropdown);

  /** @ngInject */
  function customDropdown() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/directive/dropdown.html',
      controller: DropdownController,
      controllerAs: 'vm',
      bindToController: true,
      scope: {list: '=', selected: '='}
    };

    return directive;
  }

  /** @ngInject */
  function DropdownController($window) {
    var vm = this;
    vm.updateXY = updateXY;
    vm.onSelect = onSelect;
    vm.filterList = filterList;


    function updateXY($event) {
      vm.bottom = $window.innerHeight - ($event.target.getBoundingClientRect().top - 8);
      vm.left = $event.target.getBoundingClientRect().left + 80;
    }

    function onSelect(profile) {
      vm.selected = profile;
      vm.showList = false;
    }

    function filterList(item) {
      if(vm.query == undefined) {
        return true;
      }
      else {
        if((item.driver && item.driver.name.toLowerCase().indexOf(vm.query.toLowerCase()) != -1) ||
          (item.vehicle && item.vehicle.plate.toLowerCase().indexOf(vm.query.toLowerCase()) != -1)) {
            return true;
        }
      }
      return false;
    }

  }

})();
