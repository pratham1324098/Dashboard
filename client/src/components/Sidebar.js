import React, { useState } from 'react';
import {
    FaTh,
    FaBars,
   
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Dashboard",
            icon:<FaTh/>
        },
        
    ]
    return (
        <div className="container">
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">
                    <img src="data:image/png;base64,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
                    QHOoMwV+hZgsBT6JaBwFK4h/pjjoMYbXtm3eOS3eqEjjpkcNV/4QTfXKxoIqcabhgeVapBGqRSXWZItRrkzrOeWXefsStD5qw9Tzxa0JK1ZC1ZS9aSSXVAirtCVZE9wpl1NRpIsTVRgzPrsrsd7ApV1VJbZCUtdf2lanXFXnJXR2jzT1RbVRmvT4nlETu9oduf4uwRU4BuQ47sCuV6Lu7bi7FG5Zz2tf2zlqwla8lasv8tmbulLvGGrtlSuw0paalLZ5mAfSV7Kp23i9NR9cl3bKYGuVO1sq58fLBE3aQXU7JPapkh7jPr2rGrlqwla8lasquRlex6cYyMPQcZ2BWqpCiLZJQWz6yrIAvIOdFJVoJV3pB1H1p1Zl1x7Iplg1oNZpl8a967YYR0TitODQT7gYPFoj7YahwuThcL3NQO5EBtLobr3Ji4Nv8EyGMcmsth1uskwhgYQp2G2PYRveROkdU5s675SgR9cR1vzSRd7es32BVKbMb8K3ox+uDqX9w/a8laspasJWvJDg1xDxnVWFlnkWm55ixTnQhpp33XWFnnsgTk1Mkr69ropJasJWvJTiMLLkcml9sFD0NG2aV2GCJi7z35dX8yERMjzqy70Gl8csKDMorrRScxtWFfbTL5iVpk3BJ5Zl3TvZPMJa7T+GqSiZPdGpIRcSx9LTLMIkwxa3oaH9xUG6rDKI7ikIYUu9dEwD2IeN3lF2ZqmLZZheFQy08AbfmaDRoKO0J4Q2gIjPLxrr9w507iWduLdX6RQDKEng3tmL2aTBQgsYrzBpadKc5aqH6pyNCffv/T49/+jV8my/V4s3x9eDS0Gex3P++r7n4/+LcfDhc/+8X7jzJbk70E8xdvPJvxb95y7nW91eOT7dL372TxsVgM1n8Hg+Fo+DNZDw7INoto7H2u4y9viEfz8BnIstr4vquojaOwP/YSsv3yBjiZh68PT1b2tle/12TbL042783H3oBwssWjkyE0+E6/B6MR2i9Gi+9kMFgthqNFclgbR3H/LUjifm86nK+X4/mjk/E3w3g0Tsfjn2Vv3E8/0v7q7WM8+ZgUyQqFm355mwcnK1bHpKQ2Fj6UviTP0KABOTDXTdZ5jpb6qJSQ/QL5vWT/Ad4hG5jKKE0zAAAAAElFTkSuQmCC" width="50px"alt="" />
                   </h1>
                    <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;