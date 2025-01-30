import { useEffect, useRef, useState } from "react"
import styles from "./style.module.scss"

export function SearchForm(){   
    const searchInput = useRef(null)
    const [searchValue, setSearchValue] = useState('')



    useEffect(() => {
        const inputElement = searchInput.current;

        const handleInput = () => {
            console.log(inputElement.value);
            setSearchValue(inputElement.value);
        };

        if (inputElement) {
            inputElement.addEventListener('input', handleInput);
        }

        

        return () => {
            if (inputElement) {
                inputElement.removeEventListener('input', handleInput);
            }
        };
    }, []);

    return(
        <>
        <div className={styles.search}>
            <form className={styles.search__form}>
                <label className={styles.search__form_title} htmlFor="search">Поиск</label>
                <input 
                    id="search" 
                    className={styles.search__form_input} 
                    type="text" 
                    placeholder="Поиск агента габена (Dota ID)" 
                    ref={searchInput}
                />
                {/* <button className={styles.search__form_btn} type="submit">НАЙТИ</button> */}
                <div className={styles.search__form_div}>
                </div>
            </form>
        </div>
        </>
    )
}