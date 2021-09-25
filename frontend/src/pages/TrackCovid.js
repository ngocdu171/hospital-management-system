import React from 'react'
import CountrySelector from '../components/CountrySelector'
import Highlight from '../components/Highlight'
import Summary from '../components/Summary'

function TrackCovid() {
    return (
        <div>
            <CountrySelector />
            <Highlight />
            <Summary />
        </div>
    )
}

export default TrackCovid
