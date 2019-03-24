import React from "react";

import Layout from "../../components/layouts";

import "./styles.scss";

export const frontmatter = {
  title: "Resume",
  color: "blue",
  description: "Kristoffer Hedstrom's Resume."
};

const Resume = props => (
  <Layout {...props} frontmatter={frontmatter}>
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
          <span className="highlight">18 years of experience</span>. I have both
          programming and graphic design skills, which makes me a bit of a
          strange monster. In addition, I have Product Management and User
          Experience design expertise.{" "}
          <span className="highlight">
            I still want to learn and get better.
          </span>
        </div>
      </section>

      <section className="section-wrapper experience-wrapper row">
        <header className="section-header col-xs-12 col-sm-3">
          <h2 className="section-headline">Experience</h2>
        </header>
        <div className="section-content col-xs-12 col-sm-9">
          <div className="experience">
            <div className="title-location row space-between-xs">
              <h3 className="title col-xs-12 col-sm-8">Senior UX Engineer</h3>
              <div className="location col-xs-12 col-sm-4">
                Zürich, Switzerland
              </div>
            </div>
            <a
              target="_blank"
              href="https://google.com"
              className="org highlight-link"
              rel="noopener noreferrer"
            >
              Google
            </a>
            <div className="dates">
              <abbr className="dt dt-start" title="2019-03-04">
                March 2019
              </abbr>{" "}
              -{" "}
              <abbr className="dt dt-end" title="now">
                Present
              </abbr>
            </div>
            <div className="summary">
              <ul>
                <li>Creation tools for Google Calendar</li>
                <li>Prototyping</li>
                <li>Attempting to learn Swiss German</li>
              </ul>
            </div>
          </div>
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
              <abbr className="dt dt-end" title="2019-02-15">
                February 2019
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
                  Implementing with React, Redux, Redux-Form, Webpack,
                  CSS-in-JS, and SASS frontend
                </li>
                <li>Introducing React-Native into workflow</li>
                <li>Changing healthcare for the better</li>
              </ul>
              <p>
                Technologies: <em>Sketch</em>, <em>Photoshop</em>,{" "}
                <em>InVision</em>, <em>Framer</em>, <em>Illustrator</em>,{" "}
                <em>React</em>, <em>JavaScript</em>, <em>CSS</em>, <em>HTML</em>
              </p>
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
                  Led a marketing team for Swedish based e-commerce company
                </li>
                <li>
                  Implemented responsive landing pages with Node, React, and
                  Coffeescript
                </li>
              </ul>
              <p>
                Technologies: <em>Coffeescript</em>, <em>React</em>,{" "}
                <em>JavaScript</em>, <em>CSS</em>, <em>HTML</em>
              </p>
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
                  Led a team of Product Engineers, Designers, and Mobile
                  Engineers
                </li>
                <li>Spearheaded data-driven product management</li>
                <li>
                  Planned and managed projects for the <em>Identity</em> team
                  (personalization, themes, customization, etc)
                </li>
                <li>Evaluated and analyzed results of projects and tests</li>
                <li>Made teenagers super angry</li>
              </ul>
              <p>
                Technologies: <em>SQL</em>, <em>PHP</em>, <em>Hadoop</em>
              </p>
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
                  Created new features on Tumblr.com using Javascript, PHP, CSS,
                  and HTML5
                </li>
                <li>Created themes used by millions of people</li>
                <li>Focused on post creation tools</li>
                <li>Made the mobile web version 86% less terrible</li>
                <li>Created embeddable posts for use on third party sites</li>
              </ul>
              <p>
                Technologies: <em>Backbone</em>, <em>JavaScript</em>,{" "}
                <em>Photoshop</em>, <em>PHP</em>, <em>CSS</em>
              </p>
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
                  Focused on implementing complex UI designs using Javascript
                  (including Ajax, SVG, WebGL and Canvas APIs), CSS and HTML5
                </li>
                <li>Mentored junior developers</li>
                <li>
                  Contributed to <em>USA Today</em>
                  ’s major redesign
                </li>
                <li>Worked on several award winning sites for Google</li>
                <li>Created a Chrome app for Al-Jazeera English</li>
              </ul>
              <p>
                Technologies: <em>Canvas</em>, <em>WebGL</em>,{" "}
                <em>JavaScript</em>
              </p>
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
                  Developed award-winning, standards-based, high-profile sites
                  for interactive agency
                </li>
                <li>
                  Implemented JavaScript solutions using design patterns such as
                  the Factory, Module, and Pub-Sub
                </li>
                <li>
                  Created solutions using jQuery and Prototype libraries, as
                  well as native JavaScript
                </li>
                <li>Led team of junior developers</li>
                <li>
                  Collaborated with clients including <em>Microsoft</em>,{" "}
                  <em>Pokémon</em>, <em>Target</em>, <em>Nintendo</em>,{" "}
                  <em>Sydney Opera House</em>, and <em>San Francisco Opera</em>
                </li>
                <li>Worked on in-house products using C# and JavaScript</li>
              </ul>
              <p>
                Technologies: <em>JavaScript</em>, <em>jQuery</em>, <em>C#</em>,{" "}
                <em>Photoshop</em>, <em>Illustrator</em>, <em>SVG</em>
              </p>
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
                  Created mockups for NCsoft’s Western game franchise web sites
                </li>
                <li>
                  Designed user interface solutions for game installers and
                  launchers
                </li>
                <li>
                  Developed and maintained game sites using Movable Type and
                  Expression Engine
                </li>
                <li>Provided Project Management and Design QA</li>
                <li>
                  Shipped games included <em>Guild Wars</em>,{" "}
                  <em>Guild Wars 2</em>, <em>Aion</em>, <em>Lineage II</em>,{" "}
                  <em>City of Heroes</em>
                </li>
              </ul>
              <p>
                Technologies: <em>Photoshop</em>, <em>Adobe Flash</em>,{" "}
                <em>Illustrator</em>, <em>OmniGraffle</em>, <em>InDesign</em>
              </p>
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
                <li>Designed sites and apps for automotive industry</li>
                <li>
                  Designed and implemented click-through simulators and
                  prototypes for use with usability testing and client pitches
                </li>
                <li>
                  Created Information Architecture deliverables (wireframes,
                  sitemaps, personas, etc)
                </li>
                <li>
                  Acted as mentor and technical consultant for junior members of
                  the team
                </li>
                <li>
                  Contributed to client work including <em>GM</em>,{" "}
                  <em>Lexus</em>, <em>BMW</em>, <em>Volkswagen</em>,{" "}
                  <em>Hyundai</em>, <em>Subaru</em>, and <em>Audi</em>
                </li>
              </ul>
              <p>
                Technologies: <em>Photoshop</em>, <em>Illustrator</em>,{" "}
                <em>InDesign</em>, <em>Visio</em>
              </p>
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
                  Developed award-winning, standards-based, high-profile sites
                  for interactive agency.
                </li>
                <li>
                  Implemented complex UI designs using JavaScript, CSS, HMTL,
                  and Actionscript/Flash
                </li>
                <li>
                  Created Wordpress plugins and sites for a variety of clients
                </li>
                <li>Developed web applications</li>
                <li>
                  Worked on client projects including <em>Nintendo</em>,{" "}
                  <em>Raleigh Bicycles</em>, <em>Microsoft</em>,<em>Ubisoft</em>
                  , <em>New York Metropolitan Opera</em>
                </li>
              </ul>
              <p>
                Technologies: <em>HTML</em>, <em>JavaScript</em>,{" "}
                <em>Actionscript</em>, <em>Flash</em>, <em>Wordpress</em>
              </p>
            </div>
          </div>
          <div className="experience">
            <div className="title-location row space-between-xs">
              <h3 className="title col-xs-12 col-sm-8">
                Interactive Developer
              </h3>
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
                  Designed, developed, and maintained KCTS.org and related
                  websites
                </li>
                <li>Designed and implemented PBS and PBS Kids related sites</li>
                <li>
                  Created interactive features using Flash / Actionscript, ASP,
                  SQL and XML
                </li>
                <li>Developed applications</li>
                <li>
                  Created an online payment system for pledge drives, which
                  brought in over $200,000 USD the first year
                </li>
              </ul>
              <p>
                Technologies: <em>Photoshop</em>, <em>Flash/Actionscript</em>,{" "}
                <em>ASP</em>, <em>SQL</em>, <em>Adobe Premiere</em>,{" "}
                <em>FinalCut</em>
              </p>
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
                <li>
                  Acted as freelance designer / developer for various web sites
                </li>
                <li>
                  Contributed User Experience Design, Information Architecture
                </li>
                <li>Conducted usability testing</li>
                <li>
                  Implemented custom content management systems, using PHP,
                  JavaScript (Node.js), and Ruby (on Rails)
                </li>
                <li>
                  Developed frontend systems using jQuery, Prototype /
                  Scriptaculous, Mootools, YUI, native JavaScript, Flash and
                  Actionscript
                </li>
                <li>Graphic, logo and print design</li>
              </ul>
              <p>
                Technologies: <em>Photoshop</em>, <em>Wordpress</em>,{" "}
                <em>Flash/Actionscript</em>, <em>PHP</em>,{" "}
                <em>Ruby on Rails</em>, <em>Node.js</em>
              </p>
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
                <li>
                  Developed open library application in HTML, PHP and MySQL for
                  non-profit educational organization
                </li>
                <li>
                  Performed initial functionality tests and analysis on beta
                  versions
                </li>
                <li>Contributed user-interface and graphic design</li>
              </ul>
              <p>
                Technologies: <em>Photoshop</em>, <em>PHP</em>, <em>MySql</em>,{" "}
                <em>HTML</em>
              </p>
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
                </abbr>
                , Computer Science
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
                <li>
                  Main focus: graphics programming and modeling, web design
                </li>
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
  </Layout>
);

export default Resume;
