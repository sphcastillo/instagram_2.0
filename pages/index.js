import Head from "next/head";
import Header from "../components/Header";
import Feed from "../components/Feed";

export default function Home(){
  return (
    <div>
      <Head>
        <title>INSTAGRAM 2.0 Build</title>
      </Head>

      <Header />
      <Feed />

      {/* Modal */}
    </div>
  )
}