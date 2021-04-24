import Header from './header';
import styles from './index.less';

export default function IndexPage(props) {
  if (props.hidden) {
    return (
      <div>
        <h1 className={styles.title}>Hello, World!</h1>
        <Header />
      </div>
    );
  }
  return (
    <div>
      <h1 className={styles.title}>Page index</h1>
      <Header />
    </div>
  );
}
