import { useParams, Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import Stars from '../components/Stars';
import { useEffect } from 'react';
import { fetchProducts } from '../redux/productsSlice';

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const products = useSelector((state) => state.products.products);

  useEffect(() => {
    if (!products || products.length === 0) {
      dispatch(fetchProducts());
    }
  }, [dispatch, products]);

  if (!products || products.length === 0) {
    return <p>Loading...</p>;
  }

  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return <p>Product not found</p>;

  return (
    <div className='container mx-auto px-4 md:px-8 py-10'>
      <div className='mb-6'>
        <Link
          to='/gallery'
          className='inline-block bg-accent-color text-white px-4 py-2 rounded-md shadow hover:bg-button-hover-color transition-colors duration-300'
        >
          Back to Products
        </Link>
        <Link
          to='/'
          className='inline-block ml-4 bg-gray-500 text-white px-4 py-2 rounded-md shadow hover:bg-gray-700 transition-colors duration-300'
        >
          Back to Home
        </Link>
      </div>
      <h1 className='text-3xl font-bold text-gray-800 mb-6'>
        {product.attributes.productName}
      </h1>

      <div className='md:flex md:space-x-8'>
        <div className='md:w-1/3'>
          <img
            src={product.attributes.images.data[0].attributes.url}
            alt={product.attributes.productName}
            className='w-full h-auto object-cover rounded-lg shadow-lg'
          />
        </div>

        <div className='mt-6 md:mt-0 md:w-1/2'>
          <p className='text-gray-600 mb-6 text-lg leading-relaxed'>
            {product.attributes.description}
          </p>

          <div className='text-2xl font-semibold text-green-color mb-4'>
            {product.attributes.price}$
          </div>

          {product.attributes.size && (
            <div className='mb-6'>
              <h3 className='text-lg font-semibold text-gray-800'>
                Available Sizes:
              </h3>
              <div className='flex space-x-4 mt-2'>
                {product.attributes.size.map((size, index) => (
                  <span
                    key={index}
                    className='px-4 py-2 border rounded-full text-gray-600 bg-gray-100'
                  >
                    {size}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className='flex items-center mb-6'>
            <Stars rating={product.attributes.rating} />
          </div>
        </div>
      </div>

      <div className='mt-10'>
        <h3 className='text-2xl font-semibold text-gray-800 mb-4'>
          Customer Reviews
        </h3>
        {product.attributes.comments &&
        product.attributes.comments.data.length > 0 ? (
          product.attributes.comments.data.map((comment) => (
            <div key={comment.id} className='mb-6 border-t pt-4'>
              <p className='font-semibold'>{comment.attributes.author}</p>
              <p className='text-gray-600 mt-2'>{comment.attributes.text}</p>
              <p className='text-sm text-gray-500 mt-1'>
                {new Date(comment.attributes.createdAt).toLocaleDateString()}
              </p>
            </div>
          ))
        ) : (
          <p className='text-gray-600'>No reviews yet.</p>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
