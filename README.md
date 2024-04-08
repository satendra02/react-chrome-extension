# React Chrome Extension
A chrome extension boilerplate project with ReactJs using inject page strategy. 

Stop worrying about the configurational challenges of setting up the Chrome extension, just start writing your components as usual. Read [detailed blog](https://medium.com/@satendra02/create-chrome-extension-with-reactjs-using-inject-page-strategy-137650de1f39)

>This project is sponsored By [Recast Studio](https://recast.studio)


The boilerplate is to quickly create a chrome extension using ReactJs, The motivation behind creating a boilerplate was:
1. Instead of Chrome's ready-made popup, We wanted our page injected into DOM as a sidebar for better UX.

2. We wanted to use ReactJs for the Component-based approach, Routing, and its build mechanism.

3. We need to make sure that the extension CSS does not conflict with the host page styles in any case.


## Features

- Used ReactJs to write Chrome extension
- Injecting extension to host page as a content script
- Utilized the Chrome messaging API
- Isolated extension CSS using Iframe

## Installation
>Make sure you have **NodeJs(>18)** version installed

Clone repo

```
git clone https://github.com/satendra02/react-chrome-extension.git
```
Go to the `react-chrome-extension` directory and run

```
yarn install
```
Now build the extension using
```
yarn build
```
You will see a `build` folder generated inside `[PROJECT_HOME]`

To avoid running `yarn build` after updating any file, you can run

```
yarn watch
```

which listens to any local file changes, and rebuilds automatically.

## Adding React app extension to Chrome

In the Chrome browser, go to chrome://extensions page and switch on developer mode. This enables the ability to locally install a Chrome extension.

<img src="https://cdn-images-1.medium.com/max/1600/1*OaygCwLSwLakyTqCADbmDw.png" />

Now click on the `LOAD UNPACKED` and browse to `[PROJECT_HOME]\build`, This will install the React app as a Chrome extension.

When you go to any website and click on the extension icon, the injected page will toggle.

<img src="https://cdn-images-1.medium.com/max/1600/1*bXJYfvrcHDWKwUZCrPI-8w.png" />

## Using SASS

Boilerplate contains [sass-loader](https://github.com/webpack-contrib/sass-loader), so you can use SASS instead of pure CSS in your project. To do so:
1. Rename ```src/App.css``` file to ```src/App.scss``` 
2. Change import line in ```src/app.js``` from 
 ```import './App.css';```  to ```import './App.scss';```

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/satendra02/react-chrome-extension/. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.


## License

The repo is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).
