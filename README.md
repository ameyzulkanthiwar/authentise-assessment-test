This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `Pacakages insall`

# Antd

-   we are using Antd css frame work for the component.
-   To use antd in create react app we need to install moment of version 2.18.1 for more refrence `https://github.com/ant-design/ant-design/issues/23823`

```
yarn add moment@2.18.1
```

-   This is one of the dependances craete react ask for using antd.
-   We also need to add the `import 'antd/dist/antd.css'` in the index.js file of the root folder of create-react-app

#

To add now breed in the collection use `Add new breed` Button.<br>
If we try to search wrong breed or breed which is not a parasent in theAPI then it will give error Alert.<br>

```
NOTE: Need to Close the alert before starting search of breed.
```

I have created Reusable card component.<br>

For Adding Breed in the collection there is a button on the card `Add to Collection`.<br>

For Removing Breed from the collection there is a button in the collection there is a button on the card `Remove from the collection`.
<br>

Both are same card component, we just pass different event handler.

```
Website is response.
```
