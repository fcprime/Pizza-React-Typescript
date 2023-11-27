import { Await, useLoaderData } from 'react-router-dom';
import { Product } from '../../Interfaces/product.interface';
import { Suspense } from 'react';

const Product = () => {
  const data = useLoaderData() as { data: Product };

  return (
    <>
      <Suspense fallback={'Loading....'}>
        <Await resolve={data.data}>
          {({ data }: { data: Product }) => <>Product - {data.name}</>}
        </Await>
      </Suspense>
    </>
  );
};

export default Product;
