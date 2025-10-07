import Header from "./Header.jsx";
import soda10 from "./images/soda10.jpg";
import img1 from "./images/img1.jpg";
import img2 from "./images/img2.jpg";
import img3 from "./images/img3.jpg";
import img4 from "./images/img4.jpg";
import img5 from "./images/img5.jpg";
const About = () => {
  return (
    <div className="header2">
      <div className="header-intro">
        <div className="introtext">
          <h1>About SimpleSip</h1>
          <p>
            We craft Beverages with simple ingredients and elevated states.No
            artificial Flavours,Clarity and quality in every sip. <br />
          </p>
        </div>
        <div className="soda">
          <img
            src={soda10}
            alt="soda"
            style={{
              width: "550px",
              height: "400px",
              borderRadius: "40px",
            }}
          />
        </div>
      </div>
      <hr />
      <div className="impressions">
        <div className="founded">
          <p>Founded</p>
          <h4>2018</h4>
        </div>
        <div className="served">
          <p>Drinks Served</p>
          <h4>120M</h4>
        </div>
        <div className="local">
          <p>Local Partners</p>
          <h4>120+</h4>
        </div>
        <div className="rating">
          <p>Avg. Ratings</p>
          <h4>4.8/5</h4>
        </div>
      </div>
      <div className="blog">
        <div className="story">
          <h4>Our Story</h4>
          <p>
            SimpleSip began with a simple idea: beverages should be clean,
            refreshing, and responsibly made. We source from growers who care
            about soil health, then bottle with minimal processing for maximum
            flavor. From cold-pressed juices to botanical sodas and teas, every
            drink is guided by our three pillars-quality, transparency, and
            sustainability.
          </p>
        </div>
        <div className="owner">
          <p>
            <q>
              Taste should be honest. If you start with great ingredients, you
              don't need to hide behind additives.{" "}
            </q>
            <div className="lit">
              <div className="founder">
                <img src={img1} alt="img1" />
              </div>
              <div className="names">
                <h3>Victor Patrick</h3>
                <p>Founder and head Brewer</p>
              </div>
            </div>
          </p>
        </div>
      </div>
      <div className="motivational-quote">
        <div className="source">
          <h3>Sourcing with Care</h3>
          <p>
            We partner with small farms and ethical suppliers to ensure
            freshness and fair practices.
          </p>
        </div>
        <div className="less">
          <h3>Less,but better</h3>
          <p>
            No artificial flavors or dyes-just clean recipes that let real
            ingredients shine.
          </p>
        </div>
        <div className="design">
          <h3>Substainable by Design</h3>
          <p>
            Lightweight glass, recyclable packaging, and a commitment to
            reducing waste.
          </p>
        </div>
      </div>
      <div className="team">
        <div className="member1">
          <img src={img2} alt="img1" />
          <div>
            {" "}
            <h3>Joseph</h3>
            <p>Operations Lead</p>
          </div>
        </div>
        <div className="member2">
          <img src={img3} alt="img3" />
          <div>
            {" "}
            <h3>Fathia</h3>
            <p>Head of Sourcing</p>
          </div>
        </div>
        <div className="member3">
          <img src={img4} alt="img4" />
          <div>
            {" "}
            <h3>Kenny</h3>
            <p>Community and Cx</p>
          </div>
        </div>
        <div className="member4">
          <img src={img5} alt="img5" />
          <div>
            {" "}
            <h3>Blaq</h3>
            <p>Product Design</p>
          </div>
        </div>
      </div>
      <div className="about-end">
        <div className="about1">
          <h3>Ready to taste the difference</h3>
          <p>Explore Our Best-sellers and discover your Favourite Drinks</p>
        </div>
        <div className="shop2">
          <button>Shop</button>
        </div>
      </div>
      <hr />
         <div className="copyrights">
        <div className="reserved">
          &copy; 2025 SimpleSip. All Rights reserved
        </div>
        <div className="terms">
          <a href="#w">Privacy</a>
          <a href="#w">Terms</a>
          <a href="#w">Support</a>
        </div>
      </div>
    </div>
  );
};

export default About;
