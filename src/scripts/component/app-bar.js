class AppBar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <section class="header">
      <div class="navbar-container">
        <div class="logo">
          <img src="./images/heros/logotransparent.png" alt="logo" />
        </div>
        <button id="hamburger" href="#">☰</button>
      </div>
      <nav class="navbar">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="#/like">Favorite</a></li>
          <li><a href="https://github.com/pepbritisnasetiawan">About Us</a></li>
        </ul>
      </nav>
    </section>
    `;
  }
}

customElements.define('app-bar', AppBar);
