import './App.css'
import ButtonTab from './buttonTab/ButtonTab';
import LikeButton from './likeButton/LikeButton';
import ProductImage from './productImage/productImage';
import Rating from './rating/rating';

function App() {

   const tabTitles = ["Giới thiệu", "Chi tiết", "Đánh giá"];
  const tabDescriptions = [
    "Đây là phần giới thiệu sản phẩm.",
    "Thông tin chi tiết kỹ thuật, thông số và chất liệu.",
    "Đánh giá từ người dùng, chất lượng tốt, giao hàng nhanh.",
  ];

  const productImages = [
  './images/images-list-5/4.jpg',
  './images/images-list-5/2.jpg',
  './images/images-list-5/3.jpg',
  './images/images-list-5/5.jpg',
];

  return (
   <div>
    <div style={{ padding: "20px" }}>
      <h2>Sản phẩm nổi bật</h2>
      <ButtonTab tabs={tabTitles} desc={tabDescriptions} />
    </div>
     <div style={{ padding: '20px' }}>
      <h2>Bài viết: Cách học React hiệu quả</h2>
      <LikeButton like={true} /> {/* hoặc bỏ qua prop `like` nếu mặc định là false */}
    </div>

     <div style={{ padding: '20px' }}>
      <h2>Chi tiết sản phẩm</h2>
      <ProductImage images={productImages} />
    </div>
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
