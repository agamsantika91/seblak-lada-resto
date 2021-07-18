import Page from './page';

class HomePage extends Page {
  constructor() {
    super({
      basePageElement: /* html */`
        <hero-element></hero-element>
        <div class="content">
        <h2 class="content__heading">RESTAURANT</h2>
        <section id="/main-content" class="container"></section>
        </div>
      `,
      contentElement: 'resto-list',
    });
  }

  get isHasHeroElement() {
    return true;
  }

  _showContent() {
    this.contentElement.restoList = this._data;
  }
}

customElements.define('home-page', HomePage);
