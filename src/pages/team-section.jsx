
import React, { useState } from "react";
import "./TeamSection.css";

const TeamSection = () => {
  const [year, setYear] = useState(2024);

  //  team members for different years
  const teamData = {
    2023: [
      { name: "Atyshraj Yadav", role: "President", image: "david.jpg" },
      { name: "Subarna Bhownik", role: "Vice President", image: "david.jpg" },
      { name: "Vedant Asawa", role: "Treasurer", image: "david.jpg" },
      { name: "Soumyashree Nayak", role: "Secretary", image: "david.jpg" },
      { name: "Labhesh Sonawane", role: "Design Head", image: "saisojan.png" },
      { name: "Shubranki Maharana", role: "Sergeant at arms", image: "Nishi.jpg" },
      
    ],
    2024: [
      { name: "Nitin Rai", role: "President", image: "david.jpg" },
      { name: "Swashreeta Senapati", role: "Vice President", image: "swashreeta.jpg"},
      { name: "Jatin Saini", role: "Treasurer", image: "Jatin.jpg" },
      { name: "Vidisha Rout", role: "Secretary", image: "vidisha.jpg" },
      { name: "Sai Sohan Sajja", role: "Editor in cheif", image: "saisojan.png" },
      { name: "Nishi Singh", role: "Sergeant at arms", image: "Nishi.jpg" },
      { name: "Elizabet Grace Stanley", role: "PR officer", image: "El.jpg" },
    ],
    // 2025: [
    //   { name: "Sourav", role: "President", image: "david.jpg" },
    //   { name: "Biswal", role: "Vice President", image: "david.jpg" },
    //   { name: "Biotech", role: "Treasurer", image: "david.jpg" },
    //   { name: "Grace", role: "Secretary", image: "david.jpg" },
    //   { name: "Heidi", role: "Coordinator", image: "david.jpg" },
    //   {name: "Biotech", role: "Treasurer", image: "david.jpg" },
    // ],
  };

  return (
    <section className="team-section">
        <div className="head">
        <h1>OUR TEAM</h1>
        </div>
     
      <div className="year-selector">
        <button onClick={() => setYear(2023)}>2023</button>
        <button onClick={() => setYear(2024)}>2024</button>
        
      </div>
      <div className="team-grid">
        {teamData[year].map((member, index) => (
          <div key={index} className="team-box">
            <img src={member.image} alt={member.name} className="team-image" />
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TeamSection;
