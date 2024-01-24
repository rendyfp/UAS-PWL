import React, { useState, useEffect } from 'react';

const LatihanJSON2dariPHP = () => {
    const [jsonData, setJsonData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://localhost/uas/fpp.php');
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
              <h2>Data Alamat Pengguna</h2>
              <table border="1">
                <tr>
                  <td>
                    <h3>Nama</h3>
                  </td>
                  <td>
                    <h3>Role</h3>
                  </td>
                  <td>
                    <h3>Alamat</h3>
                  </td>
                </tr>
                {jsonData.map((user) => (
                  <tr key={user.id}>
                    <td>{user.nama}</td>
                    <td>{user.role}</td>
                    <td>{user.alamat}</td>
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
export default LatihanJSON2dariPHP;