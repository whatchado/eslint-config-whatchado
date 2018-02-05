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


Our eslint config package sits on top of Airbnb's JS Styleguide. It extends eslint-config-airbnb (for frontend) and eslint-config-airbnb-base (for backend) packages and adds a bit of whatchado sugar to them. Enjoy! 
