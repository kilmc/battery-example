# Battery Example

This repo contains a simple example of Battery in use.

## How it works
The input directory contains some JSX using class names which will match the naming convention from `battery.config.js` in the root. When you run the cli tool via `yarn build` it scrapes the `input` directory and passes an array of matching class names to the `generateCSS` function from `@battery/core` which then runs and outputs the CSS for each matched class name to `styles/styles.css`