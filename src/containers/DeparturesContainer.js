import {connect} from "react-redux";
import Departures from "../components/Departures/Departures";
import { fetchDepartures } from "../actions/DepartureActions";
import { fetchStations } from "../actions/StationActions";

function mapStateToProps(state) {
    return ({
     departures: state.departures,
     stations: state.stations
    })
}

function mapDispatchToProps(dispatch) {
    return ({
        fetchDepartures: () => {
            dispatch(fetchDepartures())
        },
        fetchStations: (query) => {
            dispatch(fetchStations(query))
        }
    })
}

const DeparturesContainer = connect(mapStateToProps, mapDispatchToProps)(Departures)
export default DeparturesContainer;
