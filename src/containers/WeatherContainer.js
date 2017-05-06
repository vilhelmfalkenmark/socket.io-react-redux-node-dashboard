import {connect} from "react-redux";
import Weather from "../components/Weather/Weather";
import { fetchWeather } from "../actions/WeatherActions";

function mapStateToProps(state) {
    return ({
     weather: state.weather
    })
}

function mapDispatchToProps(dispatch) {
    return ({
        fetchWeather: () => {
            dispatch(fetchWeather())
        }
    })
}

const WeatherContainer = connect(mapStateToProps, mapDispatchToProps)(Weather)
export default WeatherContainer;
