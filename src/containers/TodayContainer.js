import {connect} from "react-redux";
import {fetchToday} from "../actions/TodayActions";
import Today from "../components/Today/Today";

function mapStateToProps(state) {
    return ({
     today: state.today
    })
}

function mapDispatchToProps(dispatch) {
    return ({
        fetchToday: () => {
            dispatch(fetchToday())
        }
    })
}

const TodayContainer = connect(mapStateToProps, mapDispatchToProps)(Today)
export default TodayContainer;
