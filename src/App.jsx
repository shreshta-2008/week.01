import { useState } from 'react'
import './App.css'

const ProfileCard = ({ name, age, role, status, image }) => (
  <div className="profile-card">
    <div className="profile-image-frame">
      <img 
        src={image} 
        alt="Judy Hopps Professional Portrait" 
        className="profile-avatar"
        onError={(e) => {
          // Fallback if the link breaks: shows a professional ZPD-blue circle
          e.target.src = "https://ui-avatars.com/api/?name=ZPD&background=122343&color=ffcc00";
        }}
      />
      <div className="rank-badge">B.Tech</div>
    </div>
    <div className="profile-details">
      <h2>{name}</h2>
      <p className="academic-role">{role}</p>
      <div className="stats-row">
        <div className="stat">
          <label>Age</label>
          <span>{age}</span>
        </div>
        <div className="stat">
          <label>University ID</label>
          <span>2500040011</span>
        </div>
      </div>
      <div className={`status-pill ${status.toLowerCase().replace(/\s+/g, '-')}`}>
        {status}
      </div>
    </div>
  </div>
);

const StatusPanel = ({ currentStatus, onStatusChange }) => {
  const options = ["In Class", "Project Mode", "Internship", "On Break"];

  return (
    <div className="status-panel">
      <h3>Academic Deployment</h3>
      <p className="description">Update your current availability for team projects and labs.</p>
      <div className="button-grid">
        {options.map((option) => (
          <button 
            key={option} 
            className={currentStatus === option ? "active" : ""} 
            onClick={() => onStatusChange(option)}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

function App() {
  const [student, setStudent] = useState({
    name: "Shreshta",
    age: 18,
    role: "Electronic and Communication Engineering Student",
    status: "Internship",
    // New reliable link for Judy Hopps
    image: "https://static.wikia.nocookie.net/disney/images/9/9c/Profile_-_Judy_Hopps.jpeg" 
  });

  const handleStatusUpdate = (newStatus) => {
    setStudent(prev => ({ ...prev, status: newStatus }));
  };

  return (
    <div className="dashboard-root">
      <header className="main-header">
        <div className="zpd-logo">ZPD</div>
        <div className="header-text">
          <h1>Student Personnel Dashboard</h1>
          <p>Division of Engineering • KL University</p>
        </div>
      </header>

      <main className="content-container">
        <ProfileCard 
          name={student.name} 
          age={student.age} 
          role={student.role} 
          status={student.status}
          image={student.image}
        />
        
        <StatusPanel 
          currentStatus={student.status} 
          onStatusChange={handleStatusUpdate} 
        />
      </main>

      <footer className="footer-info">
        <p>Declarative UI: React is managing the image and status state.</p>
      </footer>
    </div>
  );
}

export default App;