import { useEffect, useState } from "react";
import styles from "./style.module.scss";
import { useProfile } from "../../../../hooks/useProfile";
import { useLastMatches } from "../../../../hooks/useLastMatches";
import { useWinrate } from "../../../../hooks/useWinrate";

export function Result() {
    let id = '1417360561';
    const { data, isError, isLoading, isSuccess } = useProfile(id);
    const [matches, setMatches] = useState([]);
    const { data: dataMatches, isSuccess: isSuccessMatches } = useLastMatches(id);
    const { data: winrate, isSuccess: isSuccessWinrate } = useWinrate(id);

    useEffect(() => {
        if (isSuccessMatches) {
            setMatches(dataMatches);
            console.log(dataMatches);
        }
    }, [isSuccessMatches]);

    useEffect(() => {
        if (isSuccessWinrate) {
            console.log(winrate);
        }
    }, [isSuccessWinrate]);

    console.log(typeof winrate);

    return (
        <>
            {isLoading ? (
                <div>Загрузка</div>
            ) : (
                <div className={styles.profile}>
                    <div className={styles.profile__header}>
                        <img className={styles.profile__header_img} src={data?.profile.avatarfull} alt="Profile Avatar" />
                        <div className={styles.profile__header_textBlock}>
                            <div className={styles.profile__header_names}>
                                {data?.profile.name ? (
                                    <h2 className={styles.profile__header_name}>{data?.profile.name}</h2>
                                ) : (
                                    <h2 className={styles.profile__header_name}>{data?.profile.personaname}</h2>
                                )}
                            </div>
                            <div className={styles.profile__header_ids}>
                                <p className={styles.profile__header_nameId}>Dota ID</p>
                                <p className={styles.profile__header_nameId}>Steam ID</p>
                            </div>
                            <div className={styles.profile__header_winrateBlock}>
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

                                <div className={styles.profile__header_wr}>
                                    <p className={winrate !== null && winrate >= 50 ? styles.profile__header_positive : styles.profile__header_negative}>
                                        {winrate !== null ? winrate.toFixed(2) : "0.00"} %
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}