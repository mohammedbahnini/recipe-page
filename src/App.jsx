export default function App() {
  const ingredients = [
    '2-3 large eggs',
    'Salt, to taste',
    'Pepper, to taste',
    '1 tablespoon of butter or oil',
    'Optional fillings: cheese, diced vegetables, cooked meats, herbs'
  ];
  const instructions = [
    {
      order: 1,
      title: 'Beat the eggs',
      text: ' In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture.'
    },
    {
      order: 2,
      title: 'Heat the pan',
      text: 'Place a non-stick frying pan over medium heat and add butter or oil.'
    },
    {
      order: 3,
      title: 'Cook the omelette',
      text: 'Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface.'
    },
    {
      order: 4,
      title: 'Add fillings (optional)',
      text: 'When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette.'
    },
    {
      order: 5,
      title: 'Fold and serve',
      text: 'As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate.'
    },
    {
      order: 6,
      title: 'Enjoy',
      text: 'Serve hot, with additional salt and pepper if needed.'
    }
  ]
  const nutrition = [
    {
      name: 'Calories',
      value: '277kcal'
    },
    {
      name: 'Carbs',
      value: '0g'
    },
    {
      name: 'Protein',
      value: '20g'
    },
    {
      name: 'Fat',
      value: '22g'
    }
  ]

  return (
    <div className="container bg-white md:my-[124px] md:rounded-3xl md:pt-10">

      <div className="-mx-8 md:mx-0  ">
        <img src="/assets/images/image-omelette.jpeg" alt="" className="md:rounded-xl" />
      </div>
      <h1>

        <div className="py-10">
          <div>
            <h1 className="heading-lg text-dark-charcoal mb-6">Simple Omelette Recipe</h1>
            <p className="body text-wenge-brown">An easy and quick dish, perfect for any meal. This classic omelette combines beaten eggs cooked to perfection, optionally filled with your choice of cheese, vegetables, or meats.</p>
          </div>

          <div className="mt-8 bg-snow p-6 rounded-xl">
            <h1 className="heading-sm text-dark-raspberry mb-4">
              Preparation time
            </h1>
            <ul className="flex flex-col gap-2 body">
              <li className="text-wenge-brown flex items-center">
                <span className="text-dark-raspberry block w-4 ml-2 mr-4  font-bold ">
                  <span className="w-1 h-1 bg-dark-raspberry block rounded-full "></span>
                </span>
                <span> <span className="font-bold">Total:</span> Approximately 10 minutes</span>
              </li>
              <li className="text-wenge-brown flex items-center">
                <span className="text-dark-raspberry block w-4 ml-2 mr-4  font-bold ">
                  <span className="w-1 h-1 bg-dark-raspberry block rounded-full "></span>
                </span>
                <span> <span className="font-bold">Preparation:</span> 5 minutes</span>
              </li>
              <li className="text-wenge-brown flex items-center">
                <span className="text-dark-raspberry block w-4 ml-2 mr-4  font-bold ">
                  <span className="w-1 h-1 bg-dark-raspberry block rounded-full "></span>
                </span>
                <span> <span className="font-bold">Coocking:</span> 5 minutes</span>
              </li>
            </ul>
          </div>

          <div className="mt-8">
            <h1 className="heading-md text-brandy-red mb-6">Ingredients</h1>
            <ul className="flex flex-col gap-2">
              {
                ingredients.map((item, index) => (
                  <li className="text-wenge-brown flex items-center body" key={index}>
                    <span className="text-dark-raspberry block w-4 ml-2 mr-4  font-bold ">
                      <span className="w-1 h-1 bg-dark-raspberry block rounded-full "></span>
                    </span>
                    <span>{item}</span>
                  </li>
                ))
              }

            </ul>
          </div>

          <div className="h-[1px] bg-white-coffee my-8"></div>

          <div>
            <h1 className="heading-md text-brandy-red mb-6">Instructions</h1>
            <ul className="flex flex-col gap-2">
              {
                instructions.map((item, index) => (
                  <li className="body flex text-wenge-brown">
                    <span className="ml-2 mr-4 text-brandy-red font-bold w-4 ">{item.order}.</span>
                    <span>
                      <span className="font-bold">{item.title}:</span> {item.text}
                    </span>
                  </li>
                ))
              }

            </ul>
          </div>

          <div className="h-[1px] bg-white-coffee my-8"></div>

          <div>
            <h1 className="heading-md text-brandy-red mb-6">Nutrition</h1>
            <p className="body text-wenge-brown mb-6">The table below shows nutritional values per serving without the additional fillings.</p>

            <ul>
              {
                nutrition.map((item, index) => (
                  <li className="flex px-6 gap-4 border-b-[1px] border-white-coffee body py-3 first-of-type:pt-0 last-of-type:border-none last-of-type:pb-0  ">
                    <span className="flex-1 ">{item.name}</span>
                    <span className="flex-1 text-brandy-red font-bold">{item.value}</span>
                  </li>
                ))
              }


            </ul>
          </div>


        </div>
      </h1>
    </div>

  )
}