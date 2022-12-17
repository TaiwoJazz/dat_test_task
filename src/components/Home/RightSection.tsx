import { products } from './Data';
import compare from '../../assets/home/comparison.svg';
import cart from '../../assets/home/shopping-cart.svg';
import previous from '../../assets/product/previous.svg';
import next from '../../assets/product/next.svg';
import './RightSection.scss';

const RightSection = () => {
  return (
    <div>
      <div className='right_section'>
        <div>
          <select name='sort'>
            <option value='none'>Sort by</option>
            <option value='Title'>Title</option>
            <option value='Price'>Price</option>
            <option value='Date'>Date</option>
          </select>
        </div>

        <div id='products'>
          {products.map((item, i) => (
            <div key={i} className='product_card'>
              <img className='compare' src={compare} alt='compare' />
              <img className='product_image' src={item.image} alt='ckop' />
              <div className='description'>
                <span>
                  <h2>{item.title}</h2>
                  <h3>In stock</h3>
                </span>
                <span className='price_card'>
                  <span>
                    <h1>{item.price} грн</h1>
                    <h4>1 pc</h4>
                  </span>
                  <img src={cart} alt='cart' />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='products_navigation'>
        <span>
          <img src={previous} alt='next' />
        </span>
        <span>1</span>
        <span>2</span>
        <span>...</span>
        <span>6</span>
        <span>7</span>
        <span>
          <img src={next} alt='next' />
        </span>
      </div>
    </div>
  );
};

export default RightSection;
