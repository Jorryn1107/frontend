import React, { ChangeEvent, SyntheticEvent} from 'react'

type Props = {
    onSearchSubmit: (e: SyntheticEvent) => void;
    search: string | undefined;
    handleSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const Search = ({onSearchSubmit, search, handleSearchChange}: Props) => {
    return (
    <>
        <form onSubmit={onSearchSubmit}>
            <input value={search} onChange={handleSearchChange}/>
        </form>
    </>
  )
}

export default Search