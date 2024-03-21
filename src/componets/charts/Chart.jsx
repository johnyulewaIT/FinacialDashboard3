import React from 'react';
import {Chart as Chartjs} from "chart.js/auto"
import {Line} from 'react-chartjs-2'
const Chart = () => {
  return (
    <div>
     <Line
        data={{
            labels:['Sun','Mon','Tue','Wed','Thur','Fri','Sat'],
            datasets:[
                {
                    label:'Expenses',
                    data:[20,30,10,20,32,20,15],
                    backgroundColor:[
                        'rgba(255,99,132,0.2)',
                        'rgba(255,162,235,0.2)',
                        'rgba(255,206,86,0.2)',
                        'rgba(255,192,192,0.2)',
                        'rgba(255,102,255,0.2)',
                        'rgba(255,159,64,0.2)',
                    ],
                    borderColor:[
                        'rgba(255,99,132,1)',
                        'rgba(255,162,235,1)',
                        'rgba(255,206,86,1)',
                        'rgba(255,192,192,1)',
                        'rgba(255,102,255,1)',
                        'rgba(255,159,64,1)',
                    ],
                    borderWidth: 1,
                    tension:0.4,
                },
                {
                    label:'Income',
                    data: [47,52,67,58,9,50,40],
                    backgroundColor: 'purple',
                    borderColor: 'purple',
                    borderWidth: 1,
                    tension:0.4,
                }
            ],
        }}
        height={300}
        options={{
            maintainAspectRatio:false,
            scales:{
                yAxes:[
                    {
                        ticks:{
                            beginAtZero:true,
                        },
                    },
                ],
            },
            legend:{
                labels:{
                    fontSize: 25,
                },
            },
        }}
     />
    </div>
  );
}

export default Chart;
