import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function Rating() {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const itemName = queryParams.get('item');

  // Daftar item dan gambar
  const items = {
    MieAyam: './src/assets/images/MieAyam.jpg',
    NasiGoreng: './src/assets/images/NasiGoreng.jpg',
    Rawon: './src/assets/images/Rawon.jpg',
    Sate: './src/assets/images/Sate.jpg',
    Rendang: './src/assets/images/Rendang.jpg',
    Bakso: './src/assets/images/Bakso.jpeg'

  };

  // State untuk rating dan komentar
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleRating = (value) => {
    setRating(value);
  };

  const handleSubmit = () => {
    // Simpan rating dan komentar ke database atau lakukan sesuatu
    console.log(`Rated ${itemName} with a score of ${rating} and comment: ${comment}`);
    
    // Setelah selesai, arahkan kembali ke halaman utama
    navigate('/');
  };

  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-6">Rate {itemName}</h1>

      {/* Menampilkan gambar item */}
      <div className="mb-4">
        <img
          src={items[itemName] || '/images/default.jpg'}
          alt={itemName}
          className="w-full h-48 object-cover mb-4"
          // onError={(e) => { e.target.src = '/images/default.jpg'; }} // Ganti gambar jika terjadi error
        />
      </div>

      <div className="mb-4">
        <span className="text-xl">Your Rating: </span>
        {[1, 2, 3, 4, 5].map((value) => (
          <button
            key={value}
            onClick={() => handleRating(value)}
            className={`mx-2 ${rating === value ? 'text-yellow-500' : 'text-gray-400'}`}
          >
            ★
          </button>
        ))}
      </div>

      {/* Input untuk komentar */}
      <div className="mb-4">
        <textarea
          placeholder="Leave a comment..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="w-full h-24 p-2 border rounded"
        />
      </div>

      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        Submit Rating
      </button>
    </div>
  );
}

export default Rating;



