import '../Styles/circle.css'

export default function Circle(props){
    return(
        <div>
            <div className='circle-outer'>
                <div style = {{border: `30px solid ${props.color}`}} className='circle-inner'>
                    <h1>{props.num}%</h1>
                </div>
            </div>
            <div className='color'>
                <div style = {{backgroundColor: props.color}} className='box'></div>
                <h1 className='name'>{props.type}</h1>
            </div>
        </div>
        
    );
}