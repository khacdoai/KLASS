
// import { ImAccessibility } from 'react-icons/im'
import './App.css'
import ArticlesList from './components/Articleslist'
import Rating from './components/Rating';
// import ArticleItem from './components/Articleslist/ArticleItem'
// import RenderList01 from './components/RenderList01'
import RenderList04 from './components/RenderList04'
import RenderList05 from './components/RenderList05';

function App() {

  const array = [
     {
    id: 1,
    thumbnail: "./images/1.jpg",
    title: "Ấn tượng đầu tiên Samsung Galaxy A32 4G: Với hơn 6 triệu đã có màn hình Super AMOLED 90Hz",
    addTime: "2025-07-03",
    viewCount: 140,
  },
  {
    id: 2,
    thumbnail: "./images/3.jpg",
    title: "Google Pixel 5a dự kiến sẽ được ra mắt cùng thời điểm với Android 12",
    addTime: "2025-07-03",
    viewCount: 127,
  },
  {
    id: 3,
    thumbnail: "./images/2.jpg",
    title: "Galaxy A52 4G lộ diện trên Google Play Console Xác nhận dùng chip Snapdragon 720",
    addTime: "2025-07-03",
    viewCount: 55,
  },
  {
    id: 4,
    thumbnail: "./images/1.jpg",
    title: "Galaxy A82 5G chuẩn bị ra mắt với chip flagship và màn hình trượt độc đáo, Samfans gom lúa đi là vừa",
    addTime: "2025-07-03",
    viewCount: 55,
  }
    
  ];
  const  IAccessoryProps  = [
  {
    id: 1,
    title: 'Cáp chuyển đổi USB-C sang SD',
    thumbnail: './images/type-c-20-w.png',
    price: 1290000,
    oldPrice: 790000,
    discountPercent: 25,
  },
  {
    id: 2,
    title: 'Adapter sạc Apple Type C 20W',
    thumbnail: './images/Apple-USBC-To-SDCard-A.jpg',
    price: 520000,
  },
  {
    id: 3,
    title: 'Cáp sạc Lightning 2m',
    thumbnail: './images/cap.jpg',
    price: 840000,
  },
  {
    id: 4,
    title: 'AirPods 3',
    thumbnail: './images/airpod-3.png',
    price: 890000,
    oldPrice: 1450000,
    discountPercent: 20,
  },
];

  // const array2 = [
  //   {
  //     url : "./images/cap.jpg",
  //     content : 'Cáp chuyển đổi USB_C sang SD',
  //     pice : '1290.000',
  //     unpice : '790.000'

  //   },
  //   {
  //     url : "./images/airpod-3.png",
  //     content : 'Cáp chuyển đổi USB_C sang SD',
  //     pice : '1290.000',
  //     unpice : '790.000'

  //   },
  //   {
  //     url : "./images/Apple-USBC-To-SDCard-A.jpg",
  //     content : 'Cáp chuyển đổi USB_C sang SD',
  //     pice : '1290.000',
  //     unpice : '790.000'

  //   },
  //   {
  //     url : "./images/type-c-20-w.png",
  //     content : 'Cáp chuyển đổi USB_C sang SD',
  //     pice : '1290.000',
  //     unpice : '790.000'

  //   }
    
  // ]

  return (
    // <div style={{display: 'flex'}}>
    //   {array.map((item)=>{
    //     return (
    //     <RenderList01 urlImage={item.url} 
    //     content={item.content}
    //     view={item.view}      
    //     />
    //     )
    //   })}
      
    // </div>
    // <RenderList04 />

    // 
    <div>
      <ArticlesList data = {array} />  
      <RenderList04 data={IAccessoryProps} />
      <RenderList05 />
      <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          padding: '10px 0',
        }}
      >
        <h3 style={{ fontSize: 16, margin: 0, fontWeight: 500 }}>Chọn đánh giá của bạn</h3>
        <Rating />
      </div>
            
        
      </div>
        
  )
}

export default App
