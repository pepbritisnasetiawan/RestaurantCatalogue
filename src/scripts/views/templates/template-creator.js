/* eslint-disable indent */
import CONFIG from '../../globals/config';

const createDetailRestoTemplate = (restaurant) => `
    <div class="restaurant__address">
        <h2 class="restaurant__title">${restaurant.name}</h2>
        <p>${restaurant.city}</p>
        <p>${restaurant.address}</p>
        <p>⭐️<span class="restaurant_rating_score">${
          restaurant.rating
        }</span></p>
    </div>
    <div class="restaurant__info__container">
        <img class="restaurant_poster" src="${
          CONFIG.BASE_IMAGE_URL_LARGE + restaurant.pictureId
        }" alt="${restaurant.name}" />
        <div class="restaurant__info">
          <div class="restaurant__menu__foods">
            <h3>Foods</h3>
            <ul>
              ${restaurant.menus.foods
                .slice(0, 8)
                .map((food) => `<li>${food.name}</li>`)
                .join('')}
            </ul>
          </div>
          <div class="restaurant__menu__drinks">
            <h3>Drinks</h3>
            <ul>
                ${restaurant.menus.drinks
                  .slice(0, 8)
                  .map((drink) => `<li>${drink.name}</li>`)
                  .join('')}
            </ul>
          </div>
        </div>
    </div>
    <div class="detail__restaurant_review">
        <h4>Reviews</h4>
        <div class="review_content">
            <div class="review_content_item">
              <p>${
                restaurant.customerReviews[
                  restaurant.customerReviews.length - 1
                ]?.review || 'No reviews yet'
              }</p>
            </div>
            <div class="review_content_item">
              <p>${
                restaurant.customerReviews[
                  restaurant.customerReviews.length - 2
                ]?.review || 'No reviews yet'
              }</p>
            </div>
            <div class="review_content_item">
              <p>${
                restaurant.customerReviews[
                  restaurant.customerReviews.length - 3
                ]?.review || 'No reviews yet'
              }</p>
            </div>
        </div>
    </div>
    <div class="restaurant__overview">
        <h3>Description:</h3>
        <p>${restaurant.description}</p>
    </div>
`;

const createRestoItemTemplate = (restaurant) => `
  <article class="restaurant-item">
    <div class="restaurant_item_header">
      <img alt="${restaurant.name}" src="${
  restaurant.pictureId
    ? CONFIG.BASE_IMAGE_URL_LARGE + restaurant.pictureId
    : 'https://restaurant-api.dicoding.dev/images/small/fnfn8mytkpmkfw1e867'
}">
      <div class="restaurant_item_header_rating">
          <p>⭐️<span class="restaurant_rating_score">${
            restaurant.rating
          }</span></p>
      </div>
    </div>
    <div class="restaurant_item_content">
      <h3 class="title"><a href="/#/detail/${restaurant.id}">${
  restaurant.name
}</a></h3>
      <h3 class="city">(${restaurant.city})</h3>
      <p class="description">${restaurant.description}</p>
    </div>
  </article>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

const createFormReviewTemplate = () => `
  <h3>Post Review</h3>
  <form id="reviewForm">
    <label for="name">Nama:</label><br>
    <input type="text" id="name" name="name"><br>
    <label for="review">Review:</label><br>
    <textarea id="review" name="review"></textarea><br><br>
    <input type="submit" value="Submit" id="submit">
  </form>
`;

export {
  createDetailRestoTemplate,
  createRestoItemTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
  createFormReviewTemplate,
};
