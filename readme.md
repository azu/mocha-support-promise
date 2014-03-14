# mocha-support-promise example

Mocha [1.18.0](https://github.com/visionmedia/mocha/blob/master/History.md#1180--2014-03-13 "1.18.0") support promise tests!!

Until now,

``` js
describe("OLD Promises Test Pattern", function () {
    context("with promise error handling", function () {
        it("should manually handling test...", function (done) {
            getFailurePromise().then(function (value) {
                assert.equal(value, "it is fail");
                done();
            }).catch(done);
        });
    });
});
```

From now,

``` js
describe("Promises test", function () {
    context("when return promise object", function () {
        it("should support by mocha", function () {
            // return promise object
            return getFailurePromise().then(function (value) {
                assert.equal(value, "it is fail");
            });
        });
    });
});
```

See example code @ `test/`.


## License

MIT