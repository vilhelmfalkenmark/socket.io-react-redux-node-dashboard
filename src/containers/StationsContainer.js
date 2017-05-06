import {connect} from "react-redux";
import { fetchStations, searchStations, updateStations, deleteStation, checkStation } from "../actions/StationActions";
import Stations from "../components/Stations/Stations";

function mapStateToProps(state) {
    return ({
     stations: state.stations
    })
}

function mapDispatchToProps(dispatch) {
    return ({
        fetchStations: () => {
            dispatch(fetchStations())
        },
        searchStations: (query) => {
            dispatch(searchStations(query))
        },
        updateStations: (stations) => {
            dispatch(updateStations(stations))
        },
        deleteStation: (stationID) => {
             dispatch(deleteStation(stationID))
         },
        checkStation: (stationObject) => {
             dispatch(checkStation(stationObject))
         },
    })
}

const StationsContainer = connect(mapStateToProps, mapDispatchToProps)(Stations)
export default StationsContainer;
