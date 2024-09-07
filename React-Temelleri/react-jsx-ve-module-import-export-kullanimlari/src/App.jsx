import React from "react"; // 1. React kütüphanesini projeye dahil ediyoruz.
import "./App.css"; // 2. Uygulamaya özel CSS dosyasını dahil ediyoruz.


    // 1.	JSX içindeki parantezi JavaScript çalıştırmak için kullanılır.
	// 2.	Bir etiketin muhakkak bitişi olmalıdır (<etiket>...</etiket> => <etiket />).
	// 3.	class bilgisi className diye yazılmalı.
	// 4.	return içinde açıklama için yine süslü parantez kullanılmalı => {/* açıklama */}
	// 5.	style bilgisi { } içinde obje olarak şekilde olmalıdır => {{backgroundColor: "yellow", listStyle: "none", margin: 0, padding: 0}}
	// 6.	map kullanırken muhakkak key bilgisi göndermemiz gerekir.
	// 7.	React componentlerinin ilk harfleri her zaman büyük olmalı. Birden fazla kelime ise her kelimenin ilk harfi büyük olmalı.

function App() {
    //Return ederken HTML yapısını return etmen gerekir
    // JSX yapısı içinde yalnızca bir parent (kapsayıcı) element döndürebilirsin.
    // Return edilen her yapı bir parent etiket içinde olmalı.
    

    // 3. Değişken Tanımlamaları:
    const name = "React"; // name adlı bir string değişken tanımlıyoruz.
    
    const users = ["lorem", "ıpsum", "dolar"]; // 4. users adında bir dizi tanımlıyoruz.
    
    // 5. mapUsers: users dizisini `map` fonksiyonu ile dönüyoruz ve her bir öğeyi `<li>` içinde render ediyoruz.
    const mapUsers = users.map((item, index) => <li key={index}>{item}</li>);

    const isActive = false; // 6. isActive adında bir boolean değişken. Koşullu stil uygulamada kullanılıyor.

    // 7. styles: CSS stil objesi. H2 elementine inline style uygulamak için bu objeyi kullanıyoruz.
    const styles = {
        h2Style: { backgroundColor: "blue", fontSize: "30px" }
    };

    // 8. product: Ürünlerin stok durumunu belirten bir dizi oluşturuyoruz.
    const product = [
        { id: 1, name: "macbook pro 14", inStock: true },
        { id: 2, name: "macbook air", inStock: true },
        { id: 3, name: "ipad pro", inStock: true }
    ];

    // 9. JSX'in return ifadesi: React.Fragment kullanarak JSX yapısını döndürüyoruz.
    return (
        <React.Fragment>
            {/* 10. ClassName ile bir CSS sınıfı ekliyoruz. "bg-red" App.css'den gelen bir stil. */}
            <div className="bg-red">Div içerisindeki Bilgi</div>

            <div>
                {/* 11. Koşullu Stil Uygulaması: isActive değişkenine göre arka plan rengi yeşil veya kırmızı oluyor. */}
                <h2 style={{ backgroundColor: `${isActive ? "green" : "red"}` }}>React{name}</h2>

                {/* 12. Önceden tanımladığımız styles objesini h2 elementine inline style olarak uyguluyoruz. */}
                <h2 style={styles.h2Style}>Kullanıcı Sayısı {users.length}</h2>

                {/* 13. Görsel ekleme: img etiketi ile bir görsel ekleniyor, ancak lorem yerine geçerli bir URL olmalı. */}
                <img src="lorem" alt="" />

                {/* 14. Tekrar className ile "bg-red" sınıfı uyguluyoruz. */}
                <div className="bg-red">bg Red</div>

                {/* 15. users dizisinin 0. ve 1. indekslerindeki değerleri manuel olarak listeye ekliyoruz. */}
                <ul>
                    <li>{users[0]}</li>
                    <li>{users[1]}</li>
                </ul>

                {/* 16. `map` ile users dizisini döngüye alıp, her bir kullanıcıyı liste elemanı (li) olarak render ediyoruz. */}
                <ul>
                    {users.map((item, index) => <li key={index}>{item}</li>)}
                </ul>

                {/* 17. Daha önce mapUsers olarak hazırlanan listeyi sarı arka plan ve sıfırlanmış margin/padding ile görüntülüyoruz. */}
                <ul style={{ backgroundColor: "yellow", listStyle: "none", margin: 0, padding: 0 }}>
                    {mapUsers}
                </ul>

                {/* 18. product dizisini `filter` ile stokta olan ürünleri filtreliyoruz, ardından `map` ile her ürünün ismini büyük harflerle render ediyoruz. */}
                <ul>
                    {product.filter(item => item.inStock).map(item => <li key={item.id}>{item.name.toUpperCase()}</li>)}
                </ul>

                {/* 19. Bir başka bileşen olan Image bileşenini çağırarak, görselin render edilmesini sağlıyoruz. */}
                <ul>
                    <Image />
                </ul>
            </div>
        </React.Fragment>
    );
}

// 20. Image bileşeni: Bir görseli padding, border-radius ve border stilleri ile görüntülüyor.
function Image() {
    return <img src="https://picsum.photos/600/250" alt="" style={{ padding: "4px", borderRadius: "8px", border: "1px solid #bdc3c7" }} />;
}

export default App;