import React from 'react'
import './RecentActivities.scss'

export default props => (
    <section className="recent-activities container-fluid p-5">
        <div className="row align-items-center pb-3">
            {props.children}
        </div>
    </section>
)