import { Hero } from '../Hero/Hero';
import { Projects } from '../Projects/Projects';
import { Skills } from '../Skills/Skills';
import styles from './Main.module.css';

const Main = () => {
  return (
    <main>
      <div className={styles.main}>
        <Hero />
        <Skills />
        <Projects />
      </div>
    </main>
  );
};

export default Main;
