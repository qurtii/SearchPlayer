import { useEffect, useState } from "react"
import styles from "./style.module.scss"
import { useProfile } from "../../../../hooks/useProfile"

export function Result(){

    const { data, isError, isLoading, isSuccess } = useProfile("321580662")
    // const [winrate, setWinrate] = useState()
    
    // useEffect(() => {
    //     console.log(data)
    //     let all_matches = data.win + data.lose
    //     setWinrate((data.win / all_matches * 100).toFixed(2))
    // }, [data])
    return( 
        <> 
        {isLoading ? 
            (<div>Загрузка</div>) 
            : 
            <div className={styles.profile}> 
                <div className={styles.profile__header}>
                    <img className={styles.profile__header_img} src={data?.profile.avatarfull}/>
                    <div className={styles.profile__header_textBlock}>
                        <div className={styles.profile__header_names}>
                            <h2 className={styles.profile__header_name}>{data?.profile.personaname}</h2>
                            {data?.profile.name ? 
                                <h2 className={styles.profile__header_name}> <em>({data?.profile.name})</em></h2> 
                                :
                                <></>
                            }
                        </div>
                        <div className={styles.profile__header_ids}>
                            <p className={styles.profile__header_nameId}>Dota ID: <span className={styles.profile__header_valueId}>{data?.profile.account_id}</span></p>
                            <p className={styles.profile__header_nameId}>Steam ID: <span className={styles.profile__header_valueId}>{data?.profile.steamid}</span></p>
                        </div>
                        <div className={styles.profile__header_lastMatches}>

                        </div>
                    </div>
                </div>
            </div>
        }
        </>
    )
}