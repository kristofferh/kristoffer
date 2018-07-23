import React from "react";

import "./styles.scss";

exports.data = {
  title: "Resume",
  color: "blue",
  description: "Kristoffer Hedstrom's Resume."
};

const Resume = () => (
  <div className="resume-wrapper content-container">
    <section className="summary-wrapper masthead row middle-xs top-sm">
      <div className="title-wrapper col-xs-12 col-md-6">
        <h1 className="page-title" id="kristoffer-hedstrom">
          Kristoffer Hedstrom
        </h1>
      </div>
      <div className="contact-wrapper col-md-6 col-xs-12">
        <div className="email">
          Email:{" "}
          <a className="block-link" href="mailto:hello@k-create.com">
            hello@k-create.com
          </a>
        </div>
        <div className="site">
          Site:{" "}
          <a className="block-link" href="http://k-create.com">
            k-create.com
          </a>
        </div>
      </div>
    </section>

    <section className="section-wrapper summary-wrapper row">
      <div className="summary col-xs-12">
        I’m an Interactive Designer and Developer with{" "}
        <span className="highlight">17 years of experience</span>. I have both
        programming and graphic design skills, which makes me a bit of a strange
        monster. In addition, I have Product Management and User Experience
        design expertise.{" "}
        <span className="highlight">I still want to learn and get better.</span>
      </div>
    </section>

    <section className="section-wrapper experience-wrapper row">
      <header className="section-header col-xs-12 col-sm-3">
        <h2 className="section-headline">Experience</h2>
      </header>
      <div className="section-content col-xs-12 col-sm-9">
        <div className="experience">
          <div className="title-location row space-between-xs">
            <h3 className="title col-xs-12 col-sm-8">
              Art Director + Lead Product Engineer
            </h3>
            <div className="location col-xs-12 col-sm-4">New York, NY</div>
          </div>
          <a
            target="_blank"
            href="https://nomadhealth.com"
            className="org highlight-link"
            rel="noopener noreferrer"
          >
            Nomad Health
          </a>
          <div className="dates">
            <abbr className="dt dt-start" title="2016-03-27">
              March 2016
            </abbr>{" "}
            -{" "}
            <abbr className="dt dt-end" title="now">
              Present
            </abbr>
          </div>
          <div className="summary">
            <ul>
              <li>Creating a modern healthcare staffing platform</li>
              <li>
                Designing new features in Sketch, Illustrator, and Photoshop
              </li>
              <li>Prototyping with Invision and Framer</li>
              <li>
                Implementing with React, Redux, Redux-Form, Webpack and SASS
                frontend
              </li>
              <li>Introducing React-Native into workflow</li>
              <li>Changing healthcare for the better</li>
            </ul>
          </div>
        </div>
        <div className="experience">
          <div className="title-location row space-between-xs">
            <h3 className="title col-xs-12 col-sm-8">Engineer, Team Lead</h3>
            <div className="location col-xs-12 col-sm-4">New York, NY</div>
          </div>
          <a
            target="_blank"
            href="https://tictail.com"
            className="org highlight-link"
            rel="noopener noreferrer"
          >
            Tictail
          </a>
          <div className="dates">
            <abbr className="dt dt-start" title="2015-12-04">
              December 2015
            </abbr>{" "}
            -{" "}
            <abbr className="dt dt-end" title="2016-03-25">
              March 2016
            </abbr>
          </div>
          <div className="summary">
            <ul>
              <li>
                Lead a marketing team for Swedish based e-commerce company
              </li>
              <li>
                Implementing responsive landing pages with Node, React, and
                Coffeescript
              </li>
            </ul>
          </div>
        </div>
        <div className="experience">
          <div className="title-location row space-between-xs">
            <h3 className="title col-xs-12 col-sm-8">
              Product Manager / Engineering Manager
            </h3>
            <div className="location col-xs-12 col-sm-4">New York, NY</div>
          </div>
          <a
            target="_blank"
            href="http://tumblr.com"
            className="org highlight-link"
            rel="noopener noreferrer"
          >
            Tumblr
          </a>
          <div className="dates">
            <abbr className="dt dt-start" title="2014-10-01">
              October 2014
            </abbr>{" "}
            -{" "}
            <abbr className="dt dt-end" title="2015-11-01">
              November 2015
            </abbr>
          </div>
          <div className="summary">
            <ul>
              <li>
                Lead a team of Product Engineers, Designers, and Mobile
                Engineers
              </li>
              <li>Data-driven product management</li>
              <li>
                Plan and manage projects for the Identity team (personalization,
                themes, customization, etc)
              </li>
              <li>
                Evaluate and analayze results of projects and tests, plan for
                next iteration
              </li>
              <li>
                You know that scene from <em>Minority Report</em> with the
                virtual reality gloves? It was almost exactly nothing like that.
              </li>
            </ul>
          </div>
        </div>
        <div className="experience">
          <div className="title-location row space-between-xs">
            <h3 className="title col-xs-12 col-sm-8">Product Engineer</h3>
            <div className="location col-xs-12 col-sm-4">New York, NY</div>
          </div>
          <a
            target="_blank"
            href="http://tumblr.com"
            className="org highlight-link"
            rel="noopener noreferrer"
          >
            Tumblr
          </a>
          <div className="dates">
            <abbr className="dt dt-start" title="2012-07-09">
              July 2012
            </abbr>{" "}
            -{" "}
            <abbr className="dt dt-end" title="2014-09-30">
              September 2014
            </abbr>
          </div>
          <div className="summary">
            <ul>
              <li>
                Create new features on Tumblr.com using Javascript, PHP, CSS and
                HTML5
              </li>
              <li>Design and develop new default themes</li>
              <li>Focus on post creation tools</li>
            </ul>
          </div>
        </div>
        <div className="experience">
          <div className="title-location row space-between-xs">
            <h3 className="title col-xs-12 col-sm-8">Senior Developer</h3>
            <div className="location col-xs-12 col-sm-4">New York, NY</div>
          </div>
          <a
            target="_blank"
            href="http://fantasy.co/"
            className="org highlight-link"
            rel="noopener noreferrer"
          >
            Fantasy
          </a>
          <div className="dates">
            <abbr className="dt dt-start" title="2011-06-15">
              June 2011
            </abbr>{" "}
            -{" "}
            <abbr className="dt dt-end" title="2012-07-01">
              July 2012
            </abbr>
          </div>
          <div className="summary">
            <ul>
              <li>
                Focus on implementing complex UI designs using Javascript
                (including Ajax, SVG, WebGL and Canvas APIs), CSS and HTML5
              </li>
              <li>Mentor junior developers</li>
              <li>
                Clients include <em>Google</em>, <em>EA</em>, <em>HTC</em>, and{" "}
                <em>USA Today</em>
              </li>
              <li>Stayed out late one night</li>
            </ul>
          </div>
        </div>
        <div className="experience">
          <div className="title-location row space-between-xs">
            <h3 className="title col-xs-12 col-sm-8">
              Senior Interactive Developer
            </h3>
            <div className="location col-xs-12 col-sm-4">Seattle, WA</div>
          </div>
          <a
            target="_blank"
            href="http://www.wearepop.com/"
            className="org highlight-link"
            rel="noopener noreferrer"
          >
            POP
          </a>
          <div className="dates">
            <abbr className="dt dt-start" title="2010-07-01">
              July 2010
            </abbr>{" "}
            -{" "}
            <abbr className="dt dt-end" title="2011-06-15">
              June 2011
            </abbr>
          </div>
          <div className="summary">
            <ul>
              <li>
                Develop award-winning, standards-based, high-profile sites for
                interactive agency
              </li>
              <li>
                Implementing JavaScript solutions using design patterns such as
                the Factory, Module and Pub-Sub
              </li>
              <li>
                Create solutions using jQuery and Prototype libraries, as well
                as native JavaScript
              </li>
              <li>Lead team of junior developers</li>
              <li>
                Clients include <em>Microsoft</em>, <em>Pokémon</em>,{" "}
                <em>Target</em>, <em>Nintendo</em>, and{" "}
                <em>San Francisco Opera</em>
              </li>
            </ul>
          </div>
        </div>
        <div className="experience">
          <div className="title-location row space-between-xs">
            <h3 className="title col-xs-12 col-sm-8">
              Senior Interactive Designer
            </h3>
            <div className="location col-xs-12 col-sm-4">Seattle, WA</div>
          </div>
          <a
            target="_blank"
            href="http://us.ncsoft.com"
            className="org highlight-link"
            rel="noopener noreferrer"
          >
            NCsoft West
          </a>
          <div className="dates">
            <abbr className="dtstart" title="2009-06-01">
              June 2009
            </abbr>{" "}
            -{" "}
            <abbr className="dtend" title="2010-07-01">
              July 2010
            </abbr>
          </div>
          <div className="summary">
            <ul>
              <li>
                Create mockups for NCsoft’s Western game franchise web sites
              </li>
              <li>
                Design user interface solutions for game installers and
                launchers
              </li>
              <li>
                Develop and maintain game sites using Movable Type and
                Expression Engine
              </li>
              <li>Project Management</li>
              <li>
                Games include <em>Guild Wars</em>, <em>Guild Wars 2</em>,{" "}
                <em>Aion</em>, <em>Lineage II</em>, <em>City of Heroes</em>
              </li>
            </ul>
          </div>
        </div>
        <div className="experience">
          <div className="title-location row space-between-xs">
            <h3 className="title col-xs-12 col-sm-8">Senior Designer</h3>
            <div className="location col-xs-12 col-sm-4">Seattle, WA</div>
          </div>
          <a
            href="http://cobalt.com/"
            target="_blank"
            className="org highlight-link"
            rel="noopener noreferrer"
          >
            Cobalt
          </a>
          <div className="dates">
            <abbr className="dt dt-start" title="2008-10-01">
              October 2008
            </abbr>{" "}
            -{" "}
            <abbr className="dt dt-end" title="2009-05-30">
              June 2009
            </abbr>
          </div>
          <div className="summary">
            <ul>
              <li>Design mockups for automotive industry web sites</li>
              <li>
                Design and implement click-through simulators and prototypes for
                use with usability testing and client pitches
              </li>
              <li>
                Create Information Architecture deliverables (wireframes,
                sitemaps, personas, etc)
              </li>
              <li>
                Act as mentor and technical consultant for junior members of the
                team
              </li>
              <li>
                Clients include <em>GM</em>, <em>Lexus</em>, <em>BMW</em>,{" "}
                <em>Volkswagen</em>, <em>Hyundai</em>, <em>Subaru</em>, and{" "}
                <em>Audi</em>
              </li>
            </ul>
          </div>
        </div>
        <div className="experience">
          <div className="title-location row space-between-xs">
            <h3 className="title col-xs-12 col-sm-8">Senior Web Developer</h3>
            <div className="location col-xs-12 col-sm-4">Seattle, WA</div>
          </div>
          <a
            href="https://www.wearepop.com/"
            target="_blank"
            className="org highlight-link"
            rel="noopener noreferrer"
          >
            POP
          </a>
          <div className="dates">
            <abbr className="dt dt-start" title="2007-06-01">
              June 2007
            </abbr>{" "}
            -{" "}
            <abbr className="dt dt-end" title="2008-10-01">
              October 2008
            </abbr>
          </div>
          <div className="summary">
            <ul>
              <li>
                Develop award-winning, standards-based, high-profile sites for
                interactive agency
              </li>
              <li>
                Responsible for implementing complex UI designs using
                Javascript, CSS, HMTL, and Actionscript/Flash
              </li>
              <li>Web application development</li>
              <li>Lead team of junior developers</li>
              <li>
                Clients include <em>Nintendo</em>, <em>Raleigh Bicycles</em>,{" "}
                <em>Microsoft</em>,<em>Ubisoft</em>,{" "}
                <em>New York Metropolitan Opera</em>
              </li>
            </ul>
          </div>
        </div>
        <div className="experience">
          <div className="title-location row space-between-xs">
            <h3 className="title col-xs-12 col-sm-8">Interactive Developer</h3>
            <div className="location col-xs-12 col-sm-4">Seattle, WA</div>
          </div>
          <a
            href="http://kcts.org"
            target="_blank"
            className="org highlight-link"
            rel="noopener noreferrer"
          >
            KCTS Television
          </a>
          <div className="dates">
            <abbr className="dt dt-start" title="2003-12-01">
              December 2003
            </abbr>{" "}
            -{" "}
            <abbr className="dt dt-end" title="2007-05-30">
              June 2007
            </abbr>
          </div>
          <div className="summary">
            <ul>
              <li>
                Design, develop, and maintain KCTS.org and related websites
              </li>
              <li>Design and implement PBS and PBS Kids related sites</li>
              <li>
                Create interactive features using Flash / Actionscript, ASP, SQL
                and XML
              </li>
              <li>Application development</li>
            </ul>
          </div>
        </div>
        <div className="experience">
          <div className="title-location row space-between-xs">
            <h3 className="title col-xs-12 col-sm-8">
              Freelance Interactive Designer
            </h3>
            <div className="location col-xs-12 col-sm-4">Seattle, WA</div>
          </div>
          <a href="http://k-create.com" className="org highlight-link">
            Freelance / K-Create
          </a>
          <div className="dates">
            <abbr className="dt dt-start" title="2001-06-01">
              June 2001
            </abbr>{" "}
            -{" "}
            <abbr className="dt dt-end" title="2012-06-02">
              July 2012
            </abbr>
          </div>
          <div className="summary">
            <ul>
              <li>Freelance designer / developer for various web sites</li>
              <li>Creative development using Web Standards</li>
              <li>
                User Experience Design, Information Architecture, and usability
                testing
              </li>
              <li>
                Dynamic content, including content management systems, using
                languages such as PHP, JavaScript (Node.js), and Ruby (on Rails)
              </li>
              <li>Database architecture</li>
              <li>
                JavaScript development using jQuery, Prototype / Scriptaculous,
                Mootools, YUI, and native JavaScript
              </li>
              <li>
                Flash design and{" "}
                <abbr className="help" title="Object Oriented Programing">
                  OOP
                </abbr>{" "}
                Actionscript development
              </li>
              <li>Graphic, logo and print design</li>
            </ul>
          </div>
        </div>
        <div className="experience">
          <div className="title-location row space-between-xs">
            <h3 className="title col-xs-12 col-sm-8">PHP Programmer</h3>
            <div className="location col-xs-12 col-sm-4">Seattle, WA</div>
          </div>
          <span className="org highlight-italic">
            Technology Resource Foundation
          </span>
          <div className="dates">
            <abbr className="dt dt-start" title="2001-06-01">
              June 2001
            </abbr>{" "}
            -{" "}
            <abbr className="dt dt-end" title="2006-10-01">
              October 2001
            </abbr>
          </div>
          <div className="summary">
            <ul>
              <li>Programmer for non-profit educational organization</li>
              <li>HTML, PHP and MySQL development</li>
              <li>Initial functionality tests and analysis on beta versions</li>
              <li>User-interface and graphic design</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section className="section-wrapper education-wrapper row">
      <header className="section-header col-xs-12 col-sm-3">
        <h2 className="section-headline">Education</h2>
      </header>
      <div className="section-content col-xs-12 col-sm-9">
        <div className="education">
          <div className="title-location row space-between-xs">
            <h3 className="title col-xs-12 col-sm-8">
              <abbr className="help" title="Bachelor of Science">
                B.S.
              </abbr>, Computer Science
            </h3>
            <div className="location col-xs-12 col-sm-4">Tacoma, WA</div>
          </div>
          <span className="org highlight-italic">
            Pacific Lutheran University
          </span>
          <div className="dates">
            <abbr className="dt dt-start" title="1998-09-20">
              September 1998
            </abbr>{" "}
            -{" "}
            <abbr className="dt dt-end" title="2001-05-30">
              May 2001
            </abbr>
          </div>
          <div className="summary">
            <ul>
              <li>Minor in Mathematics</li>
              <li>Graduated Cum Laude. 3.77 G.P.A.</li>
              <li>Dean’s List</li>
              <li>Aret&eacute; Society Award</li>
              <li>Main focus: graphics programming and modeling, web design</li>
              <li>Senior project: Flight Simulator </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section className="section-wrapper skills-wrapper row">
      <header className="section-header col-xs-12 col-sm-3">
        <h2 className="section-headline">Skills</h2>
      </header>
      <div className="section-content col-xs-12 col-sm-9">
        <ul className="skills no-bullet-list">
          <li className="skill">HTML5</li>
          <li className="skill">CSS3</li>
          <li className="skill">JavaScript</li>
          <li className="skill">React / React-Native</li>
          <li className="skill">GraphQL</li>
          <li className="skill">PHP</li>
          <li className="skill">Python</li>
          <li className="skill">Swift</li>
          <li className="skill">No/My/SQL</li>
          <li className="skill">Git</li>
          <li className="skill">Sublime Text</li>
          <li className="skill">SASS/LESS</li>
          <li className="skill">Sketch</li>
          <li className="skill">Photoshop</li>
          <li className="skill">Illustrator</li>
          <li className="skill">After Effects</li>
          <li className="skill">Framer</li>
          <li className="skill">Mac OS X</li>
          <li className="skill">UNIX</li>
        </ul>
      </div>
    </section>

    <footer className="footer">
      <p>
        <em className="highlight">
          URLs and References available upon request
        </em>
      </p>
    </footer>
  </div>
);

export default Resume;
