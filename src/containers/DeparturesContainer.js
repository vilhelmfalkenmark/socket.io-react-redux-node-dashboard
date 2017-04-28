import {connect} from "react-redux";
import Departures from "../components/Departures/Departures";
import { fetchTodos } from "../actions/TodoActions";

function mapStateToProps(state) {
    return ({
     departures: state.departures
    })
}

function mapDispatchToProps(dispatch) {
    return ({
        fetchDepartures: () => {
            dispatch(fetchDepartures())
        }
    })
}

const DeparturesContainer = connect(mapStateToProps, mapDispatchToProps)(Departures)
export default DeparturesContainer;
