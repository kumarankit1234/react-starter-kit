# Each step took while making this project.

10. Removing webpack watch and using webpack-dev-server instead because watch require us to refresh browser each time we make any changes. webpack dev server automatically refreshes the
browser everytime there is any change and a new build is made. Need to figure out a way to prevent a full refresh because the app may lose state if using react/redux on full refresh

15. Used the router v4 to make routes on the client side. It allows declarative routing, so we dont need to have a whole routes file at one place in our application. We can add routes inside any component.
Reference: https://reacttraining.com/react-router/core/guides/philosophy.
This is causing one issue. When we are on some route say /about and we refresh the browser then we we a 404 not found error. The network call says that the main.bundle.js that is being fetched from the server is from the route /home/main.bundle.js and this route does not exist on the dev server. Need to figure out a way to fix this. 

16. Added public path option in the output section of webpack config to always load the assets(Js file) from the root directory of the server. 

17. Added separate config file for prod and dev build. Need to optimize the prod build. Reference: https://webpack.js.org/guides/production/