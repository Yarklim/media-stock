export function addEventOnElements(elements, eventType, callback) {
  elements.forEach(el => el.addEventListener(eventType, callback));
}
