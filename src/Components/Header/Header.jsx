import style from './header.module.css'
import {useEffect} from "react";


const Header = (props) => {

    useEffect(() => {
        props.exchangeRate()
    }, [])

    return (
        <div className={style.header}>
            {props.rates.map((items, index) => (
                <div key={index}>
                    <div className={style.card}>
                        <div>
                            {items.ccy} to {items.base_ccy}
                        </div>
                        <div className={style.cardInfo}>
                            <div>
                                Buy: <b>{items.buy}</b>
                            </div>
                            <div>
                                Sales: <b>{items.sale}</b>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Header