import React, { useState, useEffect } from 'react';

const LatihanJSON3dariPHP = () => {
    const [jsonData, setJsonData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost/uas/fppo.php');
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
              <h2>Data Hobby Pengguna</h2>
              <table border="1">
                <tr>
                  <td>
                    <h3>Nama</h3>
                  </td>
                  <td>
                    <h3>Alamat</h3>
                  </td>
                  <td>
                    <h3>Hobby</h3>
                  </td>
                </tr>
                {jsonData.map((user) => (
                  <tr key={user.id}>
                    <td>{user.nama}</td>
                    <td>{user.alamat}</td>
                    <td>{user.hobby}</td>
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
export default LatihanJSON3dariPHP;