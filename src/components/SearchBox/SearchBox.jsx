/* eslint-disable react/prop-types */
import css from './SearchBox.module.css';


export default function SearchBox ({value, onSearch}) {
    

    return (
        <div className={css.searchBox}>
            <label htmlFor="searchBox" className={css.label}>Find contacts by name</label>
            <input value={value} onChange={e => onSearch(e.target.value)} type='text' id='searchBox' className={css.searchInput}></input>
           
        </div>

    )
}