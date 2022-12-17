import { Link } from 'react-router-dom';
import Logo from '../../../assets/Logo.svg';
import call from '../../../assets/home/call.svg';
import favorite from '../../../assets/home/favorite.svg';
import compare from '../../../assets/home/comparison.svg';
import cart from '../../../assets/home/shopping-cart.svg';
import search from '../../../assets/home/search.svg';
import seed from '../../../assets/home/seeds.svg';
import sapling from '../../../assets/home/sapling.svg';
import fertilizer from '../../../assets/home/fertilizer.svg';
import feed from '../../../assets/home/feed.svg';
import help from '../../../assets/home/help.svg';
import './Header.scss';

const datas = [
  { title: 'Seed', img: seed },
  { title: 'Plants protecting tools', img: sapling },
  { title: 'Fertilizer', img: fertilizer },
  { title: 'Feed group', img: feed },
  { title: 'Help the agronomist', img: help }
];

const Heading: React.FC<{}> = () => {
  return (
    <section className='container_wrapper'>
      <div className='upper_section'>
        <Link to='/' >
          <img src={Logo} alt='Brand Logo' className='brandLogo' />
        </Link>
        <div className='info'>
          <span className='search'>
            <input type='text' placeholder='Search' />
            <div className='divider' />
            <img src={search} alt='search' />
          </span>
          <div className='call'>
            <img src={call} alt='call' />
            <span>
              <p>+38 (067) 115 00 58</p>
              <p>Order feedback</p>
            </span>
          </div>
          <div className='icons'>
            <img src={favorite} alt='favorite' />
            <img src={compare} alt='compare' />
            <img src={cart} alt='cart' />
            <p>0,0 грн</p>
          </div>
        </div>
      </div>
      <div className='lower_section'>
      
        {datas.map((data) => (
          <div className='lower_section_item' key={data.title}>
            <img src={data.img} alt={data.title} />
            <p>{data.title}</p>
          </div>
        ))}
       
      <select name="noname" id="">
      {datas.map((data) => (
          <option key={data.title}>
            {data.title}
          </option>
        ))}
      </select>
      </div>
    </section>
  );
};

export default Heading;
