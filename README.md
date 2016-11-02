# Polis admin console

# Tests

## Setup

This module uses the Jest framework to run tests. To be ready to go, you need to have the following packages:

- jest
- babel-jest
- babel-preset-es2015
- babel-preset-react
- react-test-renderer

And the following babel plugins:

- syntax-decorators
- transform-es2015-computed-properties
- transform-class-properties

Keep in mind that some of these packages needs to be in your global npm directory, and some don't. You shouldn't have too much trouble with this, just try to install a package global when you need to use it in your terminal but the command isn't available.


## Versions

The following versions are being used (that means: you can try any version that you want, but if you have some trouble configuring this, be sure to check the versions that we are currently using):

- node: "6.2.0"
- babel-core: "^5.8.25",
- babel-eslint: "^4.1.3",
- babel-loader: "^5.3.2",
- babel-plugin-react-transform: "^1.1.1",

## Running Tests

To run the tests, just type:

`
jest
`

In the command line, from the root folder. The tests are inside the `__tests__` directory, and the test file correspond to the same file that it's trying to test.

You can also run the tests with

`
npm test
`

since it's an alias to the `jest` command.
