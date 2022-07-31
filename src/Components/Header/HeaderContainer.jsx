import style from './header.module.css'
import Header from "./Header";
import {connect} from "react-redux";
import {exchangeRate} from "../../Store/reducers/headerReducer";


const HeaderContainer = (props) => {
    return (
        <div className={style.header}>
            <Header rates={props.rates} exchangeRate={props.exchangeRate}/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    rates: state.header.rates
})

export default connect(mapStateToProps, {exchangeRate})(HeaderContainer)