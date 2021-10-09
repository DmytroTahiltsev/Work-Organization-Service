import { Layout, Card } from "antd";
import React, { useEffect, useState } from "react";
var QRCode = require('qrcode.react')
const About:React.FC = () => {
    return(
        <Layout>
            <div className="h100">
                <div style={{display: "flex", justifyContent: "center"}}>
                    <Card title="Study frontend project" extra={<a href="#"></a>} style={{ width: "90%", textAlign: "center", marginTop: "40px" }}>
                        <p>created by Tahiltsev Dmytro</p>
                        <p>using ReactJS, Redux</p>
                        <div style={{fontSize: "1.2em"}}>
                            <p>Source code:</p>
                            <p><a href="https://github.com/DmytroTahiltsev/calendar">https://github.com/DmytroTahiltsev/calendar</a></p>
                            <p>or</p>
                            <p><QRCode value="https://github.com/DmytroTahiltsev/calendar" renderAs="svg" size={256} level="H"/></p>
                        </div>
                    </Card>
                </div>
            </div>
        </Layout>
        
    )
}
export default About