import React from 'react'
import { Bar, HorizontalBar } from 'react-chartjs-2';
import { useAuth0 } from '@auth0/auth0-react';
import './YearGraph.css';
import axios from 'axios';
import HomeHeader from '../HomePage/HomeHeader/HomeHeader'

const YearGraph: React.FC = () => {

  const { logout, isAuthenticated } = useAuth0();

  const [chart, setChart] = React.useState({});

  const dataPerYear = async () => {

    let yearlyData: number[] = []
    let yearlyDataCount: number [] = []

    await axios
    .get(`http://178.128.218.253:8000/analytics/year`)
    .then(result => {
      const { year: results } = result.data;
      for (let year of results) {
        yearlyData.push(year._id);
        yearlyDataCount.push(year.count)
      }

      setChart({
        labels: yearlyData,
        datasets: [
          {
            label: "Number of movies released per year",
            data: yearlyDataCount,
            borderWidth: 0,
            backgroundColor: `#1F2833`,
            pointHoverBorderColor: '#810f7c',
          }
        ]
      });
      console.log(yearlyDataCount);
    })
    .catch(err => {
      console.log(err);
    })
  }

  React.useEffect(() => {
    dataPerYear();
    
  }, [])


  return (
    <>
    {isAuthenticated && (
      <div className='chart-container'>
        <HomeHeader />
        <div className='title'>Ever wonder how many movies were released each year?</div>
        <div className='graph'>
          <Bar 
            data={chart}
            height={400}
            width={600}
            options={{
              responsive: true,
             
              scales: {
                yAxes: [
                  {
                    ticks: {
                      autoSkip: true,
                      maxTicksLimit: 10,
                      beginAtZero: true,
                      fontColor: "black"
                    },
                    gridLines: {
                      display: true,
                      color: "#333"
                    },
                  }
                ],
                xAxes: [
                  {
                    ticks: {
                      fontColor: "black",
                      beginAtZero: true
                    },
                    gridLines: {
                      display: false
                    }
                  }
                ],
              }
            }}
          />
        </div>
        <div className='graphSmall'>
          <Bar 
            data={chart}
            height={800}
            width={600}
            options={{
              responsive: true,
              
              scales: {
                yAxes: [
                  {
                    ticks: {
                      autoSkip: true,
                      maxTicksLimit: 8,
                      beginAtZero: true,
                      fontColor: "#1F2833"
                    },
                    gridLines: {
                      display: true,
                      color: "#333"
                    },
                  }
                ],
                xAxes: [
                  {
                    ticks: {
                      fontColor: "#1F2833",
                      beginAtZero: true
                    },
                    gridLines: {
                      display: false
                    }
                  }
                ],
              }
            }}
          />
        </div>  
      </div>
    )}
    </>
  )
}

export default YearGraph;
