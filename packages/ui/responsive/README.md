<div align="center">
    <img width="20%" src="https://raw.githubusercontent.com/space-ibrahimstudio/ibrahimstudio/master/public/image/iss-logo.png" alt="@ibrahimstudio/responsive" />
    <div align="center">
      <h1>@ibrahimstudio/responsive</h1>
      <h3>by: Ibrahim Space Studio</h3>
      <p>This package provides automatic responsiveness for React applications.</p>
    </div>
</div>

---

## 1. Installation

You can install this package via npm:

```sh
npm i @ibrahimstudio/responsive
# or
yarn add @ibrahimstudio/responsive
```

## 2. Usage

To use `@ibrahimstudio/responsive`, simply wrap your entire React application with the `<ISResponsive>` component:

```javascript
import React from "react";
import ReactDOM from "react-dom/client";
import { ISResponsive } from "@ibrahimstudio/responsive";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ISResponsive>
    <App />
  </ISResponsive>
);
```

This will enable automatic responsiveness for your entire application by detecting elements with `px` in every elements. It calculates and adjusts these values based on the device type, ensuring optimal display across different screen sizes.

## 3. Contributing

Contributions are welcome! If you have any improvements, bug fixes, or features, feel free to open an issue or create a pull request on GitHub.

## 4. License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/space-ibrahimstudio/ibrahimstudio/blob/master/LICENSE) file for details.
