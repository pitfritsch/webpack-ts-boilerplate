function component() {
  const element = document.createElement('div');

  const text : string[] = ['Hello', 'webpack']

  element.innerHTML = text.join(' ');

  return element;
}

document.body.appendChild(component());