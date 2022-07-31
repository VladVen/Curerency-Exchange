import style from './body.module.css'
import { useState} from "react";
import CustomInput from "./CustomInput";

const Body = (props) => {


    const [amount1, setAmount1] = useState(1);
    const [amount2, setAmount2] = useState(1);
    const [currency1, setCurrency1] = useState(props.rates[0].rate);
    const [currency2, setCurrency2] = useState(props.rates[0].rate);


    const amount1Change = (amount1) => {
        setAmount2(((amount1 * currency2) / currency1).toFixed(2));
        setAmount1(amount1);
    };

    const currency1Change = (currency1) => {
        setAmount2(((amount1 * currency2) / currency1).toFixed(2));
        setCurrency1(currency1);
    };

    const amount2Change = (amount2) => {
        setAmount1(((amount2 * currency1) / currency2).toFixed(2));
        setAmount2(amount2);
    };

    const currency2Change = (currency2) => {
        setAmount1(((amount2 * currency1) / currency2).toFixed(2));
        setCurrency2(currency2);
    };

    return (
        <div >
            <h3>Choose Currency</h3>
            <div>
                <CustomInput
                    valCurrencies={props.rates}
                    amount={amount1}
                    currency={currency1}
                    amountChange={amount1Change}
                    currentlyChange={currency1Change}
                />
            </div>
            <div>
                <CustomInput
                    valCurrencies={props.rates}
                    amount={amount2}
                    currency={currency2}
                    amountChange={amount2Change}
                    currentlyChange={currency2Change}
                />
            </div>
        </div>
    );
}

export default Body