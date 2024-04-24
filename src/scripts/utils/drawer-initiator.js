const DrawerInitiator = {
  init({ button, drawer, content }) {
    button.addEventListener('click', (event) => {
      this._toggleDrawer(event, drawer);
    });

    content.addEventListener('click', (event) => {
      this._closeDrawer(event, drawer);
    });

    const links = drawer.querySelectorAll('li');
    links.forEach((link) => {
      link.addEventListener('click', (event) => {
        this._closeDrawer(event, drawer);
      });
    });
  },

  _toggleDrawer(event, drawer) {
    event.preventDefault();
    event.stopPropagation();
    drawer.classList.toggle('open');
    document.body.classList.toggle('active');
  },

  _closeDrawer(event, drawer) {
    event.stopPropagation();
    drawer.classList.remove('open');
    document.body.classList.remove('active');
  },
};

export default DrawerInitiator;
