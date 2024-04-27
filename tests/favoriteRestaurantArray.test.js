import { itActsAsFavoriteRestaurantModel } from './contracts/favoriteMovieContract';

let favoriteRestaurant = [];

const FavoriteRestaurantArray = {
  getRestaurant(id) {
    if (!id) {
      return;
    }

    // eslint-disable-next-line consistent-return
    return favoriteRestaurant.find((restaurant) => restaurant.id === id);
  },

  getAllRestaurant() {
    return favoriteRestaurant;
  },

  putRestaurant(restaurant) {
    // eslint-disable-next-line no-prototype-builtins
    if (!restaurant.hasOwnProperty('id')) {
      return;
    }

    // pastikan id ini belum ada dalam daftar favoriteRestaurant
    if (this.getRestaurant(restaurant.id)) {
      return;
    }

    favoriteRestaurant.push(restaurant);
  },

  deleteRestaurant(id) {
    // Cara boros menghapus restaurant dengan meng-copy film yang ada
    // kecuali restaurant dengan id == id
    favoriteRestaurant = favoriteRestaurant.filter(
      (restaurant) => restaurant.id !== id
    );
  },
};

describe('Favorite Restaurant Array Contract Test Implementasion', () => {
  afterEach(() => {
    favoriteRestaurant = [];
  });

  itActsAsFavoriteRestaurantModel(FavoriteRestaurantArray);
});
