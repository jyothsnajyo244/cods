import React from 'react';
import './Aboutus.css';

const AboutUs = () => {
  return (
    <section className="about-us-section" id="about">
      <h2 className='zo'>ABOUT US</h2>
      <div className="about-us-cards-container">
        <div className="about-us-cards">
          <div className="card">
            <div className="card-info">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/MS-Exec-Nadella-Satya-2017-08-31-22_%28cropped%29.jpg/220px-MS-Exec-Nadella-Satya-2017-08-31-22_%28cropped%29.jpg" alt="CEO" />
              <h3>CEO: Satya Nadella</h3>
              <br />
              <p> Satya Nadella is the CEO of Research and development center.The technology sector is usually the area that people think of when asked about R&D, but nearly all companies and sectors invest resources into this vital department. Investment into research & development can lead to the creation.</p>
            </div>
          </div>
          <div className="card">
            <div className="card-info">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBCdRZeC2I1SFDrzKMBH2O7XsqmUPi80O7h6cXCfFP9Q&s" alt="Designer" />
              <h3>Product Designer: Dhoni</h3><br />
              <p>MS Dhoni is the lead product designer at Research and development center.The first type of R&D is basic research where the aim a particular subject area as opposed to a practical application. It has no specific commercial aim.</p>
            </div>
          </div>
          <div className="card">
            <div className="card-info">
              <img src="https://s3.amazonaws.com/media.mixrank.com/profilepic/634e32c82cc8202d85e4087ae9377da3" alt="Design Director" />
              <h3>Design Director: Kaushik</h3><br />
              <p>Sandeep oversees the design team at Research and development center.Bank directors are integral figures in the governance and strategic direction of financial institutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
