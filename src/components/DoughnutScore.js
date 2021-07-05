import { Doughnut } from 'react-chartjs-2';


const DoughnutScore = ({ score }) => {
    
    const chartdata = {
        datasets: [
            {
                data: [100-score, score],
                backgroundColor: [
                    'rgba(255, 99, 132, 0)',
                    'rgba(54, 162, 235, 0.7)',

                ],

                borderWidth: 0,
               


            },
        ],
    };
    return (
        <>
            <div className="chart-score">
                {score ? <Doughnut data={chartdata} width={10}
                    height={50}
                    options={{
                        responsive: true,
maintainAspectRatio: false, cutout: 60,  }} /> : <h2>No Score available</h2>}
            </div>
            <div className="overlay-score"> {score} </div>
            <h4> metacritic score</h4>
            <button className="overlay-btn"> Learn More </button>

            </>
        
        )
}

export default DoughnutScore