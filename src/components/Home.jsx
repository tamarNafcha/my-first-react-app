import styles from './Home.module.css';
import { useState, useEffect } from 'react';

function Home() {

  const[currentTime, setCurrentTime]=useState(new Date());

  useEffect(()=>{
    const interval= setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return ()=>{
      console.log("cleanup function called")
      clearInterval(interval);
    }
  },[])

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to Our Posts App!</h1>
      <p>The current time is:{" "}
        {currentTime.toLocaleDateString("en-GB",
        {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        fractionalSecondDigits:3
        })}
     </p>
    </div>
  );
}

export default Home;