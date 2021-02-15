import React from 'react'

function Step(props) {
    return (
        <React.Fragment>
            <div className="col-md-4 border-right text-center font" id={props.id}>
                <div className="h2">
                    {props.name}
                </div>
            <div className="height-step d-flex align-items-center">
            <img src={props.source}  className="padding img-fluid" alt="...."/>
            </div>
                <div className="h6">
                    {props.label}
                </div>
            </div>

        </React.Fragment>
    )
}

export default Step
