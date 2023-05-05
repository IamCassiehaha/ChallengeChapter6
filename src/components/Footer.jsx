import React from 'react';
import "./Footer.scss";

const Footer = () => {
  return (
    <div className='Footer'>
      <div className='footer section_padding'>
        <div className='footer-links'>
          <div className='description'>
            <h1>MovieList</h1>
            <p>MovieList merupakan situs penyedia layanan streaming film dan serial tv gratis. Sama seperti penyedia film dan serial tv lainnya seperti Netflix, Disney+, HBO, Apple TV+, Amazon Prime Video, dan lainnya. MovieList berusaha untuk menyediakan layanan streaming gratis untuk selamanya kepada para rakyat Indonesia yang belum mampu berlangganan layanan premium streaming seperti yang disebut diatas. Perlu diperhatikan MovieList tidak menyediakan film maupun serial tv dari negara Indonesia.</p>
          </div>
          <div className='footer-links_div'>
            <h4>Original Series</h4>
            <a href='/disney+'>
              <p>Disney+</p>
            </a>
            <a href='/hbo'>
              <p>HBO</p>
            </a>
            <a href='/netflix'>
              <p>Netflix</p>
            </a>
          </div>
          <div className='footer-links_div'>
            <h4>Category</h4>
            <a href='/action'>
              <p>Action</p>
            </a>
            <a href='/adventure'>
              <p>Adventure</p>
            </a>
            <a href='/anime'>
              <p>Anime</p>
            </a>
            <a href='/animation'>
              <p>Animation</p>
            </a>
            <a href='/comedy'>
              <p>Comedy</p>
            </a>
          </div>
        </div>

        <hr></hr>

        <div className='footer-below'>
          <div className='footer-copyright'>
            <p>
            Copyright © 2023 by MovieList. All Rights Reserved.
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Footer