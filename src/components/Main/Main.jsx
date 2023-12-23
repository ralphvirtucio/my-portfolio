import { Hero } from '../Hero/Hero';
import { Projects } from '../Projects/Projects';
import { Skills } from '../Skills/Skills';
import styles from './Main.module.css';

const Main = () => {
  return (
    <main className={styles.main}>
      <Hero />
      <Skills />
      <Projects />
    </main>
  );
};

export default Main;
