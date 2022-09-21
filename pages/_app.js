import "../styles/globals.css";
import 'tailwindcss/tailwind.css';
// We need to wrap our app with the session provider
// helps keep our session state throughout the app
import { SessionProvider } from "next-auth/react";

//NextAuth is a library that helps us with authentication

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
        <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;