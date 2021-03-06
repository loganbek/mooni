# 🌚 Mooni Widget

[![npm (scoped)](https://img.shields.io/npm/v/@mooni/widget)](https://www.npmjs.com/package/@mooni/widget)

Mooni widget allows to quickly add Mooni into any web app in minutes.

The widget can either appear as a modal on top of an app, or included inside an HTML element. 

If the hosting app already has a connected user with web3, this wallet can be forwarded to the widget.

## 🎁 Quick start
#### Install

`yarn add @mooni/widget`
 
#### Start widget

```javascript
// Import package
import MooniWidget from '@mooni/widget';

// Instanciate the widget
const mooni = new MooniWidget();

// Open the widget as a modal when you want it
mooni.open();
```

### 📺 Example apps

An [example app](https://mooni-widget-example.now.sh) including Mooni widget have been published to let you try it out.

We also provided some [code examples](../example-host) that includes Mooni widget. You can also check the [Burner Wallet integration](../burner-plugin/src/ui/MooniPage.tsx) for a more advanced use case.

## 🎛 Reference

#### Instanciation

- `new MooniWidget(opts)`  
Instanciate a Mooni widget.

`opts.containerElement`: Include Mooni inside of an HTML element on your website. If not set, the widget will appear as a modal.

`opts.web3Provider`: Use your own connected web3 provider.

`opts.token`: Add a custom token to the list of input currencies. This must be the address of the contract and the token must be available on Uniswap.

#### If used as a modal:
- `mooni.open()`  
Opens the Mooni widget modal.


- `mooni.close()`  
Closes the Mooni widget modal. Not mandatory, a button is present to enable the user to close it.

## Additional information

### Import on different module systems

- ES6

`import MooniWidget from '@mooni/widget';`

- CommonJS

`const MooniWidget = require('@mooni/widget');`

- UMD

```
<script src="https://unpkg.com/@mooni/widget"></script>
<script> 
  MooniWidget.open()
</script>
```

## 💻 Development

```
# Install dependencies
yarn

# Build package
yarn build

# Publish package
npm publish
```
