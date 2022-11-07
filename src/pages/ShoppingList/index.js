import React from "react";

export default class ShoppingList extends React.Component{

    render(){
        return <div className="shopping-list">

            <h1>
                Shoping list in for {this.props.name}
            </h1>
            <ul>
                <li>
                    Instagram
                </li>
                <li>
                    WahtsApp
                </li>
                <li>
                    Oculus
                </li>
            </ul>
            
            
             </div>

    }
}