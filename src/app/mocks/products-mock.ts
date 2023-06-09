import { faker } from "@faker-js/faker";

interface Product{
  name: string
  category: string,
  image: string
  adjetive: string
  description: string,
  price: number,
};

function generateItem(){
  const { commerce, image, number}  = faker;
  const indexItem = number.int({max:3, min: 0});
  const category =  ['Vehiculos', 'Tecnologia', 'Deportes', 'Hogar'][indexItem];
  const searchImages = ['cars,motorcycles', 'iphone,android,windows,office', 'soccer,basketball', 'HouseItems'][indexItem]
  return {
    name: commerce.productName(),
    category: category,
    image: image.urlLoremFlickr({category: searchImages}),
    adjetive: commerce.productAdjective(),
    description: commerce.productDescription(),
    price: number.int({max:9999999, min: 10000}),
  } as Product;
}

export function generateManyItems(counter = 20){
  const items = [];

  for (let index = 0; index < counter; index++) {
    items.push(generateItem());
  }

  return items;
}

