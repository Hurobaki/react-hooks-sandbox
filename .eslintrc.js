module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "jest": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "prettier"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "react-hooks"
    ],
    "settings": {
        "react": {
            "version": "detect"
        }
    },
    "rules": {
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
        "react/prop-types": ["error", { "ignore": ["navigation"] }]
    }
};
