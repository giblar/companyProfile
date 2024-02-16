import React, { useState, useEffect } from 'react';

const Profile = () => {
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://casatech.id/intern-api/profile');
        const data = await response.json();
        setProfileData(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>User Profile</h1>
      {profileData && (
        <div>
          <p>Name: {profileData.nama}</p>
          <p>Email: {profileData.alamat}</p>
        
        </div>
      )}
    </div>
  );
};

export default Profile;
