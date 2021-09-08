import Navbar from '../Components/Navbar'
import '../Styles/waste.css'
import Circle from '../Components/Circle'

export default function Waste(){
    return(
        <div className = "waste">
            <div className = "hor">
                <Circle type = "Useful" num = "10" color = "blue"/>
                <Circle type = "Useless" num = "20" color = "red"/>
                <Circle type = "Harmful" num = "30" color = "yellow"/>
            </div>
        </div>
    );
}