import React from 'react';
import {Line} from 'react-chartjs-2';

const options = {
	legend: {
            display: false
         },
	maintainAspectRatio: false,
  responsive: true,
  scales: {
    yAxes: [
      {
        display: true,
        gridLines: {
          display: false
        },
				ticks: {
					min: 0,
					max: 5
				}
      }
    ]
  }
};

const styles={
	chartBlock: {
		background: 'white',
		flex: 1,
		borderRadius: '12px',
		height: 'calc(100vh - 230px)',
		boxShadow: "0 0 15px rgba(0, 0, 0, 0.3)",
		margin: '10px',
		textDecoration: 'none',
		padding: '40px',
	}
}
const StudentChart = ({student}) => {
  console.dir(student)
	const {assessments} = student
	const assessmentData = assessments.map(assessment => assessment)
	// data.datasets[1].data = assessmentData
	// data.datasets[0].data = assessmentData.map((assessment) => parseFloat(student.gpa))
	// data.labels = assessmentData.map((assessment, index) => index+1)
	const data = {
	labels: assessmentData.map((assessment, index) => index+1),
	datasets: [
	{
		fill: true,
		lineTension: 0.5,
		backgroundColor: 'rgba(75,192,192,0.4)',
		borderColor: 'rgba(75,192,192,1)',
		borderCapStyle: 'butt',
		borderDash: [],
		borderDashOffset: 0.0,
		borderJoinStyle: 'miter',
		pointBorderColor: 'rgba(75,192,192,1)',
		pointBackgroundColor: '#fff',
		pointBorderWidth: 1,
		pointHoverRadius: 5,
		pointHoverBackgroundColor: 'rgba(75,192,192,1)',
		pointHoverBorderColor: 'rgba(220,220,220,1)',
		pointHoverBorderWidth: 2,
		pointRadius: 1,
		pointHitRadius: 10,
		data: assessmentData
	},
	]
	};
	return (
		<div style={styles.chartBlock}>
			<Line options={options} data={data} />
		</div>
	)
}


export default StudentChart;
