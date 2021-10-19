import React from 'react';
const Loading = () => {
    return ( 
        <div className="col-12 justify-content-center">
            <div className="spinner-border text-info text-center" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
     );
}
 
export default Loading;