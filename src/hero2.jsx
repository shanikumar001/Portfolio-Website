import React, { useState } from 'react';
import './App.css';
import './hero2.css';
import bihar from './assets/bihar.jpeg';
import bihar2 from './assets/b.jpg';
import bihar3 from './assets/bi.jpg';
import sutara from './assets/sutara.jpg';
import jai from './assets/jai.jpg';
import clg from './assets/down.jpg';
import clg2 from './assets/d.jpg';
import clg3 from './assets/do.jpg';


const Timeline = () => {

  const stateimages = [bihar, bihar2, bihar3];
  const [bigImage, setBigImage] = useState(stateimages[0]);

  const clgimages = [clg, clg2, clg3];
  const [clGImage, setClgImage] = useState(clgimages[0]);

  return (
    <div className="hero2">
    <div className="timeline-container">
      <div className="line"></div>
      <div className="box">
        <h3>I am from Bihar</h3>
      </div>

      <div className="line2"></div>
      <div className="box2">
        <div className="small-box">
          <img src={bigImage} alt="Big Display" />
        </div>

        <div className="small-box">
         
            <h3>Bihar</h3>
            <p>
              A state where history, culture, and nature blend beautifully, Bihar
              shines with ancient monuments like Nalanda and Bodh Gaya, lush green
              fields, and the holy Ganga. Its festivals, vibrant traditions, and warm
              hospitality make it unique. Rich heritage and natural beauty together
              create Bihar’s timeless charm.
            </p>

            <div className="photo">
              {stateimages.map((img, index) => (
                <div
                  key={index}
                  className="small-box"
                  onClick={() => setBigImage(img)}
                >
                  <img src={img} alt={`Thumbnail ${index}`} />
                </div>
              ))}
            </div>

            <div className="para">
              <a href="https://en.wikipedia.org/wiki/Bihar" target="_blank" rel="noreferrer">
                view more →  
              </a>
            </div>
        
        </div>
      </div>

      <div className="line3"></div>
      <div className="box3">
        <h3>I have completed my schooling from</h3>
      </div>

      <div className="line4"></div>
      <div className="box4">
        <div className="school">
          <p>PRIMARY SCHOOL</p>
          <h3>SUTARA MEHI MISSION SCHOOL</h3>
          <p>
            My primary school is one of the most memorable places of my childhood. It
            is located in a quiet area surrounded by trees, with a large playground
            where we used to play every day. The building was simple but colorful,
            with neatly arranged classrooms, a small library, and a garden full of
            flowers.
          </p>
            <div className="para">
              <a href="https://en.wikipedia.org/wiki/Bihar" target="_blank" rel="noreferrer">
                view more →  
              </a>
            </div>          
        </div>
        <div className="school">
          <img src={sutara} alt="sutara school" />
        </div>
      </div>

      <div className="line5"></div>
      <div className="box5">
        <div className="school">
          <p>SECONDARY SCHOOL</p>
          <h3>JAI MALA SIKSHA NIKETAN</h3>
          <p>
            My secondary school holds countless memories. It is located in a peaceful
            area surrounded by trees, with a large playground where we played every
            day. The building was simple but colorful, with neatly arranged classrooms,
            a small library, and a garden full of flowers.
          </p>
            <div className="para">
              <a href="https://en.wikipedia.org/wiki/Bihar" target="_blank" rel="noreferrer">
                view more →  
              </a>
            </div>
        </div>
        <div className="school">
          <img src={jai} alt="Jai Mala Siksha Niketan" />
        </div>
      </div>

      <div className="line6"></div>
      <div className="box6">
        <h3>Currently I am doing B.Tech in Computer Science from,</h3>
      </div>

      <div className="line7"></div>
      <div className="box7">
        <div className="school">
          <h3>ASSAM DOWN TOWN UNIVERSITY</h3>
          <p>
            Assam Down Town University (ADTU) was established in 2010 by the Down
            Town Charity Trust to fill a need for quality private higher education in
            the Northeast of India. The campus is located at Panikhaiti (Chandrapur),
            about 12 km from Dispur, Guwahati, overlooking the Brahmaputra River.
          </p>
            <div className="photo2">
              {clgimages.map((img, index) => (
                <div
                  key={index}
                  className="small-box"
                  onClick={() => setClgImage(img)}
                >
                  <img src={img} alt={`Thumbnail ${index}`} />
                </div>
              ))}
            </div>
            <div className="para">
              <a href="https://adtu.in/" target="_blank" rel="noreferrer">
                view more →  
              </a>
            </div>
        </div>
        <div className="school">
          <img src={clGImage} alt="Assam Down Town University" />
        </div>
      </div>
    </div>
    </div>
  );
};

export default Timeline;
