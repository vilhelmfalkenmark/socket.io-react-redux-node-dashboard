import {connect} from "react-redux";
import { fetchStations, updateStations } from "../actions/StationActions";
import Stations from "../components/Stations/Stations";

function mapStateToProps(state) {
    return ({
     stations: state.stations
    })
}

function mapDispatchToProps(dispatch) {
    return ({
        fetchStations: (query) => {
            dispatch(fetchStations(query))
        },
        updateStations: (stations) => {
            dispatch(updateStations(stations))
        },

    })
}

const StationsContainer = connect(mapStateToProps, mapDispatchToProps)(Stations)
export default StationsContainer;
