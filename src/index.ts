type Options = {
  target: HTMLElement;
  width: number;
  height: number;
};

export function scaleToShow({ target, width, height }: Options) {
  // init container
  setSize(target, width, height);

  if (!isOverflowing(target)) {
    // if it's not overflowing, just keep current state
    return;
  }

  // init algorithm variables
  const ratio = width / height;
  let lowerWidth = width;
  let upperWidth = width;

  // find lower and upper boundaries
  do {
    lowerWidth = upperWidth;
    upperWidth = upperWidth * 2;

    setSize(target, upperWidth, upperWidth / ratio);
  } while (isOverflowing(target));

  // use binary search to find the appropriate size
  let finalWidth = Math.floor((lowerWidth + upperWidth) / 2);
  do {
    setSize(target, finalWidth, finalWidth / ratio);

    if (isOverflowing(target)) {
      lowerWidth = finalWidth + 1;
    } else {
      upperWidth = finalWidth;
    }

    finalWidth = Math.floor((lowerWidth + upperWidth) / 2);
  } while (upperWidth > lowerWidth);

  // set final container style
  setStyle(target, finalWidth, finalWidth / ratio, width / finalWidth);
}

function setSize(target: HTMLElement, width = 0, height = 0) {
  target.setAttribute('style', `width: ${width}px; height: ${height}px;`);
}

function setStyle(target: HTMLElement, width = 0, height = 0, scale = 1) {
  target.setAttribute(
    'style',
    `width: ${width}px; height: ${height}px; transform: scale(${scale});`
  );
}

function isOverflowing(target: HTMLElement) {
  return (
    target.scrollHeight > target.clientHeight ||
    target.scrollWidth > target.clientWidth
  );
}
