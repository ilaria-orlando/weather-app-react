import React from 'react';

const Form = (props) => {

    return(

        <div className="form">
            <form method="POST">
                <label htmlFor="city">Please specify your city</label>
                <input type="text" id="city" name="city" />
                    <button onClick={props.call} type="button" id="run">Go!</button>
            </form>
        </div>

    )

}

export default Form