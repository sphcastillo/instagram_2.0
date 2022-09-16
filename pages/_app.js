import "../styles/globals.css";
import 'tailwindcss/tailwind.css'


function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (


        <Component {...pageProps} />


  );
}

export default MyApp;