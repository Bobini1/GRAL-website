import React, { useState } from 'react';


const NavbarButton = (props) => {
    const [click, setClick] = useState(false);

    return <button className="h-3/6 rounded-2xl w-20 hover:bg-purple-400 bg-white" onClick={() => setClick(!click)}>
            {props.text}{click ? "ON" : "OFF"}
    </button>;

     }
 export default NavbarButton;
