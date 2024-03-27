<div align="center">
    <img width="20%" src="https://raw.githubusercontent.com/space-ibrahimstudio/ibrahimstudio/master/public/image/iss-logo.png" alt="@ibrahimstudio" />
    <div align="center">
      <h1>@ibrahimstudio/button</h1>
      <h3>by: Ibrahim Space Studio</h3>
      <p>This package provides a customizable button component for React applications.</p>
    </div>
</div>

---

## 1. Installation

You can install this package via npm:

```sh
npm i @ibrahimstudio/button
# or
yarn add @ibrahimstudio/button
```

## 2. Usage

Import the Button component in your React application and use it as follows :

```javascript
import { Button } from "@ibrahimstudio/button";

const Homepage = () => {
  return (
    <div id="homepage">
      <nav>
        <Button buttonText="Click Me!" />
      </nav>
    </div>
  );
};
```

## 3. Usage of `type` attribute

### 3.1. With `button` type (default)

Add "button" value to `type` attribute, then implement `onClick` event handler

```javascript
<Button buttonText="Login Now" type="button" onClick={() => console.log("logged in.")} />
// or (default) :
<Button buttonText="Login Now" onClick={() => console.log("logged in.")} />
```

---

### 3.2. With `submit` type

Add "submit" value to `type` attribute when the component usage is for `<form>` element

```javascript
<Button buttonText="Login Now" type="submit" />
```

---

### 3.3. With `route` type

Add "route" value to `type` attribute, then add target route in `to` attribute

```javascript
<Button buttonText="About Us" type="route" to="/about-page" />
```

## 4. Customizing styles of Button

### 4.1. Usage of `size` attribute

You can apply and use this Button as primary or secondary button. Fill the `size` attribute with `small` value to use it as secondary button

```javascript
// primary button (default)
<Button buttonText="Register" />
// secondary button
<Button buttonText="Register" size="small" />
```

---

### 4.2. Customize Button's color

You can add a color value to the `color` and `bgColor` attribute to custom Button's color like this :

```javascript
<Button buttonText="Register" color="white" bgColor="blue" />
```

Or you can add style globally with configure this CSS variable in your `global.css` or `index.css` :

```css
:root {
  --color-button: blue; /* button color */
  --color-button-text: white; /* text color inside button */
  --font-button: Inter; /* font family */
}
```

---

### 4.3. Customize Button's radius

You can customize the Button's radius using `radius` attribute

```javascript
// add value to "radius" attribute (default: "md")
<Button buttonText="Register" radius="md" />
```

---

### 4.4. Customize Button's content

You can customize the Button's content by choosing between "reg" (regular, has `startContent`/`endContent` or both and `buttonText`), or "icon" (icon only) in `subVariant` attribute then implement `iconContent` attribute

```javascript
// with "reg" option (default)
<Button buttonText="Log Out" endContent={<ExitIcon />} />
// with "icon" option
<Button buttonText="Log Out" subVariant="icon" iconContent={<ExitIcon />} />
```

## 5. API

### 5.1. Button Props

| Attribute        | Type                                   | Description                                                                                                                 | Default                  |
| ---------------- | -------------------------------------- | --------------------------------------------------------------------------------------------------------------------------- | ------------------------ |
| `id`             | _string_ (required)                    | Specifies the id of the button.                                                                                             | _button-id_              |
| `size`           | _small_ / _reg_                        | Specifies the size of the button.                                                                                           | _reg_                    |
| `type`           | _button_ / _submit_ / _route_          | Specifies the type of the button.                                                                                           | _button_                 |
| `variant`        | _fill_ / _hollow_ / _line_             | Specifies the visual style variant of the button.                                                                           | _fill_                   |
| `subVariant`     | _reg_ / _icon_                         | Specifies the sub-variant of the button, whether regular or icon.                                                           | _reg_                    |
| `radius`         | _none_ / _sm_ / _md_ / _lg_ / _full_   | Specifies the border radius of the button.                                                                                  | _md_                     |
| `color`          | _string_                               | Specifies the text color of the button.                                                                                     | var(--color-button-text) |
| `bgColor`        | _string_                               | Specifies the background color of the button.                                                                               | var(--color-button)      |
| `buttonText`     | _string_ (required)                    | The text content of the button.                                                                                             | _Click Me!_              |
| `isLoading`      | _boolean_                              | Indicates whether the button is in a loading state.                                                                         | _false_                  |
| `iconContent`    | _ReactNode_                            | Icon content to be displayed when "icon" value assigned to "subVariant" attribute.                                          | -                        |
| `startContent`   | _ReactNode_                            | Additional content to be displayed at the start of the button.                                                              | -                        |
| `endContent`     | _ReactNode_                            | Additional content to be displayed at the end of the button.                                                                | -                        |
| `loadingContent` | _ReactNode_                            | Custom loading content to display when the button is in a loading state. If not provided, defaults to a "Loading ..." text. | -                        |
| `to`             | _string_ (required for "route" `type`) | The URL to navigate to if the button type is "route".                                                                       | -                        |

---

### 5.2. Button Event(s)

| Attribute | Type                           | Description                                                     |
| --------- | ------------------------------ | --------------------------------------------------------------- |
| `onClick` | _MouseEventHandler_ (required) | Event handler function to be called when the button is clicked. |

## 6. Contributing

Contributions are welcome! If you have any improvements, bug fixes, or features, feel free to open an issue or create a pull request on GitHub.

## 7. License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/space-ibrahimstudio/ibrahimstudio/blob/master/LICENSE) file for details.
