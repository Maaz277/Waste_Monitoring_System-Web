import Navbar from '../Components/Navbar'
import '../Styles/depot.css'
import Box from '../Components/Box'
import {useEffect, useState} from 'react'
import api from '../Services/Apis'

export default function Depot(){

    const [d1,setD1] = useState()
    const [d2,setD2] = useState()
    const [d3,setD3] = useState()

    // useEffect(() => {
    //     console.log("asfasfasfas")
    //     const Fetch = async () => {
    //         const one = await api.DEPOT_COUNT(1)
    //         console.log(d1)    
    //         setD1(one)

    //         const two = await api.DEPOT_COUNT(2)
    //         setD2(two)

    //         const three = await api.DEPOT_COUNT(3)
    //         setD3(three)
    //     }
    //     Fetch()
    // },[])

    return(
        <div className = "depot">
            <div className = "hor">
                <div>
                    <h1>Depot 1</h1>
                    <Box num = "22" color = "red"/>
                </div>
                <div>
                    <h1>Depot 2</h1>
                    <Box num = "33" color = "yellow"/>
                </div>
                <div>
                    <h1>Depot 3</h1>
                    <Box num = "16" color = "blue"/>
                </div>
            </div>
        </div>
    );
}