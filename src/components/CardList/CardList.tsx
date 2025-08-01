import React, { SyntheticEvent } from 'react'
import Card from '../Card/Card'
import { CompanySearch } from '../../company'
import { v4 as uuid4 } from 'uuid'

type Props = {
  searchResults: CompanySearch[];
  onPortfolioCreate: (e: SyntheticEvent) => void;
}

const CardList = ({searchResults, onPortfolioCreate}: Props) => {
  return (
   <>
    {searchResults.length > 0 ? (
      searchResults.map((result) => {
        return <Card id={result.symbol} key={uuid4()} searchResult={result} onPortfolioCreate={onPortfolioCreate}/>;
      })
    ): (
      <h1>No results</h1>
    )}
   </>
  )
}

export default CardList