import React from "react";

import Footer from "../Footer/Footer";

const AboutUs = () => {
  return (
    <>
      <div className="about flex-c justify-content-center">
        <div className="heading">About Us</div>
        <div className="sub-heading text-center">
          <h2>
            Isekai is a retail experience created for fans of all things
            Japanese lifestyle and culture. We carry exclusive officially
            licensed apparel, accessories, and more.
          </h2>
        </div>
        <div className="body">
          <h3>
            Isekai is a lifestyle brand inspired by Japanese streetwear and
            anime culture. We began to make t-shirts for ourselves. After
            discovering that our friends liked the designs, it was decided to
            take it to the next level and build our own brand. This is how
            isekai was founded in 2022 when we released our very first designs
            at a small convention in the Philippines. Since then, isekai has
            become a lifestyle brand that has collaborated with Hatsune Miku,
            Doki Doki Literature Club, Kizuna AI and more. One of the reasons
            that isekai is growing internationally is because we attend many
            Asian pop culture and comic conventions throughout the year. Not
            only do we attend conventions in The Philippines, but we also travel
            to Singapore, Malaysia, Indonesia and Thailand. Once a year, we
            visit Japan for inspiration and meetings. In addition, isekai has
            different retailers located all over Asia, which also creates local
            communities. Something that once started with an edgy anime t-shirt
            from enthusiastic teenagers, has now become a growing international
            brand and community.
          </h3>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default AboutUs;
