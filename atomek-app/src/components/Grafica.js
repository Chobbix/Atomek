import React from 'react'
import './Estilos/ContPerfil_style.css'
import './Estilos/Scroll_style.css'
import { Pie } from 'react-chartjs-2';
import {Chart, Tooltip, Title, ArcElement, Legend} from 'chart.js'

const Grafica = () => {
    Chart.register(Tooltip, Title, ArcElement, Legend);

    const data = {
        labels: [
            'Likes', 
            'Comunidades', 
            'Publicaciones', 
            'Rachas'
        ],
        datasets:[{
            data:[100, 5, 50, 5],
            backgroundColor: ['#406882', '#212529', '#7AE0ED', '#666666']
        }]
    }
    const opciones={
        responsive: true
    }

    return (
        <div className='grafica-container'>
            <p className="text-black" id='RachaCateg'>Estadisticas</p>
            <div style={{width: '100%', height: 'auto'}}>
                <Pie data={data} options={opciones} />
            </div>
        </div>
    )
}

export default Grafica