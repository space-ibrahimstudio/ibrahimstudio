# @ibrahimstudio/button

This package provides a customizable button component for React applications.

## Installation

You can install this package via npm:

```sh
npm i @ibrahimstudio/button
# or
yarn add @ibrahimstudio/button
```

## Usage

Import the Button component in your React application and use it as follows :

```javascript
import { Button } from "@ibrahimstudio/button";

const Homepage = () => {
  return (
    <div id="homepage">
      <nav>
        <Button buttonText="Click me!" />
      </nav>
    </div>
  );
};
```

### 1. Button with `Submit` type

```javascript
// add "submit" value to "type" attribute
<Button buttonText="Login Now" type="submit" />
```

---

### 2. Button with `onClick` type

```javascript
// add "handleSubmit" logic to "onClick" attribute
<Button buttonText="Login Now" onClick={handleSubmit} />
```

---

### 3. Apply `styles` to Button

- You can apply and use this Button as primary or secondary button. Fill the `size` attribute with `small` value to use it as secondary button :

```javascript
// JSX elements
<Button buttonText="Register" size="small" />
```

- You can add a color value to the `color` and `bgColor` attribute to custom Button's color like this :

```javascript
// JSX elements
<Button buttonText="Register" color="white" bgColor="blue" />
```

- Or, you can add style globally with configure this CSS variable in your `global.css` :

```css
:root {
  --color-button: blue; /* button color */
  --color-button-text: white; /* text color inside button */
  --font-button: Inter; /* font family */
}
```

---

### Button Props

| Attribute      | Type                                 | Description                                                    | Default |
| -------------- | ------------------------------------ | -------------------------------------------------------------- | ------- |
| `size`         | _string_                             | Specifies the size of the button.                              | -       |
| `type`         | _string_                             | Indicates the type of button.                                  | -       |
| `variant`      | _fill_ / _hollow_ / _line_           | Determines the visual style of the button.                     | _fill_  |
| `radius`       | _none_ / _sm_ / _md_ / _lg_ / _full_ | Sets the border radius of the button.                          | _none_  |
| `color`        | _string_                             | Specifies the text color of the button.                        | -       |
| `bgColor`      | _string_                             | Specifies the background color of the button.                  | -       |
| `buttonText`   | _string_ (required)                  | The text content to be displayed inside the button.            | -       |
| `startContent` | _ReactNode_                          | Additional content to be displayed at the start of the button. | -       |
| `endContent`   | _ReactNode_                          | Additional content to be displayed at the end of the button.   | -       |

### Button Events

| Attribute | Type                | Description                                       |
| --------- | ------------------- | ------------------------------------------------- |
| `onClick` | _MouseEventHandler_ | Function to be called when the button is clicked. |

---

## Contributing

Contributions are welcome! If you have any improvements, bug fixes, or features, feel free to open an issue or create a pull request on GitHub.

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/space-ibrahimstudio/ibrahimstudio/blob/master/LICENSE) file for details.
