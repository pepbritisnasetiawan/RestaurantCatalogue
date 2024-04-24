import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestoItemTemplate } from '../templates/template-creator';

const Like = {
  async render() {
    return `
      <section class="restaurants">
        <h2 class="heading">Favourite</h2>
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
      const restaurants = await FavoriteRestaurantIdb.getAllRestaurant();
      restaurants.forEach((resto) => {
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

export default Like;
