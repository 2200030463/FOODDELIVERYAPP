import React from "react";
import styles from "./HomePage.module.css";

import mountains from "./images/mountains.png";
import Filter from "./filter/Filter";
import ContactUs from "../contact-us/ContactUs";
import BorderBox from "../common-styles/BorderBox";
import { useDispatch } from "react-redux";
import { updateSingleProduct } from "../../Redux/payment/action-creator";
import { useNavigate } from "react-router";
import { setSingleProduct } from "../../Redux/singleproduct/action-creator";

function HomePage() {
  const dispatch = useDispatch();
  const nagivate = useNavigate();
  return (
    <BorderBox>
      {/* first section  */}
      <div className={styles.first_section}>
        <div className={styles.left_side_first}>
          
          {/* <img
            src="https://hblimg.mmtcdn.com/content/hubble/img/collections/m_weekend44_p_540_417.jpg?im=Resize=(400,462)"
            className={styles.rounded_image_first}
          /> */}
          {/* <img
            src="https://hblimg.mmtcdn.com/content/hubble/img/kasauli/mmt/destination/m_destination-kasauli-landscape_l_400_640.jpg"
            className={styles.rounded_image_first}
          /> */}
        </div>

        <div className={styles.right_side_first}>
          <h1 className="">" Explore the beauty of flavors."</h1>
          <p>
          "Join our community of food enthusiasts and savor the flavors, meet fellow foodies, and create unforgettable culinary memories. Book with us and experience the world of gastronomy like never before."
          </p>
          <button>Learn more</button>
        </div>
      </div>

      {/* second section */}
      <div className={styles.second_section}>
        <Filter />
        <h1>We Offer the Best</h1>
        <p>
        "Our team of culinary experts is dedicated to ensuring that you have the dining experience of a lifetime. Choose us for your next foodie adventure and discover why we're the best in the business."
        </p>
        <div className={styles.offer_wrapper}>
          <div className={styles.offer_card}>
            <div className={styles.off_images}>
              <img
                style={{
                  width: "50px",
                  height: "50px",
                  filter: "invert(100%)",
                }}
                src="https://i.pinimg.com/564x/f6/68/f5/f668f5eed18b0db9fa827d202b8b7bff.jpg"
              />
            </div>
            <h2>Interantional Foods</h2>
            <p>
            "Embark on a culinary journey like never before with our international food tours. Explore diverse flavors, meet passionate chefs, and create food memories that will last a lifetime. Join us in savoring the world's culinary delights."
            </p>
          </div>
          <div className={styles.offer_card}>
            <div className={styles.off_images}>
              <img
                style={{
                  width: "50px",
                  height: "50px",
                  filter: "invert(100%)",
                }}
                src="https://cdn-icons-png.flaticon.com/512/3127/3127995.png"
              />
            </div>
            <h2>Food Community</h2>
            <p>
            "Join our foodie community and connect with like-minded enthusiasts from around the world. Share recipes, culinary tips, and delicious stories about your gastronomic adventures. Let's savor the flavors together and explore the world of food!"
            </p>
          </div>
          <div className={styles.offer_card}>
            <div className={styles.off_images}>
              <img
                style={{
                  width: "50px",
                  height: "50px",
                  filter: "invert(100%)",
                }}
                src="https://cdn-icons-png.flaticon.com/512/2956/2956869.png"
              />
            </div>
            <h2>Interantional Foods</h2>
            <p>
            "Embark on a culinary journey like never before with our diverse range of international flavors. Discover new tastes, meet fellow food enthusiasts, and create delicious memories that will last a lifetime. Join us in savoring the world of extraordinary cuisine!"
            </p>
          </div>
        </div>
      </div>

      {/* third section */}
      <div className={styles.third_section}>
        <h1>Great Foods across the World</h1>
        <p>
        "Indulge your taste buds in the most exquisite and diverse culinary destinations across the globe with us. From the rich flavors of Patagonian cuisine to the delightful seafood on the pristine beaches of Bali, we'll guide you on a gastronomic like no other."
        </p>
        <div className={styles.map_wrapper}>
          <img src="https://www.looptelecom.com/uploads/files/About/map-worldwide.png" />
        </div>
      </div>

      {/* fourth section */}
      <div className={styles.third_section}>
        <h1>Find Popular Foods</h1>
        <p>
        "Escape the ordinary and savor the extraordinary – with our curated selection of exclusive foodie deals."
        </p>
        <div className={styles.offer_wrapper}>
          <div className={styles.product_card}>
            <div>
              <img src="https://i.pinimg.com/564x/c1/f1/ce/c1f1ce152f4d9996a50f3484f98f0b43.jpg" />
            </div>
            <h2>Chineese Noodles</h2>
            
            <div>
              <div>
                <p>Starts from</p>
                <h4>₹ 200 / person</h4>
              </div>
              <button
                onClick={() => {
                  dispatch(
                    updateSingleProduct({
                      title: "Chineese Noodles",
                      price_per_day: 3900,
                      group_size: 1,
                      act_price: 3900,
                      tour_length: 10,
                      save_price: 3900 - 3900,
                    })
                  );
                  nagivate("/payment");
                }}>
                Order Now
              </button>
            </div>
          </div>
          <div className={styles.product_card}>
            <div>
              <img src="https://i.pinimg.com/236x/d9/26/63/d926633d61db14ac0455b6f5623d0ab7.jpg" />
            </div>
            <h2>Pizza</h2>
            
            <div>
              <div>
                <p>Starts from</p>
                <h4>₹ 250 / person</h4>
              </div>
              <button
                onClick={() => {
                  dispatch(
                    updateSingleProduct({
                      title: "Pizza",
                      price_per_day: 3900,
                      group_size: 1,
                      act_price: 3900,
                      tour_length: 10,
                      save_price: 3900 - 3900,
                    })
                  );
                  nagivate("/payment");
                }}>
                Order Now
              </button>
            </div>
          </div>
          <div
            className={styles.product_card}
            onClick={() => {
              dispatch(
                setSingleProduct({
                  id: 1,
                  state: "Ladakh",
                  place: "Leh",
                  type: "friends",
                  rating: 4.5,
                  stay: 1,
                  title: "Best Of Ladakh - Standard",
                  image:
                    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1494575827/Pangong_Lake.jpg",
                  image1:
                    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1527078579/Leh_ladakh_1527078576.jpg",
                  image2:
                    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1527082217/Pangong_Tso_1527080934.jpg",
                  image3:
                    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1494579614/Zanskar_River.jpg",
                  image4:
                    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1518782352/centrally_heated_camps_1518782375.jpg",
                  image5:
                    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1494577494/Bactrian_Camels.jpg",
                  image6:
                    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1464244517/Ladakh_overview.jpg",
                  image7:
                    "https://imgcld.yatra.com/ytimages/image/upload/t_holidays_responsivedetailslargeimg/v1517480886/AdvNation/ANN_TRP634/chadar-and-lingshed-village-trek_1474024109_dTQv7M.jpg",
                  price: 4125,
                  overview:
                    "Short Escape tour of Ladakh this trip you will witness some of the most beautiful monasteries, while you are in the monastery you will get a birds eye of the spectacular Ladakh’s mountain range. The sky view of the Ladakh’s Valleys, Mountains and City is best viewed from high tops of the Monasteries and Palace, The drive to Khardung-la is a memorable one as you are going to the Highest Mountain Top in the world known as “K TOP” sightseeing of Leh Palace, Pathar Sahib Gompa, Charismatic Magnetic Hill, Hall of Fame museum, The World’s Highest motorable road KHARDUNGLA pass makes your holiday a memorable journey.",
                  about:
                    "Leh is an enchanting utopia that literally makes you feel on top of the world. A prominent city in the Ladakh region of Jammu and Kashmir, it is a place where the stars shine brighter and the majestic Himalayas loom over you. For the travelers who really want to experience peaceful bliss with a slice of adventure, Leh is the perfect destination. You can engage in adrenaline-pumping adventure sports of the place or discover your spiritual side in one of the district’s numerous monasteries, such as Thiksey Monastery and Shanti Stupa. Adventure lovers, bikers in particular, will love to explore the never-ending stretches of mountain paths around the city. Equally fascinating is the culture of Leh. Kind-hearted people with warm smiles on their faces, greet you wherever you go and make you feel at home. Roam around the narrow paths of the City Market, and get engulfed with the irresistibl",
                })
              );
            }}>
            <div>
              <img src="https://i.pinimg.com/736x/59/38/2c/59382c53f286e1a0cf4899b8e4fe3745.jpg" />
            </div>
            <h2>French Fries</h2>
            
            <div>
              <div>
                <p>Starts from</p>
                <h4>₹ 100 / person</h4>
              </div>
              <button
                onClick={() => {
                  dispatch(
                    updateSingleProduct({
                      title: "Royal Rajasthan",
                      price_per_day: 3900,
                      group_size: 1,
                      act_price: 3900,
                      tour_length: 10,
                      save_price: 3900 - 3900,
                    })
                  );
                  nagivate("/payment");
                }}>
                Order Now
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.image}>
        <img src={mountains} />
        <div className={styles.fade}></div>
      </div>
      {/* fifth section */}
      <ContactUs />
    </BorderBox>
  );
}

export default HomePage;
