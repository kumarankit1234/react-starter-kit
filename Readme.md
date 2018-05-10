# Each step took while making this project.

10. Removing webpack watch and using webpack-dev-server instead because watch require us to refresh browser each time we make any changes. webpack dev server automatically refreshes the
browser everytime there is any change and a new build is made. Need to figure out a way to prevent a full refresh because the app may lose state if using react/redux on full refresh

15. Used the router v4 to make routes on the client side. It allows declarative routing, so we dont need to have a whole routes file at one place in our application. We can add routes inside any component.
Reference: https://reacttraining.com/react-router/core/guides/philosophy.
This is causing one issue. When we are on some route say /about and we refresh the browser then we we a 404 not found error. The network call says that the main.bundle.js that is being fetched from the server is from the route /home/main.bundle.js and this route does not exist on the dev server. Need to figure out a way to fix this. 

16. Added public path option in the output section of webpack config to always load the assets(Js file) from the root directory of the server. 

17. Added separate config file for prod and dev build. Need to optimize the prod build. Reference: https://webpack.js.org/guides/production/

18. Used webpack merge to separate the common config of dev and prod into a common file to avoid code duplication.

19. Used Uglijy Js Plugin to minify the production javascript build. Reference: https://github.com/mishoo/UglifyJS2/tree/harmony. The defaults options are well suited so i didn't pass any parameters to the plugin. This plugin does a lot of optimization to the code.

20. Used Define plugin to define environment. The DefinePlugin allows you to create global constants which can be configured at compile time. This can be useful for allowing different behavior between development builds and release builds.

21. Used redux methods to create a store, subscribe to it and update the component on change. Created a simple reducer for the same.

22. Passed store as a props to the child component and created the store in the parent component.

23. Used context to create a Provider component that passes the store to all its children and grandchildrens as context. So now we dont need to pass store explicitly to any child.

24. Used Provider of react-redux instead of creating our own.

25. The pattern of a component subscribing to store changes like our own Home Component is so common that react-redux has a HOC for the same. It's called `Connect`. Used it to create the Home component.

26. Moved the store creation logic to a separate file.