import MeetupList from "../components/meetups/MeetupList";
import { useState, useEffect } from "react";
import axios from "axios";

function AllMeetupsPage() {
  const [loadedMeetups, setLoadedMeetups] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/meetups")
      .then((response) => setLoadedMeetups(response.data.Meetups));
  }, []);
  console.log("Loaded meetups", loadedMeetups);

  return (
    <section>
      <h1> All Meetups</h1>
      <MeetupList meetups={loadedMeetups} />
    </section>
  );
}
export default AllMeetupsPage;
