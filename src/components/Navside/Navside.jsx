import React from 'react'


export default props =>(
    <nav class="nav flex-column">
        <a class="nav-link" href="#">Link</a>
        {props.children}
    </nav>
)