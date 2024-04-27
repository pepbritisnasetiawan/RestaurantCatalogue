import RestaurantDbSource from '../../data/restaurant-source';
import UrlParser from '../../routes/url-parser';
import LikeButtonPresenter from '../../utils/like-button-presenter';
import PostReviewHandler from '../../utils/post-review-handler';
import {
  createDetailRestoTemplate,
  createFormReviewTemplate,
} from '../templates/template-creator';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';

const Detail = {
  async render() {
    return `
      <div id="loading-indicator" style="display: none; position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);">
        <div class="lds-ripple"><div></div><div></div></div>
      </div>
      <div id="error-message" style="display: none;"></div>
      <div class="detail-restaurant"></div>
      <div id="likeButtonContainer"></div>
      <div class="postReview"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const loadingIndicator = document.getElementById('loading-indicator');
    const errorMessage = document.getElementById('error-message');

    try {
      loadingIndicator.style.display = 'block';
      await new Promise((resolve) => {
        setTimeout(resolve, 1000);
      });
      const restaurants = await RestaurantDbSource.detailRestaurant(url.id);
      loadingIndicator.style.display = 'none';

      const restaurantContainer = document.querySelector('.detail-restaurant');
      restaurantContainer.innerHTML = createDetailRestoTemplate(restaurants);

      LikeButtonPresenter.init({
        likeButtonContainer: document.querySelector('#likeButtonContainer'),
        favoriteRestaurants: FavoriteRestaurantIdb,
        restaurant: {
          id: restaurants.id,
          name: restaurants.name,
          city: restaurants.city,
          description: restaurants.description,
          pictureId: restaurants.pictureId,
          rating: restaurants.rating,
        },
      });

      const postReview = document.querySelector('.postReview');
      postReview.innerHTML = createFormReviewTemplate();

      const submit = document.querySelector('#submit');
      submit.addEventListener('click', (event) => {
        event.preventDefault();
        PostReviewHandler();
        location.reload();
      });
    } catch (error) {
      loadingIndicator.style.display = 'none';
      errorMessage.style.display = 'block';
      errorMessage.textContent = 'Terjadi kesalahan saat memuat data.';
    }
  },
};

export default Detail;
