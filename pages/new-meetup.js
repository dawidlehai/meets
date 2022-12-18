import Head from "next/head";
import { useRouter } from "next/router";
import NewMeetupForm from "../components/meetups/NewMeetupForm";

const NewMeetupPage = () => {
  const router = useRouter();

  const addMeetupHandler = async (enteredMeetupData) => {
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredMeetupData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    console.log(data);

    router.push("/");
  };

  return (
    <>
      <Head>
        <title>Create New Meetup | Meets</title>
        <meta
          name="description"
          content="Create new meetup with a simple form on Meets."
        />
      </Head>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </>
  );
};

export default NewMeetupPage;
