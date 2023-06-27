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
    material: commerce.productMaterial(),
    price: number.int({max:9999999, min: 10000}),
  } as Product;
}

export function generateManyItems(counter = 20){
  const { commerce, image, number}  = faker;
  const items = [];

  items.push(
    {
      name: 'Xiaomi Redmi Note 12 Pro+ 5G',
      category: 'Tecnologia',
      image: 'https://http2.mlstatic.com/D_NQ_NP_933725-MLA54384359928_032023-O.webp',
      adjetive: 'Smartphone',
      description:'Descubre infinitas posibilidades para tus fotos con las 3 cámaras principales de tu equipo. Pon a prueba tu creatividad y juega con la iluminación, diferentes planos y efectos para obtener grandes resultados.',
      material: 'Amoled',
      price: number.int({max:9999999, min: 10000}),
    },
    {
      name: 'Samsung Galaxy a34',
      category: 'Tecnologia',
      image: 'https://http2.mlstatic.com/D_NQ_NP_680639-MLA54691106460_032023-O.webp',
      adjetive: 'Smartphone',
      description:'Con su potente procesador y memoria RAM de 8 GB tu equipo alcanzará un alto rendimiento con gran velocidad de transmisión de contenidos y ejecutará múltiples aplicaciones a la vez sin demoras.',
      material: 'Vidrio',
      price: number.int({max:9999999, min: 10000}),
    },
    {
      name: 'Celular Infinix Smart 7 Dual Sim 64gb 4gb Ram 5000 Mah',
      category: 'Tecnologia',
      image: 'https://http2.mlstatic.com/D_NQ_NP_824715-MCO69980324574_062023-O.webp',
      adjetive: 'Smartphone',
      description:'Celular Infinix Smart 7 / Adaptador de corriente / Cable USB / Herramienta de expulsión de SIM / Guía del usuario / Cubierta protectora / Tarjeta de garantía.',
      material: 'Plastico',
      price: number.int({max:9999999, min: 10000}),
    },
    {
      name: 'Apple iPhone 13 (128 GB) - Azul medianoche',
      category: 'Tecnologia',
      image: 'https://http2.mlstatic.com/D_NQ_NP_973345-MLA47781591382_102021-O.webp',
      adjetive: 'Smartphone Iphone',
      description:'iPhone 13. El sistema de dos cámaras más avanzado en un iPhone. El superrápido chip A15 Bionic. Un gran salto en duración de batería. Un diseño resistente. Y una pantalla Super Retina XDR más brillante.',
      material: 'Iphone Material',
      price: number.int({max:9999999, min: 10000}),
    },
    {
      name: 'Computador Portátil Lenovo Celeron Ram 4gb Disco 128gb Ssd',
      category: 'Tecnologia',
      image: 'https://http2.mlstatic.com/D_NQ_NP_808002-MCO52030372980_102022-O.webp',
      adjetive: 'Computador',
      description:'iPhone 13. El sistema de dos cámaras más avanzado en un iPhone. El superrápido chip A15 Bionic. Un gran salto en duración de batería. Un diseño resistente. Y una pantalla Super Retina XDR más brillante.',
      material: 'Plastico',
      price: number.int({max:9999999, min: 10000}),
    },
    {
      name: 'Portatil Asus M515da Amd Ryzen 5 16gb 1tb + 500gb 15,6 Fhd',
      category: 'Tecnologia',
      image: 'https://http2.mlstatic.com/D_NQ_NP_667128-MLA52542831241_112022-O.webp',
      adjetive: 'Computador',
      description:'Este portátil es la combinación perfecta de belleza y rendimiento. Impulsado por un procesador Ryzen 5 -3500U, con 16 GB de RAM, , tiene tarjeta gráfica vinculada al procesador AMD Radeon Vega 8, una pantalla FHD de 15.6’’, cuenta con dual disco 500gb SSD + 1 TB HDD, espacio mas que suficiente para guardar documentos, imágenes, música y videos, lo que lo convierte en el portátil ideal para la informática y el entretenimiento diarios.',
      material: 'Plastico',
      price: number.int({max:9999999, min: 10000}),
    }
  )

  for (let index = 0; index < counter; index++) {
    items.push(generateItem());
  }

  return items;
}

