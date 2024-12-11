// import { Colors } from 'chart.js';
const areaofimporvement = [
    {
      img: "photos/Thinking-face.png", // Replace with the correct path
      title: "Problem Solving",
    },
    {
      img: "photos/Alarm-clock.png", // Replace with the correct path
      title: "Time Management",
    },
    {
      img: "photos/Electricity.png", // Replace with the correct path
      title: "Accuracy",
    },
    {
      img: "photos/🦆 emoji _rocket_.png", // Replace with the correct path
      title: "Speed",
    },
  ];
  
  const renderAreas = (containerId, areas) => {
    const container = document.getElementById(containerId);
    areas.forEach((area) => {
      const areaDiv = document.createElement("div");
      areaDiv.className = "flex flex-wrap justify-center items-center px-[7.72px] py-[9.01px] border-gray-400 border-[2px] rounded-lg w-[70px] h-[87px]";
      areaDiv.innerHTML = `
        <img class="w-[41px] h-[41px]" src="${area.img}" alt="${area.title}">
        <p class="flex text-center text-[7.72px] font-helvetica font-[500]">${area.title}</p>
      `;
      container.appendChild(areaDiv);
    });
  };
  
  // Populate Key Strengths and Areas of Improvement
  renderAreas("strengths", areaofimporvement);
  renderAreas("improvements", areaofimporvement);

  const ctx = document.getElementById('performanceChart').getContext('2d');

  // Function to create a vertical gradient for each bar
  function createVerticalGradient(ctx, chartArea) {
      const { left, right } = chartArea;
      const gradient = ctx.createLinearGradient(left, 0, right, 0); // Horizontal gradient for horizontal bars
      gradient.addColorStop(0, '#FFCFD8'); // Start color
      gradient.addColorStop(1, '#C3E2FF'); // End color
      return gradient;
  }
  
  const performanceChart = new Chart(ctx, {
      type: 'bar',
      data: {
          labels: ['Technical Skills', 'Soft Skills', 'Problem Solving', 'Cultural Fit', 'Leadership'],
          datasets: [{
              label: 'Score',
              data: [80, 70, 75, 60, 50], 
              backgroundColor: function(context) {
                  const chart = context.chart;
                  const {ctx, chartArea} = chart;
                  if (!chartArea) {
                      // This case happens on initial chart render
                      return null;
                  }
                  return createVerticalGradient(ctx, chartArea);
              },
              borderColor: [
                  'rgba(255, 99, 132, 0.2)',
                  'rgba(255, 159, 64, 0.2)',
                  'rgba(255, 205, 86, 0.2)',
                  'rgba(75, 192, 192, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
              ],
              borderWidth: 1,
            
              borderRadius: Number.MAX_VALUE
          }]
      },
      options: {
          indexAxis: 'y',
          scales: {
              x: {
                ticks: {
                    stepSize: 10 // Set y-axis scale interval to 20
                },
                  beginAtZero: true,
                  max: 120,
                  barPercentage: 1, // Decrease bar width to 50% of the category width
                categoryPercentage: 1 
              },
              y:{
                barPercentage: 1, // Decrease bar width to 50% of the category width
                categoryPercentage: 2,
              }
          },
          plugins: {
              legend: {
                  display: false
              }
          }
      }
  });
  
  const ctxRadar = document.getElementById('performanceRadarChart').getContext('2d');
        new Chart(ctxRadar, {
            type: 'radar',
            data: {
                labels: ['Technical Skills', 'Leadership' , 'Problem Solving', 'Cultural Fit','Soft Skills'],
                datasets: [{
                    label: 'Performance',
                    data: [80, 70, 75, 60, 50],
                    backgroundColor: 'rgba(0, 79, 255, 0.40)',
                    borderColor: 'rgba(0, 79, 255, 0.40)',
                    pointBackgroundColor: 'rgba(0, 79, 255, 0.40)',
                    color:'#808080'
                }]
            },
            options: {
                scales: {
                    r: {
                        beginAtZero: true,
                        angleLines: { display: false },
                        suggestedMin: 0,
                        suggestedMax: 100
                    }
                }
            }
        });

        
        const ctxVertical = document.getElementById('verticalBarChart').getContext('2d');

        // Function to create a horizontal gradient for each bar
        function createVerticalGradient(ctx, chartArea) {
            const { top, bottom } = chartArea;
            const gradient = ctx.createLinearGradient(0, top, 0, bottom); // Vertical gradient
            gradient.addColorStop(0, '#FFCFD8'); // Start color
            gradient.addColorStop(1, '#C3E2FF'); // End color
            return gradient;
        }
        
        const chart = new Chart(ctxVertical, {
            type: 'bar',
            data: {
                labels: ['Clarity', 'Confidence', 'Engagement', 'Articulation'],
                datasets: [{
                    label: 'Score',
                    data: [90, 85, 80, 75],
                    backgroundColor: function(context) {
                        const chart = context.chart;
                        const {ctx, chartArea} = chart;
                        if (!chartArea) {
                            // This case happens on initial chart render
                            return null;
                        }
                        return createVerticalGradient(ctx, chartArea);
                    },
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: .1,
                    borderRadius: Number.MAX_VALUE
                }]
            },
            options: {
                scales: {
                    x: {
                        ticks: {
                            font: {
                                size: 6 // Decrease font size for x-axis labels
                            }
                        },
                        barPercentage: 1, // Decrease bar width to 50% of the category width
                        categoryPercentage: 2.5 // Decrease category width to make bars narrower
        
                    },
                    y: {
                        beginAtZero: true,
                        max: 100,
                        ticks: {
                            stepSize: 20 // Set y-axis scale interval to 20
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }
        });