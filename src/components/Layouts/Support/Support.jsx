import axios from "axios";
import { useEffect, useState } from "react";

const Support = () => {
    const [supports, setSupports] = useState([]); // Nama variabel lebih baik diganti menjadi bentuk plural
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [token, setToken] = useState('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIDEiLCJpYXQiOjE3MTEzNDEzMTV9.3w_4Ap87iNPpg9OKnCugwCfA7BMAuvTpHfa9HDQasQA');

    useEffect(() => {
        const fetchSupport = async () => {
            try {
                const response = await axios.get("https://casatech.id/compro-api/company", {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setSupports(response.data.data); // Pastikan struktur response.data.data benar
                setLoading(false);
            } catch (err) {
                setError(err);
                setLoading(false);
            }
        };
        fetchSupport();
    }, [token]);

    return (
        <div className='flex justify-center overflow-x-auto'>
            <marquee behavior="scroll" direction="left" scrollamount="10">
                <div className="flex">
                    {loading ? (
                        <div>Loading...</div>
                    ) : error ? (
                        <p>Error: {error.message || 'Unknown error'}</p> // Menambahkan fallback untuk pesan error
                    ) : supports.length > 0 ? (
                        supports.map((support, index) => (
                            <div>
                            <img key={index} src={`https://casatech.id/compro-api/${support.image_client}`} alt="support"  className="w-[300px]"/>
                            </div>
                        ))
                    ) : (
                        <p>No data available</p>
                    )}
                </div>
            </marquee>
        </div>
    );
};

export default Support;
