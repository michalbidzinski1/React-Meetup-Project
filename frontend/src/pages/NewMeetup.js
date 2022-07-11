import NewMeetupForm from "../components/meetups/NewMeetupForm";
import { useHistory } from "react-router-dom";
const axios = require("axios");

function NewMeetupPage() {
  const history = useHistory();

  const addMeetupHandler = (meetupData) => {
    axios({
      method: "post",
      url: "http://localhost:5000/meetups",
      data: meetupData,
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      console.log(res);
    });
  };
  return (
    <section>
      <h1> Add new meetup</h1>
      <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
  );
}
export default NewMeetupPage;
