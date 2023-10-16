export default function FavFood() {
  const foods = [
    {
      name: 'Pizza',
      url: 'https://www.barbarabakes.com/wp-content/uploads/2018/08/Easy-Mini-Pizzas-Plated-Barbara-Bakes.jpg'
    },
    {
      name: 'Sushi',
      url: 'https://en-uk.ecolab.com/-/media/Ecolab/Ecolab-Home/Images/Solutions/FoodRetailSolutions/sushismall.jpg?h=310&iar=0&w=500&hash=840774917D3B45BF7B05CF93CCF64AC8'
    },
    {
      name: 'Burger',
      url: 'https://mcdonalds.com.lb/storage/menu-products/Chicken-Burger.png'
    },
    {
      name: 'Pasta',
      url: 'https://i1.pickpik.com/photos/799/668/870/spaghetti-tomatoes-tomato-sauce-pasta-preview.jpg'
    },
    {
      name: 'Tacos',
      url: 'https://www.norinesnest.com/wp-content/uploads/2017/05/Street-Tacos-2017-6-e1494612977719.jpg.webp'
    }
  ];
  const randomNumber = Math.floor(Math.random() * 14);

  return (
    <>
      <h2>My favorite food is {foods[randomNumber].name}</h2>
      <h4>(Not really this is randomly generated)</h4>
      <img src={foods[randomNumber].url} alt="" />
    </>
  );
}
