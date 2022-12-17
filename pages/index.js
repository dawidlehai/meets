import MeetupList from "../components/meetups/MeetupList";
import meetups from "../data/meetups";

const HomePage = () => {
  return <MeetupList meetups={meetups} />;
};

export default HomePage;
