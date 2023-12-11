import React from 'react'

const QrCard = () => {
  return (
    <div className='card-container'>
       
        <div className="qr-image-container">
        <img className='qr-image' src="/image-qr-code.png" alt="qrcode"/>
      </div>
        <div className='card-text'>
            <h1 className='header'>
            Improve your front-end skills by building projects
            </h1>
            <p className='text'>
            Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
            </p>
        </div>
    </div>
  )
}

export default QrCard