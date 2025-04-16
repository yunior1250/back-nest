import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Crear categorías
  const mesa = await prisma.category.create({
    data: {
      name: 'mesa',
      description: 'Categoría de mesas',
      products: {
        create: [
          {
            name: 'mesa de plástico',
            description: 'Mesa hecha de plástico resistente',
            price: 100.0,
            image: 'mesa-de-plastico.jpg',
          },
          {
            name: 'mesa de madera',
            description: 'Mesa hecha de madera de alta calidad',
            price: 200.0,
            image: 'mesa-de-madera.jpg',
          },
        ],
      },
    },
  });

  const sillas = await prisma.category.create({
    data: {
      name: 'sillas',
      description: 'Categoría de sillas',
      products: {
        create: [
          {
            name: 'silla de madera',
            description: 'Silla hecha de madera de alta calidad',
            price: 50.0,
            image: 'silla-de-madera.jpg',
          },
          {
            name: 'sillas de fierro',
            description: 'Sillas hechas de fierro resistente',
            price: 75.0,
            image: 'sillas-de-fierro.jpg',
          },
        ],
      },
    },
  });

  console.log({ mesa, sillas });
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
