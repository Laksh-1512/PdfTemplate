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
  const performanceChart = new Chart(ctx, {
      type: 'bar',
      data: {
          labels: ['Technical Skills', 'Soft Skills', 'Problem Solving', 'Cultural Fit', 'Leadership'],
          datasets: [{
              label: 'Score',
              data: [80, 70, 75, 60, 50], // Example data
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 205, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
              ],
              borderColor: [
                  'rgba(255, 99, 132, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 205, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                  'rgba(54, 162, 235, 0.2)',
              ],
              borderWidth: 10
          }]
      },
      options: {
          indexAxis: 'y',
          scales: {
              x: {
                  beginAtZero: true,
                  max: 100
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
                labels: ['Technical Skills', 'Soft Skills', 'Problem Solving', 'Cultural Fit', 'Leadership'],
                datasets: [{
                    label: 'Performance',
                    data: [80, 70, 75, 60, 50],
                    backgroundColor: 'rgba(0, 79, 255, 0.40)',
                    borderColor: 'rgba(0, 79, 255, 0.40)',
                    pointBackgroundColor: 'rgba(0, 79, 255, 0.40)'
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

        const verticalGradient = ctxVertical.createLinearGradient(0, 0, 0, 400);
        verticalGradient.addColorStop(0, 'rgba(255, 99, 132, 0.5)');
        verticalGradient.addColorStop(1, 'rgba(47, 62, 70, 0.20)');
    
        new Chart(ctxVertical, {
            type: 'bar',
            data: {
                labels: ['Clarity', 'Confidence', 'Engagement', 'Articulation'],
                datasets: [{
                    label: 'Score',
                    data: [90, 85, 80, 75],
                    backgroundColor: verticalGradient,
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }
        });