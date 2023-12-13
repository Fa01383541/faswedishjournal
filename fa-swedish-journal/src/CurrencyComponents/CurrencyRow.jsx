/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React from 'react'
import '../CurrencyEx.css'
import PropTypes from 'prop-types'


function CurrencyRow({currencyOptions,selectedCurrency,
    onChangeCurrency,amount,onChangeAmount}) {
    return (
    <div>
      <input type="number" className="input" value={amount} onChange={onChangeAmount}/>
      <select className='CurrencySelectBox' value ={selectedCurrency} onChange={onChangeCurrency}>
        {currencyOptions.map(option =>(
        <option key={option} value={option}>{option}</option>
        ))}
      </select>
    </div>
  );
}
CurrencyRow.propTypes={
    currencyOptions:PropTypes.array.isRequired,
    selectedCurrency:PropTypes.string.isRequired,
    onChangeCurrency: PropTypes.func.isRequired,
    amount:PropTypes.any.isRequired,
    onChangeAmount:PropTypes.any.isRequired,
};

export default CurrencyRow;