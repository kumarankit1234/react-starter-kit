




# Getting started

1. For dev build with webpack dev server user: `yarn start`
2. For production build use: `yarn build`.

# Features
1. Development server using webpack dev server.
2. Optimized prod and dev build.
3. SCSS supported.
4. ES6 supported.
5. React router v4 integrated.
6. Autoprefixer for css properties built in.
7. Redux integrated with thunk middlewares to support action as a function.

# Each step took while making this project.

1. Added a basic webpack config just to add entry and output path of the bundle files.

2. Added HTMLWebpackPlugin to automatically generate the html files with all the output js files added to it as a script tag.

3. Added babel transpiler for ES6 code.

4. Used index.ejs instead of index.html to prevent htmlwebpackplugin to add the same script multiple times on index.html.

5. Used watch to prevent running webpack build everytime after file change.

6. Used react to render a div. Used babel-preset-react to transpile react specific code to js.

7. Removed not required options param of babel loader since we already use babelrc file to pass params.

8. Used css and style loader to include css in Jsx

9. Removed webpack watch and using webpack-dev-server instead because watch require us to refresh browser each time we make any changes. webpack dev server automatically refreshes the
browser everytime there is any change and a new build is made. Need to figure out a way to prevent a full refresh because the app may lose state if using react/redux on full refresh

10. Used sass loader for sass files.

11. Used postcss loader and its autoprefixer plugin to add prefix to css for all browser support.

12. Used react component. Added module.hot check for react component for supporting hmr. Used babel plugin transform to use class property.

13. Used the router v4 to make routes on the client side. It allows declarative routing, so we dont need to have a whole routes file at one place in our application. We can add routes inside any component.
Reference: https://reacttraining.com/react-router/core/guides/philosophy.
This is causing one issue. When we are on some route say /about and we refresh the browser then we get a 404 not found error. The network call says that the main.bundle.js that is being fetched from the server is from the route /home/main.bundle.js and this route does not exist on the dev server. Need to figure out a way to fix this. 

14. Added public path option in the output section of webpack config to always load the assets(Js file) from the root directory of the server. 

15. Added separate config file for prod and dev build. Need to optimize the prod build. Reference: https://webpack.js.org/guides/production/

16. Used webpack merge to separate the common config of dev and prod into a common file to avoid code duplication.

17. Used Uglijy Js Plugin to minify the production javascript build. Reference: https://github.com/mishoo/UglifyJS2/tree/harmony. The defaults options are well suited so i didn't pass any parameters to the plugin. This plugin does a lot of optimization to the code.

18. Used Define plugin to define environment. The DefinePlugin allows you to create global constants which can be configured at compile time. This can be useful for allowing different behavior between development builds and release builds.

19. Used redux methods to create a store, subscribe to it and update the component on change. Created a simple reducer for the same.

20. Passed store as a props to the child component and created the store in the parent component.

21. Used context to create a Provider component that passes the store to all its children and grandchildrens as context. So now we dont need to pass store explicitly to any child.

22. Used Provider of react-redux instead of creating our own.

23. The pattern of a component subscribing to store changes like our own Home Component is so common that react-redux has a HOC for the same. It's called `Connect`. Used it to create the Home component.

24. Moved the store creation logic to a separate file.

25. Created one more component to be able to learn how to split reducers based on different keys of the state using the `Combine reducer.`.

26. Created a separate file for the initial state of the app. 

27. Wrapped the store dispatch to add custom logging. This is is route to learning middlewares in redux.

28. Added one more wrapper around store to handle async params to dispatch.

29. Created a middlewares function that execute all the middleware. 

30. Used redux method applyMiddlewares and passed it as an enhancer param to createStore.

31. Used thunk middleware to handle cases when the action is a function instead of a plain object and redux logger.