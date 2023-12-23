import { Header } from './components/Header/Header';
import { Hero } from './components/Hero/Hero';
import { Project } from './components/Project/Projects';
import { Skills } from './components/Skills/Skills';
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
        <Hero />
        <Skills />
        <Project />

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
