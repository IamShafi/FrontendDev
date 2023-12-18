import React, { useState } from 'react'

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentYear(new Date().getFullYear());
    },1000);
    return () => clearInterval(interval);
  }, [])

  return (
    <footer className='section'>
      <p>
        copyright &copy; backroads travel tours company
        <span id='data'>{currentYear}</span>. all rights reserved
      </p>
    </footer>
  )
}

Footer
