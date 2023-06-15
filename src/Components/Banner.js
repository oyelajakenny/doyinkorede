import React from "react";

const Banner = () => {
  return (
    <>
      <div className="banner">
        <h1>#DoyinKoredeForever</h1>
        <p>It all started in the DM</p>

        <div className="scroll">
          <a id="how2" href="#how">
            <h3>Scroll</h3>
          </a>
          <img src="./images/vector.png" alt="vector"></img>
        </div>
      </div>
      <div id="how" className="how-we-met">
        <h2>HOW WE MET</h2>
        <h1>July 30th, 2023</h1>
        <hr></hr>
        <p>
          In the vast digital landscape of Facebook, our paths crossed in the
          year 2011.
          <br /> It was a time when social connections bloomed effortlessly, and
          little did we know that this
          <br /> virtual encounter would set the stage for a remarkable journey.
        </p>

        <div className="story-section">
          <div className="img">
            <img src="./images/750_2807.jpg" alt="couple"></img>
          </div>
          <div className="story">
            <p>
              5 years later, it was during the sacred month of Ramadan in 2016,
              her enchanting pictures started gracing my Facebook feed. In that
              moment, I knew with unwavering certainty that I had discovered my
              soulmate. I summoned the courage to ask her to be my girlfriend,
              to embark on this voyage of love together. She declined at first
              but we became really close. 30 days later, on that magical day,
              July 30th, 2016, we officially started dating. <br /> Eight days
              later, the cosmic forces aligned, granting us the long-awaited
              chance to meet in person. The air crackled with anticipation as we
              stood face to face, no longer confined by the digital boundaries
              that had defined our connection. And so, our story continues, a
              testament to the power of digital destiny intertwined with
              real-life encounters. We carry the lessons of the past, cherishing
              every shared moment and nurturing our love as it unfolds in the
              tapestry of our lives. Together, we embrace the beauty of our
              journey, forever grateful for the serendipitous events that
              brought us together and forever committed to weaving a tale of
              love that will stand the test of time.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
