import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  // Daftar item dengan gambar
  const items = [
    { name: 'MieAyam', image: './src/assets/images/MieAyam.jpg' },
    { name: 'NasiGoreng', image: './src/assets/images/NasiGoreng.jpg' },
    { name: 'Rawon', image: './src/assets/images/Rawon.jpg' },
    { name: 'Sate', image: './src/assets/images/Sate.jpg' },
    { name: 'Rendang', image: './src/assets/images/Rendang.jpg' },
    { name: 'Bakso', image: './src/assets/images/Bakso.jpeg' }
  ];

  const handleSelectItem = (item) => {
    navigate(`/rating?item=${item}`); // Navigasi ke halaman rating dengan query param
  };

  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-6">Selamat Datang di Rating Makanan Nusantara</h1>
      <p className="text-lg mb-4">Pilih makan apa yang ingin kamu rating</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item) => (
          <div
            key={item.name}
            className="border rounded-lg overflow-hidden shadow-lg cursor-pointer"
            onClick={() => handleSelectItem(item.name)}
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 bg-white">
              <h3 className="text-xl font-bold">{item.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
