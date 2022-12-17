import LeftSection from './LeftSection';
import RightSection from './RightSection';
import leaf from '../../assets/home//leaf.svg';
import { productCategory } from '../Home/Data';
import './Home.scss';

const Home: React.FC<{}> = () => {
  return (
    <>
      <main className='container_wrapper'>
        <section>
          <div className='miniNav'>
            <p>Home</p>
            <span />
            <p>Catalog</p>
            <span />
            <p>Plant protection products</p>
          </div>
          <div className='active_title'>
            <img src={leaf} alt='leaf' />
            <h1>Plant protection products</h1>
            <img src={leaf} alt='leaf' />
          </div>
        </section>
        <section className='product_section'>
          <div className='mobile_filter'>
            <div>
              <span className=''>Filter</span>
              <select name='sort'>
                <option value='none'>Sort by</option>
                <option value='Title'>Title</option>
                <option value='Price'>Price</option>
                <option value='Date'>Date</option>
              </select>
            </div>
            <select name='noname' id=''>
              {productCategory.map((data) => (
                <option key={data.title}>{data.title}</option>
              ))}
            </select>
            <p>621 products are shown</p>
          </div>
          <LeftSection />
          <RightSection />
        </section>
      </main>
      <section className='product_description'>
        <div>
          <span>
            <img src={leaf} alt='leaf' />
            <h1>Засоби захисту рослин</h1>
          </span>
          <p>
            Засоби захисту рослин поділяють на чотири основні види: механічні,
            хімічні, біологічні та агротехнічні. Проте найраціональніше - це їх
            одночасне, правильне поєднання. Найпоширеніший метод - це хімічний.
            Існують тисячі різних видів препаратів хімічного захисту. Але не
            варто їх плутати, а тим більше об′єднувати з хімічними добривами.
            Методи їх впливу на рослини абсолютно протилежні.
          </p>
          <p>
            Необхідно знати і розрізняти хімічні засоби захисту рослин. Адже ці
            препарати мають суоро визначений об′єкт впливу (збудник хвороби,
            комахи-шкідники, вид або родина бур′янів).
          </p>
          <p>
            Отрутохімікати не терплять халатності. Це той тип препарату, який
            недостатньо просто розвести у воді і обприскати ним рослини. Якщо
            отрутохімікати неправильно застосувати, то вони можуть завдати шкоди
            вам, корисним комахам, урожаю.
          </p>
        </div>
      </section>
    </>
  );
};

export default Home;
