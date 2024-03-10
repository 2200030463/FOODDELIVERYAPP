import React from 'react';
import styles from './AboutUs.module.css';
import PavanImage from '../../Images/Pavan.jpg';
import AvinashImage from '../../Images/Avinash.jpg';
import SanthoshImage from '../../Images/Santhosh.jpg';

const AboutUs = () => {
  return (
    <div className={styles.aboutUs}>
      <h1>A Symphony of Comfort and Elegance</h1>
      <h2>
        "Step into a realm where food transcends mere ; it becomes a lifestyle.
        At our restuarants, we don't just offer a place to stay – we offer an experience that redefines opulence.
        Indulge yourself in a symphony of impeccable service, exquisite , and culinary mastery.
        Every moment with us is a harmonious blend of indulgence and sophistication, where every detail is meticulously crafted to ensure your utmost satisfaction.
        Welcome to a world where luxury knows no bounds, and every stay is a masterpiece of comfort and elegance."
      </h2>

      <div className={styles.second_section}>
        <h1>Our Team Members</h1>
        <div className={styles.imageContainer}>
          <div className={styles.teamMember}>
            <img src={PavanImage} className={styles.teamMemberImage} alt="Pavan" />
            <h3>Sriram</h3>
            <h2>2200030463</h2>
            <p className={styles.additionalText}>Frontend Developer</p>
          </div>
          <div className={styles.teamMember}>
            <img src={AvinashImage} className={styles.teamMemberImage} alt="Avinash" />
            <h3>Dileep</h3>
            <h2>2200033049</h2>
            <p className={styles.additionalText}>Frontend Developer</p>
          </div>
          <div className={styles.teamMember}>
            <img src={SanthoshImage} className={styles.teamMemberImage} alt="Santhosh" />
            <h3>Charan</h3>
            <h2>2200033078</h2>
            <p className={styles.additionalText}>Backend Developer</p>
          </div>
        </div>
      </div>
      <div className={styles.third_section}>
        <h1>Harmonious Blend of Comfort and Elegance</h1>
        <h2>
          Experience a lifestyle where luxury becomes more than just accommodation—it becomes an artful journey.
          Our hotels redefine opulence, offering immersive experiences beyond mere stays.
          Delight in impeccable service, lavish accommodations, and culinary excellence, each aspect meticulously curated to ensure your utmost satisfaction.
          Every moment is a fusion of indulgence and sophistication, inviting you to savor the finer things in life.
          Welcome to a realm where luxury knows no bounds, where each stay is a masterpiece of comfort and elegance, inviting you to revel in a symphony of refined living and unforgettable experiences.
        </h2>
      </div>
    </div>
  );
};

export default AboutUs;