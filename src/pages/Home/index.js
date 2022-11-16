import React from "react";
import { Button } from "antd-mobile";
import { Route, Routes } from "react-router-dom";
import News from "../News";


export default class Home extends React.Component {

    x = () => {
        console.log("test =========")
    }

    render() {

        return (
            <div style={{ backgroundColor: 'skyblue', padding: 30 }}>
                
                home List &nbsp;

                <Button onClick={this.x}>点击</Button>
           
                <Routes>
                    <Route path="/news" element={<News />}></Route>
                </Routes>

            </div>
        )

    }
}







