import './styles.css';
import "../prism.css";
import Prism from "prismjs";
import "prismjs/themes/prism-okaidia.css";
import "prismjs/components/prism-jsx";

function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
export default App;
