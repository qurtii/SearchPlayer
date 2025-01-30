import { useEffect, useState } from "react"
import styles from "./style.module.scss"
import { useProfile } from "../../../../hooks/useProfile"
import { useLastMatches } from "../../../../hooks/useLastMatches"

export function Result(){

    const { data, isError, isLoading, isSuccess } = useProfile("321580662")
    const [matches, setMatches] = useState("")
    const { data: dataMatches, isSuccess: isSuccessMatches} = useLastMatches('321580662')

    useEffect(() => {
        if (isSuccessMatches){
            setMatches(dataMatches)
            console.log(matches)
            console.log(dataMatches)
        }
    },[isSuccessMatches])

    
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
                        {matches.length === 0 ? (
                            <p>Нет доступных данных о матчах.</p>
                        ) : (
                            <ul className={styles.profile__header_lastMatches}>
                            {matches.map((match) => {
                                const win = (match.player_slot < 128) === match.radiant_win;
                                return (
                                    <li className={win ? styles.profile__header_win : styles.profile__header_lose} key={match.match_id}>
                                        {win ? 'W' : 'L'}
                                    </li>
                                );
                            })}
                            </ul>
                        )}
                    </div>
                </div>
            </div>
        }
        </>
    )
}