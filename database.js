const base64Img = require('base64-img');

const data = {
    headerimg: base64Img.base64Sync('C:/Users/laksh/Desktop/templatepdf/photos/A4 - 6.png'),
    logo: base64Img.base64Sync('C:/Users/laksh/Desktop/templatepdf/photos/Frame 3.png'),
    title: 'Feedback Report',
    topic: 'Mock DSA',
    date: '21 Sept 2024',
    // interviewimg: base64Img.base64Sync('C:/Users/laksh/Desktop/templatepdf/photos/interviewer-photo.png'),
    // name: 'Komal Kungwani',
    companyname: 'HappyAspirants',
    candidate: {
        name: 'Laksh Paul',
        email: 'divyauptown@gmail.com',
        // photo: base64Img.base64Sync('C:/Users/laksh/Desktop/templatepdf/photos/candidate-photo.png'),
        date: '24/09/2024',
        time: '18:30 PM',
        type: 'Mock DSA',
        summary: "Divya demonstrated strong technical skills and exceptional  problem-solving abilities. His performance indicates a good fit for the role, with potential for growth within the organization. While communication skills were satisfactory, there's room for improvement in  this area. Overall, the candidate shows promise and would likely be a valuable addition to the team.",
        standout:"Divya demonstrated strong technical skills and exceptional  problem-solving abilities. His performance indicates a good fit for the role, with potential for growth within the organization. While communication skills were satisfactory, there's room for improvement in  this area. Overall, the candidate shows promise and would likely be a valuable addition to the team. ",
        keyinsights:["Exceptional problem-solving skills demonstrated","Exceptional problem-solving skills demonstrated","Exceptional problem-solving skills demonstrated","Exceptional problem-solving skills demonstrated"],
        performancevalue:[80,70,75,60,50],
        communicationvalue:[70,60,80,75],
        keystrengths:["Problem Solving","Time Management","Accuracy","Speed"],
        areaofimprovement:["Problem Solving","Time Management","Accuracy","Speed"],
    },
    interviewer: {
        name: 'Komal Kungwani',
        role: 'SDE Mentor',
        bio: 'Chirag is a highly motivated software engineer currently working at Slice, where he applies his expertise in Java and Spring Boot to develop robust software solutions. His technical proficiency is complemented by his strong leadership skills, which he honed during his tenure as a Google Developer Student Club (GDSC) Coordinator. The opportunity to learn about Google technologies, enhance their technical skills, and develop leadership abilities through organizing events and workshops',
        // photo: base64Img.base64Sync('C:/Users/laksh/Desktop/templatepdf/photos/interviewer-photo.png'),
        expertise:"Java, cpp",
        position: "Software Dev. 2 @ Microsoft"

    },
};

module.exports = data;
