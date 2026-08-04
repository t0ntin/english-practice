export function makeElement(elementTag, className, appendToEl, textInside, listenerFunctionName) {
  const element = document.createElement(elementTag);
  element.classList.add(className);
  if (appendToEl) {
    appendToEl.append(element);
  }
  if (textInside) {
    element.innerText = textInside;
  }
    if (listenerFunctionName) {
    element.addEventListener('click', listenerFunctionName);
  }
  return element;
}


export function makeInputEl(elementTag, className, appendToEl, placeholder, value) {
  const element = document.createElement(elementTag);
  element.classList.add(className);
  if (appendToEl) {
    appendToEl.append(element);
  }
  if (placeholder) {
    element.setAttribute('placeholder', placeholder);
  }
  if (value) {
    element.setAttribute('value', value);
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

export const showNotification = (message, containingElement, top, left) => {
  let popupEl = document.querySelector('.popup-div');
  if (!popupEl) {
    popupEl = makeElement('div', 'popup-div', containingElement);
  }
  if (top) {
    popupEl.style.top = `${top}%`;
  }

  if (left) {
    popupEl.style.left = `${left}%`;
  }
  popupEl.innerText = message;
  popupEl.classList.add('active'); 
  setTimeout(() => {
    popupEl.classList.remove('active'); 
  }, 2000);
}

export const transitionContent = (element, class1, class2) => {
  element.classList.remove(class1);
  element.classList.add(class2);
  setTimeout(() => {
    element.classList.remove(class2);
    element.classList.add(class1);
  }, 200);
}