import React from 'react'

function MainHeading(props) {
    return (
       <React.Fragment>

<div className={props.className}>
    <div className={props.childClass}>
        <p>{props.heading}</p>
    </div>
</div>


       </React.Fragment>
    )
}

export default MainHeading
