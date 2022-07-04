import React, { useRef } from 'react';
import styles from './search_header.module.css';

const SearchHeader = ({onSearch}) => {
    const inputRef = useRef();
    const handleSearch = () =>{
        const value = inputRef.current.value;
        console.log(value);
        onSearch(value);

    }

    const onClick =() =>{
        handleSearch();
    };

    const onKeyPress= (event) => {
        if(event.key ==='Enter') {
            handleSearch();   
        }
    };

    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <img className={styles.img} src="/images/logo.png" alt ="youtube logo"/>
                <h1 className={styles.title} >YouTube</h1> 
            </div>
            <input 
                ref={inputRef} className={styles.input} type="search" placeholder="Search" onKeyPress={onKeyPress}></input>
            <button className={styles.button} type="submit" onClick={onClick}>
                <img className={styles.buttonImg}src="/images/search.png" alt="search" />
            </button>
        </header>
    )
    };

export default SearchHeader;