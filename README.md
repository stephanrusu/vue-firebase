## vue-firebase-demo

### Project setup
```
yarn install
```

Compiles and hot-reloads for development
```
yarn serve
```

Compiles and minifies for production
```
yarn build
```

Lints and fixes files
```
yarn lint
```

### Firebase

Add your firebase project configuration in 
```
src/firebase/index.js
```

Install Firebase CLI used for deploy the app
```
npm install -g firebase-tools
```

Initialize a new project directory and select the options that you require
```
firebase init
```

Run build first - still unsure about this :)
```
yarn build
```

To deploy the app, run
```
firebase deploy
```
Deploy only functions
```
firebase deploy --only functions:<function-name>,functions:<function-name>
```
End of story
