/* eslint-disable no-unused-vars */

import React,{useEffect,useState} from "react";
import './CurrencyEx.css'
import './CurrencyComponents/CurrencyRow'
import CurrencyRow from "./CurrencyComponents/CurrencyRow";


const BASE_URL = 'https://open.er-api.com/v6/latest/SEK';

function CurrencyEx()
{
    const[currencyOptions,setCurrencyOptions]=useState([])
    const[fromCurrency,setFromCurrency]=useState()
    const[toCurrency,setToCurrency]=useState()
    const[exchangeRate,setExchangeRate]=useState()
    const[amountInFromCurrency, setAmountInFromCurrency]=useState(1)
    const[amountInToCurrency, setAmountInToCurrency]= useState(1)
    useEffect(()=>{
        fetch(BASE_URL)
        .then(res =>res.json())
        .then(data=>{
            const firstcurrency = Object.keys(data.rates)[0]
            const uniqueCurrency= Array.from(new Set([data.base_code, ...Object.keys(data.rates)]));
            setCurrencyOptions([data.base_code, ...Object.keys(data.rates)])
            setFromCurrency(data.base_code)
            setToCurrency(firstcurrency)
            setExchangeRate(data.rates[firstcurrency])
        });
    },[]);

    useEffect(() => {
        if (fromCurrency != null && toCurrency != null) {
            fetch(`${BASE_URL}?base_code=${fromCurrency}&symbols=${toCurrency}`)
            .then(res => res.json())
            .then(data => {
                const newExchangeRate = data.rates[toCurrency];
                setExchangeRate(newExchangeRate);
                setAmountInToCurrency(amountInFromCurrency * newExchangeRate);
            });
        }
    }, [fromCurrency, toCurrency, amountInFromCurrency]);

    
    function handleFromAmountChange(e) {
        setAmountInFromCurrency(e.target.value);
        setAmountInToCurrency(e.target.value * exchangeRate);
    }

    function handleToAmountChange(e) {
        setAmountInToCurrency(e.target.value);
        setAmountInFromCurrency(e.target.value / exchangeRate);
    }
    return (
    <>
    <div className="bodywrapp">
    <h2 className="title">Taza de Cambio</h2>
    <div className="exchangewrapp">
    <CurrencyRow
        currencyOptions={currencyOptions}
        selectedCurrency={fromCurrency}
        onChangeCurrency={e=>setFromCurrency(e.target.value)}
        onChangeAmount={handleFromAmountChange}
        amount={amountInFromCurrency}
    />
    <div className="equals">=</div>
    <CurrencyRow
      currencyOptions={currencyOptions}
      selectedCurrency={toCurrency}
      onChangeCurrency={e=>setToCurrency(e.target.value)}
      onChangeAmount={handleToAmountChange}
      amount={amountInToCurrency}

    />
    </div>
    </div>
    </>
    );
}

export default CurrencyEx;