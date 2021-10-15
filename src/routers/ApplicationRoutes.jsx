import { Route } from 'react-router';
import MovieDetail from '../components/MovieDetail';
import { Home } from '../views/Home';
import { Favorites } from '../views/Favorites';

export default function ApplicationRoutes() {
  return (
    <>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/movie/:id" component={MovieDetail}></Route>
      <Route exact path="/favorites" component={Favorites}></Route>

    </>
  );
}
