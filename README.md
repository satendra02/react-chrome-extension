# React Chrome Extension
We have open sourced the boilerplate of chrome extension with ReactJs using inject page strategy. Read [detailed blog](https://medium.com/@satendra02/create-chrome-extension-with-reactjs-using-inject-page-strategy-137650de1f39)


The boilerplate is to quickly create a chrome extension using ReactJs, The motivation behind creating a boilerplate was:
1. Instead of chrome's ready-made popup, We wanted our own page injected into DOM as a sidebar for better UX.

2. We wanted to use ReactJs for the Component-based approach, Routing, and its build mechanism.

3. We need to make sure that the extension CSS should not conflict with the host page styles in any case.


## Features

- Used ReactJs to write chrome extension
- Injecting extension to host page as content script
- Utilized the Chrome messaging API
- Isolated extension CSS using Iframe

## Installation
>Make sure you have latest **NodeJs** version installed

Clone repo

```
git clone https://github.com/satendra02/react-chrome-extension.git
```
Go to `react-chrome-extension` directory run

```
yarn install
```
Now build the extension using
```
yarn build
```
You will see a `build` folder generated inside `[PROJECT_HOME]`

## Adding React app extension to Chrome

In Chrome browser, go to chrome://extensions page and switch on developer mode. This enables the ability to locally install a Chrome extension.

<img src="https://cdn-images-1.medium.com/max/1600/1*OaygCwLSwLakyTqCADbmDw.png" />

Now click on the `LOAD UNPACKED` and browse to `[PROJECT_HOME]\build` ,This will install the React app as a Chrome extension.

When you go to any website and click on extension icon, injected page will toggle.

<img src="https://cdn-images-1.medium.com/max/1600/1*bXJYfvrcHDWKwUZCrPI-8w.png" />

## Contributing

Bug reports and pull requests are welcome on GitHub at https://github.com/satendra02/react-chrome-extension/. This project is intended to be a safe, welcoming space for collaboration, and contributors are expected to adhere to the [Contributor Covenant](http://contributor-covenant.org) code of conduct.


## License

The repo is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).
