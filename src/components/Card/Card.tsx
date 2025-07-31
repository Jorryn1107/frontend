import React from 'react'

type Props = {
    companyName: string;
    ticker: string;
    price: number;
}

const Card = ({companyName, ticker, price}: Props) => {
  return (
    <div className="card">
        <div className="details">
            <h2>{companyName} ({ticker})</h2>
            <p>{price}</p>
        </div>
        <p className="info">test!</p>
    </div>
  )
}

export default Card