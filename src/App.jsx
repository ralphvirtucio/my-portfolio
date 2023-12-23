import thumbnailProjectOne from './assets/images/thumbnail-project-1-small.webp';
import thumbnailProjectTwo from './assets/images/thumbnail-project-2-small.webp';
import thumbnailProjectThree from './assets/images/thumbnail-project-3-small.webp';
import thumbnailProjectFour from './assets/images/thumbnail-project-4-small.webp';
import thumbnailProjectFive from './assets/images/thumbnail-project-5-small.webp';
import thumbnailProjectSix from './assets/images/thumbnail-project-6-small.webp';

import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import { SocialMediaBar } from './components/SocialMediaBar/SocialMediaBar';

// TODO
const tempStyles = {
  width: '90%',
  marginInline: 'auto',
};

const App = () => {
  return (
    <>
      <Header />

      <main style={tempStyles}>
        {/* <section>
          <div>
            <h2>
              Nice to meet you! I&apos;m <strong>Ralph Virtucio.</strong>
            </h2>

            <p>
              Based in the Philippines, I&apos;m a front-end developer
              passionate about building accessible web apps that users love.
            </p>

            <a href=''>Contact Me</a>
          </div>

          <div>
            <img
              src={testProfileImg}
              alt='Profile'
            />
          </div>
        </section> */}

        <Hero />

        <section>
          <ul>
            <li>
              <h3>HTML</h3>
              <p>3 Years Experience</p>
            </li>
            <li>
              <h3>CSS</h3>
              <p>3 Years Experience</p>
            </li>
            <li>
              <h3>JavaScript</h3>
              <p>3 Years Experience</p>
            </li>
            <li>
              <h3>React</h3>
              <p>2 Years Experience</p>
            </li>
            <li>
              <h3>Python</h3>
              <p>1 Year Experience</p>
            </li>
            <li>
              <h3>Sass</h3>
              <p>2 Years Experience</p>
            </li>
          </ul>
        </section>

        <section>
          <div>
            <h2>Projects</h2>

            <a href=''>Contact Me</a>
          </div>

          <div>
            <ul>
              <li>
                <img
                  src={thumbnailProjectOne}
                  alt='Design Portfolio'
                />
                <h2>Design Portfolio</h2>
                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li></li>
                </ul>
              </li>
              <li>
                <img
                  src={thumbnailProjectTwo}
                  alt='E-Learning Landing Page'
                />
                <h2>E-Learning Landing Page</h2>
                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li></li>
                </ul>
              </li>
              <li>
                <img
                  src={thumbnailProjectThree}
                  alt='TODO WEB APP'
                />
                <h2>Todo Web App</h2>
                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                </ul>
              </li>
              <li>
                <img
                  src={thumbnailProjectFour}
                  alt='Entertainment Web App'
                />
                <h2>Entertainment Web App</h2>
                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                </ul>
              </li>
              <li>
                <img
                  src={thumbnailProjectFive}
                  alt='Memory Game'
                />
                <h2>Memory Game</h2>
                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                </ul>
              </li>
              <li>
                <img
                  src={thumbnailProjectSix}
                  alt='Art Gallery Showcase'
                />
                <h2>Art Gallery Showcase</h2>
                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                </ul>
              </li>
            </ul>
          </div>
        </section>

        <section>
          <div>
            <h2>Contact</h2>
            <p>
              I would love to hear about your project and how I could help.
              Please fill in the form, and I&apos;ll get back to you as soon as
              possible.
            </p>
          </div>

          <form>
            <input
              type='text'
              name='name'
              placeholder='Name'
              id='name'
            />
            <input
              type='email'
              name='email'
              placeholder='Email'
              id='email'
            />
            <textarea
              name='message'
              id='message'
              cols='30'
              rows='10'
              placeholder='Message'></textarea>

            <button type='submit'>Send Message</button>
          </form>
        </section>
      </main>

      <footer>
        <h2>ralphvirtucio</h2>

        <SocialMediaBar />
      </footer>
    </>
  );
};
export default App;
