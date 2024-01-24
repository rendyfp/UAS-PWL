import React, { useState } from "react";

const LatihanFormkePHP = () => {
  const [formData, setFormData] = useState({
    nama: "",
    sandi: "",
    role: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Kirim data ke server PHP untuk disimpan ke MySQL
    fetch("http://localhost/uas/simpan.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Nama: </label>
      <input type="text" name="nama" value={formData.nama} onChange={handleChange} />
      <br />
      <label>Sandi: </label>
      <input type="text" name="sandi" value={formData.sandi} onChange={handleChange} />
      <br />
      <label>Role: </label>
      <input type="text" name="role" value={formData.role} onChange={handleChange} />
      <br />

      <button type="submit">Submit</button>
    </form>
  );
};

export default LatihanFormkePHP;
