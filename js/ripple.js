export function ripple(rippleElem) {
  rippleElem.addEventListener('pointerdown', function (e) {
    e.stopImmediatePropagation();

    const rippleBox = document.createElement('div');
    rippleBox.classList.add('ripple');

    this.appendChild(rippleBox);

    const removeRipple = () => {
      rippleBox.animate(
        {
          opacity: 0,
        },
        { fill: 'forwards', duration: 200 }
      );
      setTimeout(() => {
        rippleBox.remove();
      }, 1000);
    };

    this.addEventListener('pointerup', removeRipple);
    this.addEventListener('pointerleave', removeRipple);

    const isNotIconBtn = !this.classList.contains('icon-btn');

    if (isNotIconBtn) {
      const rippleSize = Math.max(this.clientWidth, this.clientHeight);

      rippleBox.style.top = `${e.layerY}px`;
      rippleBox.style.left = `${e.layerX}px`;
      rippleBox.style.width = `${rippleSize}px`;
      rippleBox.style.height = `${rippleSize}px`;
    }
  });
}
