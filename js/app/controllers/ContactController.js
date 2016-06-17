function ContactController() {
    var vm = this
    vm.contacts = [{
        name: 'Bob',
        phone: '0123458690'
    },{
        name: 'Tim',
        phone: '3934203242'
    },{
        name: 'Ross',
        phone: '0684059433'
    }];

    vm.removeContact = function (index) {
        this.contacts.splice(index, 1);
    }



    // vm.newContact = {
    //   name: vm.name,
    //   phone: vm.phone
    // }

    vm.addContact = function () {
      vm.contacts.push({name: vm.name, phone: vm.phoneNumber});
      vm.name = "";
      vm.phoneNumber = "";
    }
}

angular
    .module('app')
    .controller('ContactController', ContactController);
