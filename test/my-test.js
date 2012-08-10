"use strict";
require("buster");
var my = require("../lib/my.js");
buster.testCase("A module", {
    "states the obvious": function () {
	assert.equals(my.double(5), "10", "Should double the number");
    },
    "states the not-so-obvious": function () {
	assert.same(my.double(5), "10", "Should double the number");
    }
});
