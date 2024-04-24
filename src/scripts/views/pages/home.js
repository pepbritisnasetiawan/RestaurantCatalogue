import RestaurantDbSource from '../../data/restaurant-source';
import { createRestoItemTemplate } from '../templates/template-creator';

const Hero = {
  async render() {
    return `
      <section class="hero">
        <div class="hero-heading">
          <h1>Miraaii</h1>
          <p>
            Welcome to our Western Restaurant, where we bring the authentic
            flavors of the West to your plate!
          </p>
          <button>Explore</button>
        </div>
      </section>
      <section class="restaurants">
        <h2 class="heading">Explore Restaurants</h2>
        <div id="loading-indicator" style="display: none;">
          <div class="lds-ripple"><div></div><div></div></div>
        </div>
        <div id="error-message" style="display: none;"></div>
        <div class="cards"></div>
      </section>
    `;
  },

  async afterRender() {
    const loadingIndicator = document.getElementById('loading-indicator');
    const errorMessage = document.getElementById('error-message');
    const cards = document.querySelector('.cards');

    loadingIndicator.style.display = 'block';

    try {
      await new Promise((resolve) => {
        setTimeout(resolve, 1000);
      });
      const restaurant = await RestaurantDbSource.restaurantList();
      restaurant.forEach((resto) => {
        cards.innerHTML += createRestoItemTemplate(resto);
      });
    } catch (error) {
      errorMessage.style.display = 'block';
      errorMessage.textContent = 'Terjadi kesalahan saat memuat data.';
    } finally {
      loadingIndicator.style.display = 'none';
    }
  },
};

export default Hero;
