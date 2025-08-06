
import React from 'react'
import { Quantum } from 'ldrs/react'
import 'ldrs/react/Quantum.css'


export default function Loader() {
    return (
        <div className="loader-overlay">
            <Quantum size={60} speed={1.75} color="black" />
        </div>
    )
}