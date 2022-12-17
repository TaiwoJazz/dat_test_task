import './Footer.scss';
import Logo from '../../../assets/Logo.svg';
import call from '../../../assets/home/call.svg';
import email from '../../../assets/home/email.svg';
import scrollup from '../../../assets/home/scrollup.svg';

const Footer = () => {
  return (
    <section className='footer_container'>
      <div className='footer_wrapper'>
        <div className='footer_content'>
          <div className='logo'>
            <img src={Logo} alt='Brand Logo' />
            <p>Пропонуємо покупцям широкий вибір насіння овочів</p>
          </div>
          <div className='items_wrapper'>
            <div className='items'>
              <h3>Інформація</h3>
              <p>Про компанію</p>
              <p>Оплата і доставка</p>
              <p>Партнери</p>
            </div>
            <div className='items'>
              <h3>Товари</h3>
              <p>Каталог продукції</p>
              <p>Засоби захисту рослин</p>
              <p>Насіння</p>
              <p>Добрива</p>
              <p>Агроному в поміч</p>
            </div>
          </div>
          <div className='items'>
            <h3>Контакти</h3>
            <div className='call'>
              <span>
                <img src={call} alt='call' />
              </span>
              <div>
                <p>+38 (067) 115 00 58</p>
                <p>Order feedback</p>
              </div>
            </div>
            <div className='email'>
              <span>
                <img src={email} alt='email' />
              </span>
              <p>DAT@gmail.com</p>
            </div>
          </div>
        </div>
        <div className='scrollUp'>
          <img src={scrollup} alt='arrow' />
        </div>
        <div className='divider'>
          <div />
          <p>© 2022 DAT</p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
