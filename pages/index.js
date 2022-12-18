import Head from "next/head";
import { MongoClient } from "mongodb";
import { DB_CREDENTIALS } from "../config.js";
import MeetupList from "../components/meetups/MeetupList";
import meetups from "../data/meetups";

const HomePage = (props) => {
  return (
    <>
      <Head>
        <title>Meets - React, Next.js, and Remix Meetups in Your City!</title>
        <meta
          name="description"
          content="A list of front- and back-end technologies meetups in your city! Made with Next.js!"
        />
      </Head>
      <MeetupList meetups={props.meetups} />
    </>
  );
};

export const getStaticProps = async () => {
  const client = await MongoClient.connect(DB_CREDENTIALS);
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find().toArray();

  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1,
  };
};

export default HomePage;
