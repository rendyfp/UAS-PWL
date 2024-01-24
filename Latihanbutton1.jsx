import React from 'react';

class TombolTautan extends React.Component {
  bukaSitusEksternal = () => {
    const url = './index2'; // Ganti dengan URL situs eksternal yang diinginkan
    window.open(url, '_blank');
  };

  render() {
    return (
      <div>
        <h2>Tombol Tabel 2</h2>
        <p>Klik tombol di bawah ini untuk membuka tabel ke 2:</p>
        <button onClick={this.bukaSitusEksternal}>Tabel ke 2</button>
      </div>
    );
  }
}

export default TombolTautan;