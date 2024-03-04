# @ibrahimstudio/function

This package provides useful JavaScript functions for handling events and string manipulations.

## Installation

You can install this package via npm:

```sh
npm i @ibrahimstudio/function
# or
yarn add @ibrahimstudio/function
```

## Usage

### 1. `scrollView`

The `scrollView` function allows you to smoothly scroll to a specific element on the page.

```javascript
import { scrollView } from "@ibrahimstudio/function";

// Assuming the offset value based on the height of the Navbar
// The target element to scroll to is the About section with the "about-us" id

const Homepage = () => {
  return (
    <div id="homepage">
      <nav>
        <button onClick={() => scrollView(-70, "about-us")}>About Us</button>
      </nav>
      <div id="about-us">{/* About Content */}</div>
    </div>
  );
};
```

### scrollView Props

| Attribute | Type                | Description                                          | Default |
| --------- | ------------------- | ---------------------------------------------------- | ------- |
| `offset`  | _number_ (required) | The offset from the top of the element to scroll to. | -       |
| `id`      | _string_ (required) | The ID of the element to scroll to.                  | -       |

> Note: If the `offset` has no value, fill it with `0`

---

### 2. `toTitleCase`

The `toTitleCase` function converts a string to title case.

```javascript
import { toTitleCase } from "@ibrahimstudio/function";

// Example usage:
const title = toTitleCase("hello world");
console.log(title); // Output: "Hello World"
```

### toTitleCase Props

| Attribute | Type                | Description                          | Default |
| --------- | ------------------- | ------------------------------------ | ------- |
| `str`     | _string_ (required) | The string to convert to title Case. | -       |

---

## Contributing

Contributions are welcome! If you have any improvements, bug fixes, or features, feel free to open an issue or create a pull request on GitHub.

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/space-ibrahimstudio/ibrahimstudio/blob/master/LICENSE) file for details.
