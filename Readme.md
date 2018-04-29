# Each step took while making this project.

10. Removing webpack watch and using webpack-dev-server instead because watch require us to refresh browser each time we make any changes. webpack dev server automatically refreshes the
browser everytime there is any change and a new build is made. Need to figure out a way to prevent a full refresh because the app may lose state if using react/redux on full refresh