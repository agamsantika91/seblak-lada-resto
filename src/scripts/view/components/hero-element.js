/* eslint-disable max-len */
import heroImage from '../../../public/hero/hero-image.jpg?sizes[]=425,sizes[]=768,sizes[]=1024,sizes[]=1350';
import heroImageWebp from '../../../public/hero/hero-image.jpg?sizes[]=425,sizes[]=768,sizes[]=1024,sizes[]=1350&format=webp';

class HeroElement extends HTMLElement {
  connectedCallback() {
    this._render();
  }

  _render() {
    this.innerHTML = /* html*/ `
      <picture>
        ${this._createSourceElement(heroImage, 'jpeg')}
        ${this._createSourceElement(heroImageWebp, 'webp')}
        <img
          src="${heroImage.src}"        
          width="${heroImage.width}"
          height="${heroImage.height}"
          loading="lazy"
          alt="Gambar Hero"
        />
      </picture>
      <div class="hero_tagline">
        <h1><span>SEBLAK LADA</span></h1>
        <span class="des">SITUS CARI RESTORAN TERBAIK DI INDONESIA</span>
        <a class="btn" href="#main-content">EXPLORE</a>
    </div>
    `;
  }

  _createSourceElement({images}, type) {
    let elements = '';
    images.forEach(({path, width}, index) => {
      elements += /* html*/ `
        <source
          media=${(index < images.length - 1) ?
              `'(max-width: ${width}px)'` :
              `'(min-width: ${images[index-1].width}px)'`}
          srcset="${path}"
          type="image/${type}">
      `;
    });
    return elements;
  }
}

customElements.define('hero-element', HeroElement);
