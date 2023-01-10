import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import {apparel, homegoods, techAccessories} from '../../seed';
import {Nav, Footer, Card} from '../index';
import {Link} from 'react-router-dom';
import {Modal, Radio, Table} from 'antd';
import {HeartOutlined} from '@ant-design/icons';
import {columns, tShirtData, longTShirtData, sweatshirtData} from './ModalData';
import ScrollTo from 'react-scroll-into-view';
import './ProductPage.css';
import '../Nav/Nav.css';
import '../Apparel/Apparel.css';


const initialState = apparel;
const ShirtProductPage = () => {
    const {id} = useParams();
    const [data] = useState(initialState);
    const [size, setSize] = useState(null);
    const [visible, setVisible] = useState(false);
    const [standardShipping, setStandardShipping] = useState({dayName:null, month: null, dayNumber: null});
    const [overnightShipping, setOvernightShipping] = useState({dayName:null, month: null, dayNumber: null});
    const [randomProduct, setRandomProduct] = useState([]);
    const [randomApparel, setRandomApparel] = useState([]);
    const [filteredProduct, setFilteredProduct] = useState([]);

    const combineProduct = data.concat(homegoods).concat(techAccessories);

    useEffect(() => {
        setFilteredProduct(data.find(item => {
            return item.id == id
        }))
    },[id]);

    const handleChange = e => {
        setSize(e.target.value)
    };

    const today = new Date();
    var standard = new Date(today);
    standard.setDate(standard.getDate() + 5);
    
    var overnight = new Date(today);
    overnight.setDate(overnight.getDate() + 1);

    var standardDay = standard.getDay();
    var overnightDay = overnight.getDay();

    const dayOfTheWeek = (value) => {
        if(value === 0){
            return 'Sun'
        } else if (value === 1){
            return 'Mon'
        } else if(value === 2){
            return 'Tues'
        } else if(value === 3){
            return 'Wed'
        } else if(value === 4){
            return 'Thur'
        } else if(value === 5){
            return 'Fri'
        } else if(value === 6){
            return 'Sat'
        }
    };

    let monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];

    let standardMonth = monthNames[standard.getMonth()];
    let overnightMonth = monthNames[overnight.getMonth()];
    let standardDate = standard.getDate();
    
    useEffect(() => {
        setStandardShipping({dayName: dayOfTheWeek(standardDay), month: standardMonth, dayNumber: standardDate})
    }, [standardDate, standardDay, standardMonth]);

    useEffect(() => {
        setOvernightShipping({dayName: dayOfTheWeek(overnightDay), month: overnightMonth, dayNumber: overnight.getDate()})
    }, [overnightDay, overnightMonth]);

    useEffect(() => {
        setRandomProduct(combineProduct.sort(() => 0.5 - Math.random()).slice(0, 6));
        const dataCopy = [...data];
        setRandomApparel(dataCopy.sort(() => 0.5 - Math.random()).slice(0,4));
    }, [filteredProduct]);

    return(
        <>
        <Nav />
        <div className='product_container'>  
            <img src={filteredProduct.photo} className='product_image' alt={filteredProduct.name}/>
            <div className='right'>
                <div className='top_right'>
                    <p>{filteredProduct.name}</p>
                    <p>${filteredProduct.price} USD</p>
                    <p className='fourPayments'> 
                       <quadpay-widget className='quadpay' logoColor="#1d75ec"/>
                    </p>
                    <div className='size_container'>
                        <p className='size'>Size: {size} </p>
                        <div className='size_container_right'>
                            <img src={process.env.PUBLIC_URL + '/assets/icons/ruler.svg'} alt='ruler'/>
                            <button onClick={() => setVisible(true)}>
                                Size Chart
                            </button>
                            <Modal
                                className='modal'
                                footer={null}
                                centered
                                visible={visible}
                                onCancel={() => setVisible(false)}
                                width={1000}   
                            >
                                <div className='modal_tables' style={{ height: '500'}}>
                                <div className='modal_table'>
                                    <h2 className='modal_header'> Adult Tee Size Chart </h2>
                                    <Table columns={columns} dataSource={tShirtData} bordered pagination={false}/>
                                </div>
                                <div className='modal_table'>
                                    <h2 className='modal_header'> Adult Long-Sleeve Tee Size Chart </h2>
                                    <Table columns={columns} dataSource={longTShirtData} bordered pagination={false}/>
                                </div>
                                <div className='modal_table'>
                                    <h2 className='modal_header'> Adult Hooded Sweatshirt Size Chart </h2>
                                    <Table columns={columns} dataSource={sweatshirtData} bordered pagination={false}/>
                                </div>
                                </div>
                            </Modal>
                        </div>
                    </div>
                    <Radio.Group className='radio_button' buttonStyle="solid" checked={false} onChange={handleChange}>
                        <Radio.Button value="XS">XS</Radio.Button>
                        <Radio.Button value="S">S</Radio.Button>
                        <Radio.Button value="M">M</Radio.Button>
                        <Radio.Button value="L">L</Radio.Button>
                        <Radio.Button value="XL">XL</Radio.Button>
                        <Radio.Button value="1X">1X</Radio.Button>
                        <Radio.Button value="2X">2X</Radio.Button>
                        <Radio.Button value="3X">3X</Radio.Button>
                    </Radio.Group>
                </div>
                <div className='cart_container'>
                    <Link to='/' className='cart_button'>ADD TO CART</Link>
                    <button className='heart_button'>
                        <HeartOutlined className='heart'/>
                    </button>
                </div>
                <div className='shipping'>
                    <p>
                        <img src={process.env.PUBLIC_URL + '/assets/icons/travelling.svg'} alt='traveling'/>
                        Get it by {standardShipping.dayName}, {standardShipping.month} {standardShipping.dayNumber} with standard shipping
                    </p>
                    <p>
                        <img src={process.env.PUBLIC_URL + '/assets/icons/rocket.svg'} alt='rocket'/>
                        Get it by {overnightShipping.dayName}, {overnightShipping.month} {overnightShipping.dayNumber} with overnight shipping
                    </p>
                </div>
            </div>
        </div>
        
        <div className='random_product'>
            <div className='title'> You may also like</div>
            <p>Customers who brought this item also brought</p>

            <div className='container'>
                    {randomProduct.map(item => {
                        const productUrl = item => {
                            if (item.category === 'apparel'){
                                if(item.keywords.includes('Vaporwave')){
                                    return 'vaporwave-aesthetic-clothing-tees-hoodies-merch'
                                } else if(item.keywords.includes('Sad Aesthetic')){
                                    return 'sad-aesthetic'
                                } else if(item.keywords.includes('NSFW')){
                                    return 'nsfw-anime-merch'
                                } else if(item.keywords.includes('Kawaii')){
                                    return 'kawaii-livestyle-accessories'
                                } else if(item.keywords.includes('Senpai')){
                                    return 'japanese-senpai-shirts-and-hoodies'
                                } else if(item.keywords.includes('Waifu')){
                                    return 'japanese-waifu-shirts-and-hoodies'
                                } else if(item.keywords.includes('Cosplay')){
                                    return 'anime-weeb-cosplay-accessories'
                                } else if(item.keywords.includes('Shirt')){
                                    return 'anime-tee-shirts'
                                } else if(item.keywords.includes('Hoodie')){
                                    return 'anime-hoodies-and-sweatshirts'
                                } else if(item.keywords.includes('Socks')){
                                    return 'anime-socks'
                                }
                            } else if (item.category === 'homegoods'){
                                if (item.keywords.includes('Lights')){
                                    return '3d-led-anime-bedroom-lights-lamps'
                                } else if (item.keywords.includes('Pillow')){
                                    return 'anime-kawaii-cartoon-bedroom-pillows'
                                }
                            } else if (item.category === 'techAccessories'){
                                if (item.keywords.includes('Airpod')){
                                    return 'anime-airpod-1-2-pro-cases'
                                } else if (item.keywords.includes('Phone')){
                                    return 'anime-phone-cases'
                                }
                            }
                        }
                        return(
                            <Link to={`/collections/${productUrl(item)}/products/${item.id}`} className='link overlay'key={item.id}>
                                <ScrollTo selector={`#product`} ><Card className='product_card' mini={'miniTop'} item={item} key={item.id}/></ScrollTo>
                            </Link>
                    )})}
            </div> 
        </div>
        
        <div className='similar_products'>
            <div className='title'> Similar Products</div>
            <p>Customers who viewed this item also viewed</p>
            
            <div className='container'>
                    {randomApparel.map(item => {
                        const productUrl = item => {
                            if (item.category === 'apparel'){
                                if(item.keywords.includes('Vaporwave')){
                                    return 'vaporwave-aesthetic-clothing-tees-hoodies-merch'
                                } else if(item.keywords.includes('Sad Aesthetic')){
                                    return 'sad-aesthetic'
                                } else if(item.keywords.includes('NSFW')){
                                    return 'nsfw-anime-merch'
                                } else if(item.keywords.includes('Kawaii')){
                                    return 'kawaii-livestyle-accessories'
                                } else if(item.keywords.includes('Senpai')){
                                    return 'japanese-senpai-shirts-and-hoodies'
                                } else if(item.keywords.includes('Waifu')){
                                    return 'japanese-waifu-shirts-and-hoodies'
                                } else if(item.keywords.includes('Cosplay')){
                                    return 'anime-weeb-cosplay-accessories'
                                } else if(item.keywords.includes('Shirt')){
                                    return 'anime-tee-shirts'
                                } else if(item.keywords.includes('Hoodie')){
                                    return 'anime-hoodies-and-sweatshirts'
                                } else if(item.keywords.includes('Socks')){
                                    return 'anime-socks'
                                }
                            } else if (item.category === 'homegoods'){
                                if (item.keywords.includes('Lights')){
                                    return '3d-led-anime-bedroom-lights-lamps'
                                } else if (item.keywords.includes('Pillow')){
                                    return 'anime-kawaii-cartoon-bedroom-pillows'
                                }
                            } else if (item.category === 'techAccessories'){
                                if (item.keywords.includes('Airpod')){
                                    return 'anime-airpod-1-2-pro-cases'
                                } else if (item.keywords.includes('Phone')){
                                    return 'anime-phone-cases'
                                }
                            }
                        }
                        return(
                        <Link to={`/collections/${productUrl(item)}/products/${item.id}`} className='link overlay'key={item.id}>
                            <ScrollTo selector={`#product`}><Card className='product_card' mini={'mini'} item={item} key={item.id}/></ScrollTo>
                        </Link>
                    )})}
            </div> 
        </div>
        <Footer/> 
        </>
    )
}

export default ShirtProductPage;