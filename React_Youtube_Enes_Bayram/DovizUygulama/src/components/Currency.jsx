import React from "react";
import "../css/currency.css";
import { FaArrowRight } from "react-icons/fa";
import { useState } from "react";
import axios from "axios";

let BASE_URL = "https://api.freecurrencyapi.com/v1/latest";
let API_KEY = "fca_live_2J6hewwuT4E2t3mNHVX91elSljlw4CBzra85Sktf";

function Currency() {
    // Burası state tanımlamaları için kullanılan kısım
    const [amount, setAmount] = useState(1);
    const [fromCurrency, setFromCurrency] = useState("USD");
    const [toCurrency, setToCurrency] = useState("TRY");
    const [result, setResult] = useState(0);

    const exchange = async () => {
        try {
            const response = await axios.get(`${BASE_URL}?apikey=${API_KEY}&base_currency=${fromCurrency}`);
            const rate = response.data.data[toCurrency];
            if (rate) {
                const calculatedResult = rate * amount;
                setResult(calculatedResult.toFixed(2));
            } else {
                console.error("Geçersiz döviz kuru.");
            }
        } catch (error) {
            console.error("Döviz kurunu alırken bir hata oluştu: ", error);
        }
    };

    return (
        <div className="currency-div">
            <div className="h3">
                <h3>Döviz Kuru Uygulaması</h3>
            </div>
            <div>
                <input
                    type="number"
                    value={amount}
                    onChange={(e) => setAmount(parseFloat(e.target.value) || 0)}
                    className="amount"
                />

                <select onChange={(e) => setFromCurrency(e.target.value)} className="from-currency-option">
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="TRY">TRY</option>
                </select>
                <FaArrowRight className="ok" />

                <select onChange={(e) => setToCurrency(e.target.value)} className="to-currency-option">
                    <option value="TRY">TRY</option>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                </select>

                <input
                    type="number"
                    value={result}
                    readOnly
                    className="result"
                />
            </div>
            <div>
                <button
                    onClick={exchange}
                    className="btn"
                >
                    Çevir
                </button>
            </div>
        </div>
    );
}

export default Currency;