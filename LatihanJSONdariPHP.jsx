import React, { useState, useEffect } from 'react';

const LatihanJSONdariPHP = () => {
    const [jsonData, setJsonData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost/uas/fp.php');
                const data = await response.json();
                setJsonData(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
          {jsonData ? (
            <div>
              <h2>Data Pengguna</h2>
              <table border="1">
                <tr>
                  <td>
                    <h3>Nama</h3>
                  </td>
                  <td>
                    <h3>Sandi</h3>
                  </td>
                  <td>
                    <h3>Role</h3>
                  </td>
                </tr>
                {jsonData.map((user) => (
                  <tr key={user.id}>
                    <td>{user.nama}</td>
                    <td>{user.sandi}</td>
                    <td>{user.role}</td>
                  </tr>
                ))}
              </table>
            </div>
          ) : (
            <p>Loading data...</p>
          )}
        </div>
    );
};
export default LatihanJSONdariPHP;