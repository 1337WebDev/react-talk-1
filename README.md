# ReactJS Hooks

## useRandomColor

This hook uses the `useState` hook to create a color state variable, which starts out as an empty string. It also defines two functions:

`getRandomColor`: This generates a random color by selecting six random characters from a string of hexadecimal digits.

`changeColor`: This sets the `color` state variable to a random color by calling `getRandomColor`.

The hook returns an array that includes the current `color` value and the `changeColor` function.
