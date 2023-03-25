import "../styles/globals.css";
import { Provider } from "next-auth/react";

function MyApp({ Component, pageProps }) {
  return (
    // <Provider>
      <Component {...pageProps} />
    // {/* </Provider> */}
  );
}

export default MyApp;
