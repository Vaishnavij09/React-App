import React, { useState, useEffect, useCallback } from "react";
import "./PhotoGallery.css";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("Failed to fetch data");
      const result = await response.json();

      setTimeout(() => {
        setData(result);
        setLoading(false);
      }, 1500); 

      setError(null);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error };
};

const ProductList = () => {

  const { data, loading, error } = useFetch("https://jsonplaceholder.typicode.com/photos?_limit=400");

  if (loading) {
    return (
      <div className="loading-container">
        <h2 className="loading-text">Loading...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="loading-container">
        <div className="error-text">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="page-wrapper">
      <h1 className="main-title">Photos</h1>
      <div className="product-grid">
        {data && data.map((item) => (
          <div key={item.id} className="product-card">
            <div 
              className="image-box" 
              style={{ backgroundColor: `#${(item.id * 1234567).toString(16).slice(-6)}` }}
            >
              <span className="resolution-label">600 x 600</span>
            </div>
            <p className="product-title">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;