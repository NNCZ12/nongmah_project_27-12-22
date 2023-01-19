import React from 'react'

function ProfileData() {const [profiles, setProfiles] = useState([]);
    const API_URL = `http://localhost:8000/api/dog_profiles`;
  
    useEffect(() => {
      fetchProfiles();
    }, []);
  
    const fetchProfiles = async () => {
      await axios.get(API_URL).then(({ data }) => {
        setProfiles(data);
      });
    };
  return (
    <div>
      
    </div>
  )
}

export default ProfileData
