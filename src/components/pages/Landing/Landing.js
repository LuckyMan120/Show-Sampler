import React from 'react';
import { Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { redirectToLogin, authenticateUser } from '../../../actions/appActions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCompass, faGlassCheers, faQuoteRight} from '@fortawesome/free-solid-svg-icons'
import { faSpotify } from '@fortawesome/free-brands-svg-icons'
import headshot from '../../../assets/images/profile-pic.jpg'


import styles from './Landing.module.css';

const Landing = () => {
  const dispatch = useDispatch();

  const clickHandler = () => {
    dispatch(authenticateUser())
    redirectToLogin();
  };

  return (
    <>
      <section className={styles.hero}>
        <Container>
          <div className={styles.mainMessage}>
            <h3>Listen to the music of upcoming concerts</h3>
            <h1>Show Sampler</h1>
            <p>creates and plays a spotify premium playlist for each show at a location</p>

            <button
              className={`${styles.heroBtn} ${styles.landingButton}`}
              onClick={clickHandler}
              // style={{ marginTop: '2rem', borderRadius: '1em' }}
            >
              Generate Playlists!
            </button>
          </div>
        </Container>
      </section>
      <section className={styles.exploreCity}>
        <Container>
          <div className={styles.titleHeading}>
            <h3>explore</h3>
            <h1>upcoming concerts by city</h1>
            <p>sample the from an array of concerts at a location </p>
          </div>
          <div className={styles.activitiesGrid}>
              {/* grid item #1 */}
              <div className={`${styles.activitiesGridItem} ${styles.enhanceTravel}`}>
              <FontAwesomeIcon className='icon' icon={faCompass} />
                <h1>Enhance Travel</h1>
                <p>With Show Sampler you can find the right destination for your trip, or the perfect entertainment for wherever you go.</p>
              </div>  

              {/* grid item #1 */}
              <div className={`${styles.activitiesGridItem} ${styles.findArtists}`}>
              <FontAwesomeIcon className='icon' icon={faSpotify} />
                <h1>Find new Artists</h1>
                <p>Listen to all the musicians that play at your favorite concert, or try out music you've never heard before.</p>
              </div>

              {/* grid item #1 */}
              <div className={`${styles.activitiesGridItem} ${styles.bestShows}`}>
              <FontAwesomeIcon className='icon' icon={faGlassCheers} />
                <h1>Go to the best shows</h1>
                <p>Stay on top of all concerts of that are coming to your area. Once it's safe to do so, go out and have fun!</p>
              </div>
          </div>
        </Container>
      </section>
      <section className={styles.testimonials}>
        <Container className={styles.testimonial}>
          <div className={styles.testimonial}>
            <div className={styles.testimonialTextBox}>
              <p>"Absolutely glorious! Show Sampler changed my life. I wish there were more hours in the day so I could spend more time with Show Sampler."</p>
            </div>
            <FontAwesomeIcon className={styles.icon} icon={faQuoteRight} />
            <div className={styles.testimonialCustomer}>
              <img src={headshot} alt="profile"/>
              <h1>Jerry G</h1>
            </div>
          </div>
        </Container>
      </section>
      <section className={styles.beginAdventure}>
        <Container>
        <div className={styles.titleHeading}>
            <h3>stay safe</h3>
            <h1>explore digitally</h1>
            <p>Show Sampler keeps you up to date on when shows re-open.  </p>
        </div>
        <div className={styles.adventureGrid}>
          {/* grid-item */}
          <div className={styles.adventureGridItem}>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate dignissimos ullam voluptatibus ut earum, voluptas molestias alias. Tenetur ea voluptates repudiandae, nisi eligendi molestias impedit quasi voluptatum sed, atque vel obcaecati ratione, esse rem. Quibusdam.</p>
          </div>

          {/* grid-item */}
          <div className={styles.adventureGridItem}>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate dignissimos ullam voluptatibus ut earum, voluptas molestias alias. Tenetur ea voluptates repudiandae, nisi eligendi molestias impedit quasi voluptatum sed, atque vel obcaecati ratione, esse rem. Quibusdam.</p>
          </div>
        </div>

        <button>Do Something</button>
        </Container>
      </section>
      <footer>
        <p>&copy; 2020 Show Sampler. All rights reserved.</p>
      </footer>
    </>
  );
};

export default Landing;
