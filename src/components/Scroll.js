import React from 'react';

const Scroll = (props) => {
    return (
        <div style={{ overflowY: 'scroll', maxHeight: '75vh'}} >
            {props.children}
        </div>
    );
}

export default Scroll;