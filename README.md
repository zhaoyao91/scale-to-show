# Scale to Show

Make the least scale to a fixed-ratio container to show all of its content.

[Demo](https://codesandbox.io/s/scale-to-show-demo-ynk0c)

## Motivation

A world-class avatar component should render the text reasonably.
Some components limit the letters, while others scale down the text but disallowing multiple lines.

We need something better.

## Install

```
npm install scale-to-show
```

```
yarn add scale-to-show
```

## Usage

```
import { scaleToShow } from "scale-to-show";

<div id="outer-container">
  <div id="container">
    ...
  </div>
</div>

scaleToShow({
  target: document.getElementById('container'),
  width: 80,
  height: 60,
});
```

## Caveats

- the algorithm only sets the style of `width`, `height`, `transform` of the container
- for optimization, user cannot set `style` attribute of the container
- for optimization, user cannot apply `margin`, `padding`, `border`, `min/max-width/height` css to the container

## Algorithm

- setup a fixed-size container, put any content (not only text) inside it
- if the content is overflowing, increase the size (keeping ratio) of the container to **just** avoid overflowing
- scale down the container to its original size
- the algorithm complexity is log(n) relative to the size of the container, by using double-and-test to find the range and binary-search to find the final size

## Q&A

### How to display the result properly?

This is just a solution of my choice:

- add `transform-origin: top left` to the container
- create an outer container with the same `width/height` of purpose

### How to center the text?

Add the following css to the container:

```
display: flex;
align-items: center;
justify-content: center;
text-align: center;
```

### How to avoid long-word overflowing?

Add the following css to the container:

```
word-break: break-word;
```
