/**
 * Created by azu on 2014/03/14.
 * LICENSE : MIT
 */
"use strict";

var Promise = require("bluebird");
var assert = require("assert");

function getFailurePromise() {
    return Promise.reject(true);
}

describe("Promises", function () {
    context("when return promise object", function () {
        it("should support by mocha", function () {
            return getFailurePromise().then(function (value) {
                assert(value);
            });
        });
    });
});

describe("OLD Promises Test Pattern", function () {
    context("with promise error handling", function () {
        it("should manually handling test...", function (done) {
            getFailurePromise().then(function (value) {
                assert(value);
                done();
            }).catch(done);
        });
    });
});
