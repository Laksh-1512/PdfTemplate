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
  