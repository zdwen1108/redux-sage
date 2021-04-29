import { connect } from "react-redux"

import Product from "../component/Product"

const mapState = state => {
    return {
        state
    }
}

const mapDispatch = dispatch => {
    return {
        log() {
            console.log(123);
        }
    }
}

export default connect(mapState, mapDispatch)(Product);