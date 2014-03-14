# mocha-support-promise example

Mocha [1.18.0](https://github.com/visionmedia/mocha/blob/master/History.md#1180--2014-03-13 "1.18.0") support promise tests!!

When, promise object testing

``` js
function getSuccessPromise() {
    return Promise.resolve(false);
}
```

Until now,


``` js
describe("OLD Promises Test Pattern", function () {
    context("with promise error handling", function () {
        it("should manually handling test...", function (done) {
            getSuccessPromise().then(function (value) {
                assert(value);
                done();
            }).catch(done); // when assert fail, it is needed.
        });
    });
});
```

From now,

``` js
describe("Promises", function () {
    context("when return promise object", function () {
        it("should support by mocha", function () {
            return getSuccessPromise().then(function (value) {
                assert(value);
            });
        });
    });
});
```

See example code @ `test/`.


## License

MIT