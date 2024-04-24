import Detail from '../views/pages/detail';
import Hero from '../views/pages/home';
import Like from '../views/pages/like';

const routes = {
  '/': Hero,
  '/detail/:id': Detail,
  '/like': Like,
};

export default routes;
