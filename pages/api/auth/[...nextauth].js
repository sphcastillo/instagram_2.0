import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default  NextAuth({
  // Configure one or more authentication providers
    providers: [
        GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
        // ...add more providers here
    ],
    // use below code for template login page

    // theme: {
    //     logo: "https://links.papareact.com/sq0",
    //     brandColor: "#F13287",
    //     colorScheme: "auto",
    // }

    pages: {
        signIn: "/auth/signin",
    },
    // from Google: email, image, name
    // upgrading the callback when you sign in : enhance the user's object
    callbacks: {
        async session({ session, token, user }){
            session.user.username = session.user.name
            // spilt where there is a space
                .split(" ")
            // join it again without the space
                .join("")
            // lowercase it
                .toLocaleLowerCase();

                // ex. Sophia Castillo ==> sophiacastillo
                session.user.uid = token.sub;
                return session;

        }
    }
})
