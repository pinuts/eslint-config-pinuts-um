module.exports = {
    extends: [
        '@pinuts/eslint-config-pinuts-base'
    ],
    parserOptions: {
        ecmaVersion: es2019,
    },
    env: {
        browser: true,
        es6: true,
        jquery: true,
    }
};
