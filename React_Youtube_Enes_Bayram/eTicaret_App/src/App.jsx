import './App.css';
import PageContainer from './container/PageContainer';
import Header from './components/Header';
import RouterConfig from './config/RouterConfig';
import Loading from './components/Loading';
import Drawer from '@mui/material/Drawer';
import { useSelector } from 'react-redux';

function App() {
  const { products } = useSelector((store) => store.basket);

  return (
    <>
      <div>
        <PageContainer>
          <Header />
          <RouterConfig />
          <Loading />
          <Drawer anchor='right' open={true}>
  {products && products.map((product) => (
    <div 
      className='flex-row' 
      key={product.id} 
      style={{
        display: "flex", 
        flexDirection: "row", 
        justifyContent: "flex-start", 
        alignItems: "center", 
        marginTop: "10px", 
        padding: "10px",
        borderBottom: "1px solid #444", // Her ürün arası bir sınır çizgisi
        color: "white", // Metin rengi
        backgroundColor: "#333" // Arka plan rengi
      }}>
      <img 
        src={product.image} 
        width={50} 
        height={50} 
        alt={product.title} 
        style={{
          marginRight: "10px" // Resim ile metin arasındaki boşluk
        }} 
      />
      <p style={{
        margin: "0 10px 0 0", // Metnin sağ tarafındaki boşluk
        fontSize: "14px", // Font boyutu
      }}>
        {product.title}
      </p>
      <p style={{
        marginLeft: "auto", // Ürün sayısını sağa yaslar
        fontWeight: "bold", // Yazı tipi kalın
        fontSize: "14px" // Font boyutu
      }}>
        {product.count}
      </p>
    </div>
  ))}
</Drawer>
        </PageContainer>
      </div>
    </>
  );
}
 
export default App;