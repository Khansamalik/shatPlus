import { useEffect, useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { QrCodeIcon } from "@heroicons/react/24/outline";
 // ✅ Optional, if using Heroicons (add to package)

export default function QRGenerator() {
  const [qrData, setQrData] = useState('');
  const userProfile = localStorage.getItem('userProfile');

  useEffect(() => {
    try {
      const profile = JSON.parse(userProfile);
      console.log("Parsed Profile:", profile);
      setQrData(JSON.stringify(profile));
    } catch (err) {
      console.error("JSON parse error:", err);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f4f7fc] to-[#dce9f7] flex items-center justify-center px-4">
      <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-md text-center transition-all duration-300 hover:scale-105">
        <div className="flex justify-center mb-4">
          {/* Optional Icon (needs @heroicons/react or replace with emoji/icon font) */}
          <QrCodeIcon className="h-10 w-10 text-[#6C0B14]" />
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Your QR Code</h2>
        {qrData ? (
          <>
            <div className="flex justify-center mb-4">
              <QRCodeSVG value={qrData} size={200} className="hover:scale-110 transition-transform" />
            </div>
            <p className="text-gray-600">Scan this code to view your profile.</p>
          </>
        ) : (
          <p className="text-red-500">No data found. Please complete your profile.</p>
        )}
      </div>
    </div>
  );
}
