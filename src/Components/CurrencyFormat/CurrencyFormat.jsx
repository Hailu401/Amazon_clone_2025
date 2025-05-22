import numeral from 'numeral'
import React from 'react'

const CurrencyFormat = ({amount}) => {
    const formatedAmount = numeral(amount).format("$0.00")
  return <div>{formatedAmount} </div>;
  
}

export default CurrencyFormat
