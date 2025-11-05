export function makeElement(elementTag, className, appendToEl, textInside) {
  const element = document.createElement(elementTag);
  element.classList.add(className);
  if (appendToEl) {
    appendToEl.append(element);
  }
  if (textInside) {
    element.innerText = textInside;
  }
  
  return element;
}


export function makeInputEl(elementTag, className, appendToEl, placeholder) {
  const element = document.createElement(elementTag);
  element.classList.add(className);
  if (appendToEl) {
    appendToEl.append(element);
  }
  if (placeholder) {
    element.setAttribute('placeholder', placeholder);
  }
  return element;
}

export function makeImage (src, className, appendToeEl) {
  const image = new Image();
  image.src = src;
  if (className) image.classList.add(className);
  if (appendToeEl) appendToeEl.append(image);
  return image;
}
