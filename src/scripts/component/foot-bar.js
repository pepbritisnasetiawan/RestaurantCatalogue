class Footbar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <section class="footer">
      <span class="footer_title">Miraaii.</span>

      <span class="span-copyright">copyright 2024 @ Miraaii</span>

      <div class="footer-social">
        <a href="#"><i class="fa fa-facebook"></i></a>
        <a href="#"><i class="fa-brands fa-instagram"></i></a>
        <a href="#"><i class="fa-brands fa-twitter"></i></a>
        <a href="#"><i class="fa-brands fa-tiktok"></i></a>
      </div>
    </section>
    `;
  }
}

customElements.define('foot-bar', Footbar);
