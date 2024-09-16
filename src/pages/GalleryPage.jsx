import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import Stars from '../components/Stars';
import { useEffect } from 'react';
import { fetchProducts } from '../redux/productsSlice';

const GalleryPage = () => {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!products || products.length === 0) {
      dispatch(fetchProducts());
    }
  }, [dispatch, products]);

  return (
    <div className='container mx-auto p-horizontal-mobile md:p-horizontal-desktop'>
      <div className='mb-6'>
        <Link
          to='/'
          className='inline-block  bg-gray-500 text-white px-4 py-2 rounded-md shadow hover:bg-gray-700 transition-colors duration-300'
        >
          Back to Home
        </Link>
      </div>
      <div className='grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
        {products.map((product) => (
          <Link
            to={`/products/${product.id}`}
            key={product.id}
            className='group block bg-white shadow-customShadow hover:shadow-lg rounded-lg overflow-hidden transition-transform transform hover:scale-105'
          >
            <div className='relative w-full h-70'>
              <img
                src={`http://localhost:1337${product.attributes.images.data[0].attributes.url}`}
                alt={product.attributes.productName}
                className='w-full h-full object-cover'
              />
            </div>
            <div className='p-4'>
              <h3 className='text-lg font-semibold text-primary-text-color group-hover:text-accent-color'>
                {product.attributes.productName}
              </h3>
              <p className='text-sm text-secondary-text-color mt-2'>
                ${product.attributes.price}
              </p>
              <div className='flex items-center mt-2'>
                <Stars rating={product.attributes.rating} />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default GalleryPage;
