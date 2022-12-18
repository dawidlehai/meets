import MeetupDetails from "../components/meetups/MeetupDetails";

const MeetupDetailsPage = (props) => {
  return (
    <MeetupDetails
      image={props.meetupData.image}
      title={props.meetupData.title}
      address={props.meetupData.address}
      description={props.meetupData.description}
    />
  );
};

export const getStaticPaths = async () => {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
};

export const getStaticProps = async (context) => {
  const { meetupId } = context.params;
  return {
    props: {
      meetupData: {
        image:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Bdg_NoweSpichrze_7_07-2013.jpg/1280px-Bdg_NoweSpichrze_7_07-2013.jpg",
        id: meetupId,
        title: "Our biggest Remix meetup in Bydgoszcz",
        address: "Dworcowa 21, 85090 Bydgoszcz",
        description:
          "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
    },
  };
};

export default MeetupDetailsPage;
