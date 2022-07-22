import React from 'react';

import Categories from '../components/Categories';
import Sort from '../components/Sort';
import Skeleton from '../components/PizzaBlock/Skeleton';
import PizzaBlock from '../components/PizzaBlock';

const Home = () => {
  const [items, setItems] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [filteredCategories, setFilteredCategories] = React.useState(0);
  const [sortedCategories, setSortedCategories] = React.useState('rating');
  const [sort, setSort] = React.useState(true);

  React.useEffect(() => {
    return (
      fetch(
        filteredCategories === 0
          ? `https://62d44e105112e98e484db33a.mockapi.io/items?sortBy=${sortedCategories}&order=${
              sort ? 'asc' : 'desc'
            }`
          : `https://62d44e105112e98e484db33a.mockapi.io/items?filter&category=${filteredCategories}&sortBy=${sortedCategories}&order=${
              sort ? 'asc' : 'desc'
            }`
      )
        .then((response) => response.json())
        .then((data) => {
          setItems(data);
          setIsLoading(false);
        }),
      window.scrollTo(0, 0)
    );
  }, [filteredCategories, sortedCategories, sort]);

  return (
    <div className="container">
      <div className="content__top">
        <Categories setFilteredCategories={setFilteredCategories} />
        <Sort
          setSortedCategories={setSortedCategories}
          sort={sort}
          setSort={setSort}
        />
      </div>
      <h2 className="content__title">Все пиццы</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(6)].map((_, index) => <Skeleton key={index} />)
          : items.map((obj) => <PizzaBlock key={obj.id} {...obj} />)}
      </div>
    </div>
  );
};

export default Home;
