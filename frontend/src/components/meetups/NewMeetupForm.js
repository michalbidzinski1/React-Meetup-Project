import Card from "../UI/Card";
import { Field, Form, Formik } from "formik";
import classes from "./NewMeetupForm.module.css";
import { useState } from "react";
import { useForm } from "react-hook-form";
function NewMeetupForm() {
  const { register, handleSubmit } = useForm();
  const [meetupData, setData] = useState("");
  console.log(meetupData);
  return (
    <Card>
      <form
        className={classes.form}
        onSubmit={handleSubmit((meetupData) =>
          setData(JSON.stringify(meetupData))
        )}
      >
        <div className={classes.control}>
          <label htmlFor="title">Meetup Title</label>
          <input {...register("title")} type="text" required id="title" />
        </div>
        <div className={classes.control}>
          <label htmlFor="image">Meetup Image</label>
          <input {...register("image")} type="url" required id="image" />
        </div>
        <div className={classes.control}>
          <label htmlFor="address">Address</label>
          <input {...register("address")} type="text" required id="address" />
        </div>
        <div className={classes.control}>
          <label htmlFor="description">Description</label>
          <textarea
            {...register("description")}
            id="description"
            required
            rows="5"
          ></textarea>
        </div>

        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}
export default NewMeetupForm;
