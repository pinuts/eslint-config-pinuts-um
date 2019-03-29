# @pinuts/eslint-config-pinuts-um
Common Eslint config for our new (ES6 and beyond) UM / CSE Javascript.

Extends `@pinuts/eslint-config-pinuts-base`.


# Use in your project

Install or update node package:
```
sudo npm i @pinuts/eslint-config-pinuts-um
```

Include in your `cmsbs-conf/.eslintrc.js`:

```
module.exports = {
    extends: [
        '@pinuts/eslint-config-pinuts-um'
    ]
};
```

# Publish on npm

On master, once all the changes for a new version are in order, run:

1. `npm version [major|minor|patch]`
2. `git push origin master --follow-tags`
3. `npm publish`
