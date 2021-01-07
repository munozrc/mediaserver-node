import React from 'react'
import MainNavigation from '../MainNavigation'
import MainHeader from '../MainHeader'

import './normalize.css'
import './styles.css'

const AppLayout = ({ pathNumber, children }) => {

    return (
        <div className="imposter imposter--center-x-start imposter--center-y-reverse">
            <MainNavigation pathNumber={pathNumber} />
            <main className="container container--long-width">
                <MainHeader />
                { children }
            </main>
        </div>
    )
}

export default AppLayout