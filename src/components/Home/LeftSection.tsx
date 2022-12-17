import { productCategory, producer, culture, numbers } from './Data';
import './LeftSection.scss';

const LeftSection = () => {
  return (
    <div className='left_section'>
      <p className='left_section_heading'>621 products are shown</p>
      <div className='left_section_product'>
        {productCategory.map((item) => (
          <div key={item.title}>
            <p className='title'>{item.title}</p>
            <p className='price'>({item.price})</p>
          </div>
        ))}
      </div>
      <div className='filter'>
        <p className='heading'>Filter</p>
        <div className='filter_content'>
          <p>Producer</p>
          {producer.map((item) => (
            <div key={item.title}>
              <input type='checkbox' name={item.label} id={item.label} />
              <label htmlFor={item.label}>{item.title}</label>
            </div>
          ))}
        </div>
        <div className='divider' />
        <div className='filter_content'>
          <p>Culture</p>
          {culture.map((item) => (
            <div key={item.title}>
              <input type='checkbox' name={item.label} id={item.label} />
              <label htmlFor={item.label}>{item.title}</label>
            </div>
          ))}
        </div>
        <div className='divider' />
        <div className='filter_content'>
          <p>Number</p>
          {numbers.map((item) => (
            <div key={item.title}>
              <input type='checkbox' name={item.label} id={item.label} />
              <label htmlFor={item.label}>{item.title}</label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LeftSection;
