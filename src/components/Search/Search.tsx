import React, { ChangeEvent, MouseEvent, useState } from 'react'

type Props = {}

const Search = (props: Props) => {
    const [search, setSearch] = useState<string>("");
    
    const handleChange = (e: ChangeEvent<HTMLInputElement>) =>{
        setSearch(e.target.value);
        console.log(e);
    }

    const onClick = (e: MouseEvent<HTMLButtonElement>) => {
        console.log(e);
    }

    return (
    <div>
        <input value={search} onChange={(e) => handleChange(e)}></input>
        <button onClick={(e) => onClick(e)}/>
    </div>
  )
}

export default Search