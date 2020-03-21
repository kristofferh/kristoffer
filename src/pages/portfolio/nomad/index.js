import React, { useContext } from "react";
import DeviceFrame from "../../../components/device-frame";
import ImageLoader from "../../../components/image-loader";
import Layout from "../../../components/layouts";
import { ThemeContext } from "../../../context/theme";

export const frontmatter = {
  portfolio: true,
  order: 0,
  title: "Nomad",
  color: "blue",
  description: "Fixing one part of a broken health system.",
  path: "/portfolio/nomad",
  media: [
    {
      type: "image",
      img: "/images/nomad/nomad-poster.png",
      placeholder: "/images/nomad/nomad-poster-small.png",
      aspectRatio: 0.75
    }
  ],
  styles: {
    background: "#f5f6f7"
  },
  darkStyles: {
    background: "#47525d"
  }
};

const Nomad = props => {
  const { title, styles, darkStyles, media } = frontmatter;
  const { theme } = useContext(ThemeContext);
  return (
    <Layout {...props} frontmatter={frontmatter}>
      <div className="portfolio">
        <section
          className="portfolio-media"
          style={theme === "dark" ? darkStyles : styles}
        >
          <ImageLoader
            {...media[0]}
            styles={{
              maxWidth: 800,
              margin: "auto"
            }}
            imageProps={{
              alt: title
            }}
          />
        </section>
        <section className="content-container">
          <h1 className="page-title load-in">{title}</h1>
          <div className="row">
            <div className="col-xs-12 col-sm-8">
              <p className="load-in">
                Nomad is a healthcare marketplace for doctors and nurses, and
                the people that hire them.
              </p>
              <p className="load-in">
                It’s a big industry, fraught with all the issues that plague the
                rest of the healthcare system in the United States: slow moving
                bureaucracy, inefficiencies galore, technology from 1988, and
                everything is way more expensive than it needs to be. We’re
                changing all that.
              </p>
              <p className="load-in">
                We are building a healthcare marketplace that is easy to
                navigate, user-friendly, efficient, and most importantly:{" "}
                <span className="highlight">much cheaper for everyone.</span>
              </p>
              <p className="load-in">It’s like it’s not 1988 anymore!</p>
            </div>
            <div className="col-xs-12 col-sm-4 first-sm">
              <ImageLoader
                placeholder={"/images/nomad/hello-small.png"}
                aspectRatio={1}
                img={"/images/nomad/hello.png"}
                imageProps={{
                  alt: "Hello"
                }}
              />
            </div>
          </div>
        </section>
        <section className="portfolio-media">
          <div className="row">
            <div
              className="col-xs-12 portfolio-media-item"
              style={{ background: "#f0f8ff" }}
            >
              <DeviceFrame>
                <ImageLoader
                  img="/images/nomad/dashboard@2x.png"
                  placeholder="/images/nomad/dashboard-small.png"
                  aspectRatio={2752 / 2880}
                  imageProps={{
                    alt: "Nomad Dashboard"
                  }}
                />
              </DeviceFrame>
            </div>
          </div>
        </section>
        <section className="content-container">
          <div className="row">
            <section className="col-xs-12 col-sm-8 col-sm-offset-2 portfolio-copy--second-row">
              <h2 className="sub-title load-in">What Do I Do There?</h2>
              <p className="load-in">A little bit of everything.</p>
              <p className="load-in">
                I have a unique hybrid role at Nomad: I’m an Art Director and,
                at the same time, I am the Lead Product Engineer. I spent half
                of my time designing features, and the other half building them.
              </p>
            </section>
          </div>
        </section>
        <section className="portfolio-media">
          <div
            className="portfolio-media-item"
            style={{ background: "#f0f8ff" }}
          >
            <DeviceFrame>
              <ImageLoader
                img="/images/nomad/find-a-job-few-results.png"
                placeholder="/images/nomad/find-a-job-few-results-small.png"
                aspectRatio={3066 / 2880}
                imageProps={{
                  alt: "Search page, few results."
                }}
              />
            </DeviceFrame>
          </div>
        </section>
        <section className="content-container">
          <div className="row">
            <section className="col-xs-12 col-sm-8 portfolio-copy--second-row">
              <h2 className="sub-title load-in">Process</h2>
              <p className="load-in">
                Each project is different, some are refinements to existing
                features, others are brand-new greenfield iniatives. The process
                is therefore slightly modified for each one, but it typically
                follows the same steps.
              </p>
            </section>
          </div>
        </section>
        <section className="portfolio-process-container">
          <ol className="portfolio-process content-container">
            <li className="portfolio-process-item">
              <h3 className="sub-title">Research</h3>
              <p>
                Gain knowledge of users, context, technologies, gather user
                data, research competitive products, conduct interviews and
                field studies.
              </p>
            </li>
            <li className="portfolio-process-item">
              <h3 className="sub-title">Explore</h3>
              <p>
                Evaluate the most efficient ways to communicate to solve the
                problem, formulate a hypothesis. Distill the goals and outcomes.
                Sketches, occasionally wireframes, and initial mockups of the
                overall flow and strategy.
              </p>
            </li>
            <li className="portfolio-process-item">
              <h3 className="sub-title">Test</h3>
              <p>
                Evaluate and select initial concepts for prototype development
                and usability testing.
              </p>
            </li>
            <li className="portfolio-process-item">
              <h3 className="sub-title">Refine</h3>
              <p>
                Incorporate feedback from stakeholders and users. Add polish and
                explore animations.
              </p>
            </li>
            <li className="portfolio-process-item">
              <h3 className="sub-title">Deliver</h3>
              <p>Complete design and produce deliverables.</p>
            </li>
            <li className="portfolio-process-item">
              <h3 className="sub-title">Implement</h3>
              <p>
                Build the designs. Add a little extra to make it fun. Release as
                A/B tests or staggered rollouts.
              </p>
            </li>
            <li className="portfolio-process-item">
              <h3 className="sub-title">Analyze</h3>
              <p>Evaluate results of tests and releases.</p>
            </li>
          </ol>
        </section>

        <section className="portfolio-media" style={{ background: "#f0f8ff" }}>
          <div className="row">
            <div className="col-xs-12 col-sm-6 portfolio-media-item">
              <DeviceFrame className="load-in load-in--sequence-1">
                <ImageLoader
                  img="/images/nomad/find-a-job-wireframe-free-text.png"
                  aspectRatio={3066 / 2880}
                  imageProps={{
                    alt: "Search wireframe, free text."
                  }}
                />
              </DeviceFrame>
            </div>
            <div className="col-xs-12 col-sm-6 portfolio-media-item">
              <DeviceFrame className="load-in load-in--sequence-2">
                <ImageLoader
                  img="/images/nomad/find-a-job-filters.png"
                  aspectRatio={3066 / 2880}
                  imageProps={{
                    alt: "Higher-fidelity search mockup."
                  }}
                />
              </DeviceFrame>
            </div>
          </div>
        </section>

        <section className="portfolio-media" style={{ background: "#f0f8ff" }}>
          <div className="row">
            <div className="col-xs-12 col-sm-6 portfolio-media-item">
              <DeviceFrame className="load-in load-in--sequence-1">
                <ImageLoader
                  img="/images/nomad/find-a-job-wireframe-quick-view.png"
                  aspectRatio={2092 / 2880}
                  imageProps={{
                    alt: "Wireframe of quick-view for search."
                  }}
                />
              </DeviceFrame>
            </div>
            <div className="col-xs-12 col-sm-6 portfolio-media-item">
              <DeviceFrame className="load-in load-in--sequence-2">
                <ImageLoader
                  img="/images/nomad/find-a-job-quick-view.png"
                  aspectRatio={2092 / 2880}
                  imageProps={{
                    alt: "Higher fidelity comp of quick view for search."
                  }}
                />
              </DeviceFrame>
            </div>
          </div>
        </section>

        <section className="portfolio-media" style={{ background: "#fafafa" }}>
          <div className="row">
            <div className="col-xs-6 portfolio-media-item">
              <DeviceFrame
                type="phone--light"
                className="load-in load-in--sequence-1"
              >
                <ImageLoader
                  img="/images/nomad/find-a-job-wireframe-mobile-free-text.png"
                  aspectRatio={1334 / 750}
                  imageProps={{
                    alt: "Wireframe of search for mobile."
                  }}
                />
              </DeviceFrame>
            </div>
            <div className="col-xs-6 portfolio-media-item">
              <DeviceFrame
                type="phone--light"
                className="load-in load-in--sequence-2"
              >
                <ImageLoader
                  img="/images/nomad/find-a-job-mobile-filters-applied.png"
                  aspectRatio={1334 / 750}
                  imageProps={{
                    alt: "Search for mobile mockup."
                  }}
                />
              </DeviceFrame>
            </div>
          </div>
        </section>
        <section className="portfolio-media">
          <div className="portfolio-media-item" style={{ background: "#fff" }}>
            <DeviceFrame
              styles={{
                maxWidth: 720,
                margin: "auto"
              }}
            >
              <video className="video-player" autoPlay loop playsInline>
                <source src="/videos/nomad-logged-out.mp4" type="video/mp4" />
              </video>
            </DeviceFrame>
          </div>
        </section>
        <section className="portfolio-media">
          <div className="row">
            <div className="col-xs-6 portfolio-media-item">
              <DeviceFrame type="phone" className="load-in load-in--sequence-1">
                <ImageLoader
                  img="/images/nomad/dashboard-mobile.png"
                  aspectRatio={1334 / 750}
                  imageProps={{
                    alt: "Nomad dashboard mobile."
                  }}
                />
              </DeviceFrame>
            </div>
            <div
              className="col-xs-6 portfolio-media-item"
              style={{ background: "#fffaf0" }}
            >
              <DeviceFrame className="load-in load-in--sequence-3" type="phone">
                <ImageLoader
                  img="/images/nomad/public-facility-mobile.png"
                  aspectRatio={1334 / 750}
                  imageProps={{
                    alt: "Public facility screen for mobile."
                  }}
                />
              </DeviceFrame>
            </div>
          </div>
        </section>
        <section className="portfolio-media">
          <div
            className="portfolio-media-item"
            style={{ background: "#FFF8DA" }}
          >
            <DeviceFrame className="load-in">
              <ImageLoader
                img="/images/nomad/post-a-job@2x.png"
                aspectRatio={1600 / 2880}
                imageProps={{
                  alt: "Posting a job screen."
                }}
              />
            </DeviceFrame>
          </div>
        </section>

        <section className="portfolio-media">
          <div
            className="portfolio-media-item"
            style={{ background: "#fafafa" }}
          >
            <DeviceFrame bodyStyles={{ maxHeight: 800 }}>
              <ImageLoader
                placeholder="/images/nomad/public-profile-small.png"
                img="/images/nomad/public-profile@2x.png"
                aspectRatio={5418 / 2880}
                imageProps={{
                  alt: "Public profile screen."
                }}
              />
            </DeviceFrame>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Nomad;
