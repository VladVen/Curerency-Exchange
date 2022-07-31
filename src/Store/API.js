import axios from "axios";


export const headerApi = () => {
    return axios.get(`https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5`
    )
}

export const bodyApi = () => {
    return axios.get(`https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json`
    )
}