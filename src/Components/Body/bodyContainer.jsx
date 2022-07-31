import style from './body.module.css'
import {connect} from "react-redux";
import Body from "./body";
import {AllCurrExchangeRate} from "../../Store/reducers/bodyReducer";
import {useEffect} from "react";
import Preloader from "../Preloader/Preloader";

const BodyContainer = (props) => {
    useEffect(() => {
        props.AllCurrExchangeRate()
    }, [])

    if (!props.rates) {
        return <Preloader />
    }
    return (
        <div className={style.body}>
            <Body rates={props.rates} AllCurrExchangeRate={props.AllCurrExchangeRate} />
        </div>
    )
}
const mapStateToProps = (state) => ({
    rates: state.body.rates
})

export default connect(mapStateToProps, {AllCurrExchangeRate})(BodyContainer)