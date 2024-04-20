<div align="center">
    <img width="20%" src="https://raw.githubusercontent.com/space-ibrahimstudio/ibrahimstudio/master/public/image/iss-logo.png" alt="@ibrahimstudio/function" />
    <div align="center">
      <h1>@ibrahimstudio/function</h1>
      <h3>by: Ibrahim Space Studio</h3>
      <p>This package provides useful JavaScript functions for handling events and string manipulations.</p>
    </div>
</div>

---

## 1. Installation

You can install this package via npm:

```sh
npm i @ibrahimstudio/function
# or
yarn add @ibrahimstudio/function
```

## 2. Usage

### 2.1. `scrollView` function

A lightweight utility function to smoothly scroll to a specified element on the page.

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

---

### 2.2. `toTitleCase` function

A simple npm package that converts a string to title case.

```javascript
import { toTitleCase } from "@ibrahimstudio/function";

// Example usage:
const title = toTitleCase("hello world");
console.log(title); // Output: "Hello World"
```

---

### 2.3. `formatDate` function

A simple npm package for formatting dates using the Intl.DateTimeFormat API.

```javascript
import { formatDate } from "@ibrahimstudio/function";

// Format a date string
const formattedDate = formatDate("2024-04-20T12:00:00", "en-US");
console.log(formattedDate);
// Output: April 20, 2024, 12:00 PM
```

## 3. API

### 3.1. `scrollView` Props

| Attribute | Type                | Description                                              | Default |
| --------- | ------------------- | -------------------------------------------------------- | ------- |
| `offset`  | _number_ (required) | The offset in pixels from the top of the target element. | -       |
| `id`      | _string_ (required) | The id of the target element to scroll to.               | -       |

> Note: If the `offset` has no value, fill it with `0`

---

### 3.2. `toTitleCase` Props

| Attribute | Type                | Description                                     | Default |
| --------- | ------------------- | ----------------------------------------------- | ------- |
| `str`     | _string_ (required) | The input string to be converted to title case. | -       |

---

### 3.3. `formatDate` Props

| Attribute    | Type                | Description                       | Default |
| ------------ | ------------------- | --------------------------------- | ------- |
| `dateString` | _string_ (required) | A string representing the date.   | -       |
| `locale`     | _string_            | The locale to use for formatting. | _en-US_ |

## Contributing

Contributions are welcome! If you have any improvements, bug fixes, or features, feel free to open an issue or create a pull request on GitHub.

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/space-ibrahimstudio/ibrahimstudio/blob/master/LICENSE) file for details.
