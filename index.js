module.exports = {
    extends: [
        '@pinuts/eslint-config-pinuts-base'
    ],
    parserOptions: {
        ecmaVersion: 10,
    },
    env: {
        browser: true,
        es6: true,
        jquery: true,
    }
};
