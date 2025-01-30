import { useProfile } from "../../hooks/useProfile";
import { Header } from "./components/header/Header";
import { Result } from "./components/result/Result";
import { SearchForm } from "./components/searchForm/SearchForm";
import styles from "./style.module.scss"


export function Search(){
    const { data, isError, isLoading, isSuccess } = useProfile();

    if (isSuccess && data){
        console.log(data)
    }

    return(
        <>
        <div className={styles.container}>
            <Header/>
            <SearchForm />
            <Result />
        </div>
        </>
    )
}