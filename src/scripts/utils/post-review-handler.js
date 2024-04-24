import RestaurantDbSource from '../data/restaurant-source';
import UrlParser from '../routes/url-parser';

const PostReviewHandler = async () => {
  const url = UrlParser.parseActiveUrlWithoutCombiner();
  const name = document.querySelector('#name');
  const review = document.querySelector('#review');
  const message = document.querySelector('#message');

  if (!name.value || !review.value) {
    message.innerText = 'Name and review cannot be empty';
    return;
  }

  const data = {
    id: url.id,
    name: name.value,
    review: review.value,
  };

  await RestaurantDbSource.postReview(data);
};

export default PostReviewHandler;
