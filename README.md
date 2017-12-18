# eslint-config-whatchado

Shared ESLint configuration by whatchado

### Install: 

1. Add the eslint-config-whatchado package to your project:  

```
yarn add eslint-config-whatchado
```

2. Add one of these lines to your .eslintrc:
```
"extends": "whatchado", // base rules
"extends": "whatchado/backend"  // base + backend specific rules 
"extends": "whatchado/frontend" // base + frontend specific rules (react)
```



Our config package extends Airbnb's JS config, uses react and import plugins and adds some 'whatchado sugar' on top of it. Enjoy! 