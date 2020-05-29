# Scale to Show

Make the least scale to a fixed ratio container to show all of its content.  

[Demo](https://codesandbox.io/s/scale-to-show-demo-ynk0c)

Great for avatar text.

## Install

```
npm install scale-to-show
yarn add scale-to-show
```

## Usage

```
import { scaleToShow } from "scale-to-show";

<div class="outer-container">
  <div class="container">
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

- the algorithm only sets the style of `width`, `height`, `transform` to the container
- for the optimization, user cannot set `style` to the container
- for the optimization, user cannot set `margin`, `padding`, `border`, `min/max-width/height` to the container 

## Q&A

### How to display the result properly?

This is just a solution/idea of my choice:

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

### How to avoid long word overflowing?

Add the following css to the container:

```
word-break: break-word;
```
