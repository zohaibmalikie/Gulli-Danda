import React from 'react'

function Step(props) {
    return (
        <React.Fragment>
            <div className="col-md-4 border-right text-center font" id={props.id}>
                <div className="h2">
                    {props.name}
                </div>
            <div className="">
            <img src={props.source} alt="there is image" className="w-150 pt-2 img-fluid"/>
            </div>
                <div className="h6">
                    {props.label}
                </div>
            </div>

        </React.Fragment>
    )
}

export default Step
