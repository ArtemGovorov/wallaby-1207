module.exports = function(wallaby) {
  var path = require('path');

  process.env.NODE_PATH +=
    path.delimiter + path.join(wallaby.projectCacheDir, 'client/components') +
    path.delimiter + path.join(wallaby.projectCacheDir, 'client') +
    path.delimiter + path.join(wallaby.projectCacheDir, 'domain') +
    path.delimiter + path.join(wallaby.projectCacheDir, 'combat') +
    path.delimiter + path.join(wallaby.projectCacheDir);

  return {
    files: [
      'domain/**/*.ts',
      'client/**/*.ts?(x)',
      'domain/*.ts',
      'test/data/*.ts',
      'test/firebase-test-config.ts'
    ],
    tests: [
      'test/app-component-tests.tsx'
    ],
    env: {
      type: 'node'
    },
    compilers: {
      '**/*.ts?(x)': wallaby.compilers.typeScript({
        module: 'commonjs',
        jsx: 'react'
      })
    }
  }
}