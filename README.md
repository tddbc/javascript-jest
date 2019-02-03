# TDDBC for JavaScript + Jest with Node.js

これは、TDDBCのNode.js + Jest 向けプロジェクトです。

## Documentation

### セットアップ&テスト


```sh
$ git clone https://github.com/tddbc/javascript-jest.git
$ cd javascript-jest
$ npm install
$ npm run test:test

> javascript-jest@0.1.0 pretest /Users/dictav/golang/src/github.com/dictav/javascript-jest
> npm run fmt && npm run lint

> javascript-jest@0.1.0 fmt /Users/dictav/golang/src/github.com/dictav/javascript-jest
> prettier --write *js *.json lib/*js

jest_js.config.js 53ms
jest_mjs.config.js 7ms
main.js 8ms
main.mjs 7ms
prettier.config.js 4ms
package-lock.json 355ms
package.json 30ms
lib/sample.js 11ms
lib/sample.mjs 7ms
lib/sample_test.js 11ms
lib/sample_test.mjs 7ms

> javascript-jest@0.1.0 lint /Users/dictav/golang/src/github.com/dictav/javascript-jest
> eslint main.js main.mjs lib/*js

> javascript-jest@0.1.0 test /Users/dictav/golang/src/github.com/dictav/javascript-jest
> npm run test:js && npm run test:mjs

> javascript-jest@0.1.0 test:js /Users/dictav/golang/src/github.com/dictav/javascript-jest
> jest --config jest_js.config.js

 PASS  lib/sample_test.js
  ✓ exported class (2ms)
  ✓ private function (2ms)

Test Suites: 1 passed, 1 total
Tests:       2 passed, 2 total
Snapshots:   0 total
Time:        1.154s, estimated 2s
Ran all test suites.
```

### コマンド

| コマンド            | 内容                                                       |
|:--------------------|:-----------------------------------------------------------|
| `npm test`          | lint とテストをまとめて行います                            |
| `npm test:js`       | CommonJS の実装のテストを行います                          |
| `npm test:mjs`      | ES Module の実装のテストを行います                         |
| `npm run fmt`       | コードの整形を行います                                     |
| `npm run lint`      | コードの静的検証を行います                                 |
| `npm run watch:js`  | ファイル変更を監視し、変更があったらテストを自動で行います |
| `npm run watch:mjs` | ファイル変更を監視し、変更があったらテストを自動で行います |


## License

Copyright (c) 2019 TDD BaseCamp and other contributors

http://devtesting.jp/tddbc/

https://github.com/tddbc

Licensed under the MIT license.
