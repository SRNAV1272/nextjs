'use client'
import { useEffect, useRef, useState } from 'react'
import bgimage from '../../../public/retailfloor.jpg'
// import camera from '../images/camera.jpg'

const canvasStyle = {
    border: '1px solid black',
    backgroundImage: `url('${bgimage}')`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: '500px 500px',
}

function Camera(props) {

    const { GetData, id } = props
    const canvasRef = useRef(null);
    const contextRef = useRef(null);

    const [isDrawing, setIsDrawing] = useState(false);
    const [coords, setCoords] = useState([])
    const [points, setPoints] = useState({})

    useEffect(() => {
        const canvas = canvasRef.current;
        canvas.width = 500;
        canvas.height = 500;

        const context = canvas.getContext("2d");
        context.lineCap = "round";
        context.strokeStyle = "black";
        context.lineWidth = 5;
        contextRef.current = context;

    }, []);

    useEffect(() => {
        GetData(coords)
    }, [coords])

    const startDrawing = ({ nativeEvent }) => {
        const { offsetX, offsetY } = nativeEvent;
        contextRef.current.beginPath();
        contextRef.current.moveTo(offsetX, offsetY);
        contextRef.current.lineTo(offsetX, offsetY);
        contextRef.current.stroke();

        setCoords(prev => {
            return [...prev, { x: offsetX, y: offsetY }]
        })

        setIsDrawing(true);
        nativeEvent.preventDefault();
    };

    const draw = ({ nativeEvent }) => {
        if (!isDrawing) {
            return;
        }

        const { offsetX, offsetY } = nativeEvent;
        contextRef.current.lineTo(offsetX, offsetY);
        contextRef.current.stroke();

        setCoords(prev => {
            return [...prev, { x: offsetX, y: offsetY }]
        })

        nativeEvent.preventDefault();
    };

    const stopDrawing = () => {
        contextRef.current.closePath();
        setIsDrawing(false);
    };

    useEffect(() => {
        contextRef.current?.fillText(`Camera ${points?.x}, ${points?.y}`, points?.x, points?.y);
        // contextRef.current?.drawImage(camera, 0, 0, points?.x, points?.y)
        const image = new Image(60, 45);
        image.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh1IKwfeq-sfI9s0bFFsVNhlC1idkjNi7UlDYlqyvhKQ&s'
        image.onload = (data) => {
            console.log(data)
        }
        // console.log(camera)
    }, [points])

    function onClick(evt) {
        const { clientX, clientY, offsetX, offsetY, pageX, pageY } = evt.nativeEvent
        console.log('client', clientX, clientY)
        console.log('offset', offsetX, offsetY)
        console.log('page', pageX, pageY)

        setPoints({
            x: offsetX + 4,
            y: offsetY - 5
        })

        // GetData(`canvas-${id} 'x:${offsetX}','y:${offsetY}'`)

    }


    return (
        <canvas className="canvas-container"
            ref={canvasRef}
            onMouseDown={startDrawing}
            onClick={onClick}
            onMouseMove={draw}
            onMouseUp={stopDrawing}
            onMouseLeave={stopDrawing}
            style={canvasStyle}
        >
        </canvas>
    )

}

export default Camera;
