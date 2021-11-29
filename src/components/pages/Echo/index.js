import React, { useContext } from 'react';

const Echo = function (props) {
    console.log("Echo", props);
    return <div className="h100 w100 layout-h center2" style={{
        fontSize: 128,
        color: "#bfbfbf"
    }}>{props.metadata.alias}</div>
}

export default Echo;