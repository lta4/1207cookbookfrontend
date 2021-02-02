import React from "react";

const Display = (props) => {
    // DESTRUCTURING COOKBOOK FROM PROPS
    const {cookbooks} = props

    // LOADING FUNCTION FOR IF COOKBOOKS EXIST
    const loaded = () => {
        return (<div style={{textAlign: "center"}}>
            {cookbooks.map(cookbook => {
                return (<article key={cookbook._id}>
                    <h1>{cookbook.title}</h1>
                    <h3>{cookbook.yearPublished}</h3>
                    <button onClick={() => {
                        props.selectCookbook(cookbook)
                        props.history.push("/edit")
                    }}>Edit Cookbook</button>
                    <button onClick={() => {
                        props.deleteCookbook(cookbook)
                    }}>Delete Cookbook</button>
                </article>)
            })}
        </div>)
    }

    const loading = <h1>Loading...</h1>

    return cookbooks.length > 0 ? loaded () : loading;
};

export default Display;