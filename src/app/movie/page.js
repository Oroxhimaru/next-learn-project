"use client"
import React, { useState, useEffect } from 'react';
import MovieCard from "@/app/components/MovieCard";
import styles from "@/app/styles/common.module.css";

const Movie = () => {
  const [main_data, setMainData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = "https://netflix54.p.rapidapi.com/search/?query=stranger&offset=0&limit_titles=50&limit_suggestions=20&lang=en";
        const options = {
          method: 'GET',
          headers: {
            'X-RapidAPI-Key': 'a6b2f25e9bmsh89365fc0918f18fp111e97jsn0c10303bba8d',
            'X-RapidAPI-Host': 'netflix54.p.rapidapi.com'
          }
        };
    
        const res = await fetch(url, options);
    
        // Check if the response status is ok
        if (!res.ok) {
          throw new Error(`Error: ${res.status} - ${res.statusText}`);
        }
    
        const data = await res.json();
    
        // Check if titles array exists before accessing it
        const titles = data.titles || [];
        setMainData(titles);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    
    fetchData();
  }, []);

  return (
    <>
      <section className={styles.movieSection}>
        <div className={styles.container}>
          <h1>Series & Movie</h1>
          <div className={styles.card_section}>
            {main_data.map((curElem) => (
              <MovieCard key={curElem.id} {...curElem} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Movie;
