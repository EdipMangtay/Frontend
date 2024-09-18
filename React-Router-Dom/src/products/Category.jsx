import { useParams } from "react-router-dom" // URL parametrelerini almak için kullanılır
import { useEffect, useState } from "react" // useEffect ve useState hook'larını içe aktarır
import ProductCard from "./ProductCard" // Ürün kartı bileşenini içe aktarır

export default function Categories() {
    // URL'den 'categoryName' parametresini alır
    const { categoryName } = useParams()

    // 'categoryProducts' ve 'setCategoryProducts' durumlarını tanımlar
    const [categoryProducts, setCategoryProducts] = useState([])

    // Yüklenme durumu için bir state tanımlar
    const [loading, setLoading] = useState(true)

    // Hata durumu için bir state tanımlar
    const [error, setError] = useState(null)

    // 'categoryName' değiştiğinde veya komponent ilk yüklendiğinde çalışacak olan efekt
    useEffect(() => {
        setLoading(true) // Yüklenme durumunu true yapar

        // Belirtilen kategoriye ait ürünleri fetch eder
        fetch(`https://fakestoreapi.com/products/category/${categoryName}`)
            .then(res => {
                // Yanıtın başarılı olup olmadığını kontrol eder
                if (!res.ok) {
                    throw new Error('Ağ yanıtı başarısız oldu') // Başarısızsa hata fırlatır
                }
                return res.json() // Yanıtı JSON formatına dönüştürür
            })
            .then(data => {
                setCategoryProducts(data) // Ürün verilerini state'e set eder
                setLoading(false) // Yüklenme durumunu false yapar
            })
            .catch(err => {
                console.error(err) // Konsola hatayı yazdırır
                setError(err) // Hata durumunu set eder
                setLoading(false) // Yüklenme durumunu false yapar
            })
    }, [categoryName]) // 'categoryName' değiştiğinde efekti yeniden çalıştırır

    // Yüklenme durumu true ise, yükleniyor mesajını gösterir
    if (loading) {
        return <p>Yükleniyor...</p>
    }

    // Hata durumu varsa, hata mesajını gösterir
    if (error) {
        return <p>Bir hata oluştu: {error.message}</p>
    }

    // Veriler başarıyla yüklendiğinde, kategori adı ve ürün kartlarını render eder
    return (
        <>
            {/* Kategori adını büyük harflerle başlık olarak gösterir */}
            <h1>Category : {categoryName.toUpperCase()}</h1>
            {/* Ürün kartlarını grid düzeninde gösterir */}
            <div className="row row-cols-sm-3 row-cols-md-4">
                {categoryProducts.map(item => (
                    // Her bir ürün için 'ProductCard' bileşenini render eder
                    <ProductCard key={item.id} item={item} />
                ))}
            </div>
        </>
    )
}