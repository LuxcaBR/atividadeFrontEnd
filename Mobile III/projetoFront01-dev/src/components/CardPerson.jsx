import React  from "react";

const CardPerson = ({cover, avatar, name, office, stack}) => {
    return (
        <>
            <div className={style.card}>
                <img
                src={cover}
                alt="cover"
                />
                <img
                className={style.avatar}
                scr={avatar}
                alt="avatar"
                />
                <p className={style.p1}>{name}</p>
                <p className={style.p2}>{office}</p>
                <div className={style.stack}>
                    {
                        stack.map((value, i) => (
                            <span key={i}>{value}</span>
                        ))
                    }
            </div>
            </div>
        </>

)
                }
