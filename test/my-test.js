"use strict";
buster.testCase("A module", {
    "states the obvious": function () {
        var vm = new AppViewModel();
        vm.firstName("Arne");
        assert.equals(vm.fullName(), "Arne Bertington");
    }
});
