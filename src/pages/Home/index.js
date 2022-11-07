import React from "react";

//import {Route} from 'react-router-dom'


export default class Home extends React.Component{



    render(){

        function x(){

            console.log("test =========")
        }

        return (
            <div>
                home List &nbsp;
                <button onClick={x}> click </button>
            </div>
        )
        
    }
}