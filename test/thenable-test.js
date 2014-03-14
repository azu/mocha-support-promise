/**
 * Created by azu on 2014/03/14.
 * LICENSE : MIT
 */
"use strict";

var Promise = require("bluebird");
var assert = require("assert");

function getSuccessPromise() {
    return Promise.resolve(false);
}
function getFailurePromise() {
    return Promise.reject(new Error("this is error"));
}

describe("Promises", function () {
    context("when return promise object", function () {
        it("should support by mocha", function () {
            return getSuccessPromise().then(function (value) {
                assert(value);
            });// => fail
        });
        it("should also support by mocha", function () {
            return getFailurePromise().catch(function (error) {
                assert(error instanceof Error);
                assert(error.message === "this is error");
            });
        });
    });
});

describe("OLD Promises Test Pattern", function () {
    context("with promise error handling", function () {
        it("should manually handling test...", function (done) {
            getSuccessPromise().then(function (value) {
                assert(value);
                done();
            }).catch(done);// => fail
        });
        it("is old promise testing pattern", function (done) {

            getFailurePromise().catch(function (error) {
                assert(error instanceof Error);
                assert(error.message === "this is error");
            }).then(done, done);
        });
    });
});
