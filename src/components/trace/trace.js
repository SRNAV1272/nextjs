import { useEffect, useRef } from 'react'
// import bgimage from '../images/retailfloor.jpg'
import bgimage from '../../../public/retailfloor.jpg'

const canvasStyle = {
    border: '1px solid black',
    backgroundImage: `url('${bgimage}')`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: '500px 500px'
}

function Canvas(props) {
    const canvasRef1 = useRef(null);
    const contextRef1 = useRef(null);
    const { coords1, color } = props

    useEffect(() => {
        const canvas1 = canvasRef1.current;
        canvas1.width = 500;
        canvas1.height = 500;

        const context1 = canvas1.getContext("2d");
        context1.lineCap = "round";
        context1.strokeStyle = "black";
        context1.lineWidth = 2;
        contextRef1.current = context1;
        coords1.forEach(point => {
            parseRecordedLinePoints(point)
        })
    }, []);


    console.log('coords =>', coords1)
    function parseRecordedLinePoints(Point) {
        const { x, y } = Point
        contextRef1.current.beginPath()
        contextRef1.current.lineTo(x, y);
        contextRef1.current.strokeStyle = color
        contextRef1.current.stroke();
        contextRef1.current.closePath();

    }

    useEffect(() => {
        coords1.forEach(point => {
            parseRecordedLinePoints(point)
        })
        // eslint-disable-next-line
    }, [coords1])


    return (
        <div>
            <canvas className="canvas-container"
                ref={canvasRef1}
                style={canvasStyle}
            >
            </canvas>
        </div>
    )

}

export default Canvas;
