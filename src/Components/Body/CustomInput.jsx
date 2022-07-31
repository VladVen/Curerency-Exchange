import style from './body.module.css'


const CustomInput = (props) => {

    return (
        <div className={style.body}>
            <input
                type="number"
                value={props.amount}
                onChange={(e) => props.amountChange(e.target.value)}
            />
            <select
                value={props.currency}
                onChange={(e) => props.currentlyChange(e.target.value)}
            >
                {props.valCurrencies.map((item, index) => (
                    <option value={item.rate} key={index}>
                        {item.cc} - {item.txt}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default CustomInput;