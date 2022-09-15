import React, {Component, useEffect} from 'react';
import { Line } from 'react-chartjs-2';
import "./chart.css"


const LineDemo = ({budget, projectId}) => {
    
    useEffect(() => {
        
    }, [budget, projectId])
    
    const budgetValues = budget
    const projectIds = projectId

    const data = {
        labels: projectIds,
        datasets: [
        {
            label: 'Budget ₹',
            fill: true,
            lineTension: 0,
            backgroundColor: 'linear-gradient(97.02deg, rgba(108, 255, 119, 0.07) 5.21%, rgba(108, 255, 119, 0.01) 97.96%)',
            backgroundColor: "rgba(236, 240, 241, 0.6)",
            borderColor: 'rgba(13, 3, 51, 1)',
            borderColor: 'red',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBackgroundColor: 'red',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: budgetValues
    
        },
    
        ]
    
    };
    
    const options = {
        legend: {
        display: false,
        },
        layout:{
        padding: 90
        },
        scales: {
        xAxes: [{
            display: true,
            scaleLabel: {
                display: true,
                labelString: "Project ID",
                fontSize: 30,
                padding: 20,
                fontColor: "black"
            },
            
            
            ticks:{
            padding: 60,
            fontColor: "black",
            fontSize: 15
            },
            gridLines: {
            display: true,
            }
        }],
        yAxes: [{
            display: true,
            scaleLabel: {
                display: true,
                labelString: "₹ Crore",
                fontSize: 30,
                padding: 20,
                fontColor: "black",
            },
            gridLines: {
                display: false,
            },
            ticks:{
            padding: 60,
            fontSize: 20
            },
            type: "linear",
            display: true,
            position: "left"
        }]
        },
        responsive: true,
    
    }
      
  
      return (
        <div className='chart'>
          <Line refs="refs"  data={data} options={options}/>
        </div>
      );
  }






export default LineDemo