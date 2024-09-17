import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Başlangıç durumu
const initialState = {
    products: [],
    selectedProduct: {},
    loading: false,
};

// API için temel URL
const BASE_URL = "https://fakestoreapi.com";

// API'den tüm ürünleri çekmek için asenkron thunk
export const getAllProducts = createAsyncThunk("getAllProducts", async () => {  // İsmi getAllProducts olarak güncelledim
   const response =  await axios.get(`${BASE_URL}/products`);
   return response.data;  // API'den gelen veriyi döndürüyoruz
});

// Slice tanımı
export const productSlice = createSlice({
    name: 'products',  // Slice ismi
    initialState,  // Başlangıç durumu
    reducers: {
        // İsteğe bağlı reducers burada tanımlanabilir
    },
    extraReducers: (builder) => {
        // API isteği sırasında bekleyen durum
        builder.addCase(getAllProducts.pending, (state) =>  {  // Burada getAllProducts kullandık
            state.loading = true;  // Yükleme durumu true yapıldı
        });

        // API isteği başarılı olunca durum güncelleniyor
        builder.addCase(getAllProducts.fulfilled, (state, action) => {
            state.loading = false;  // Yükleme durumu false yapıldı
            state.products = action.payload;  // Gelen ürünler state'e kaydedildi
        });

        // Hata durumu için bir case ekleyin
        builder.addCase(getAllProducts.rejected, (state) => {
            state.loading = false;  // Hata oluştuğunda yükleme durumu false yapılır
            // Hata durumunu da kaydedebilirsiniz, örneğin:
            // state.error = action.error.message;
        });
    }
});

// Özel eylemler olmadığı için şu an boş bırakıldı
export const {} = productSlice.actions;

// Slice'ın reducer'ını dışa aktarıyoruz
export default productSlice.reducer;