const express = require("express");
const router = express.Router();
const Meetup = require("../models/Meetup");
router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    Meetup.findByIdAndDelete(id, function (error, response) {
      if (error) {
        return res.send(error);
      }

      console.log(response);
      return res.send(response);
    });
  } catch (error) {
    return res.send(error);
  }
});

router.get("/", async (req, res) => {
  Meetup.find().exec(function (error, allMeetups) {
    if (error) {
      return res.send(error);
    }
    return res.send({
      Meetups: [...allMeetups],
    });
  });
});
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  try {
    Meetup.findById(id, function (error, response) {
      if (error) {
        return res.send(error);
      }

      console.log(response);
      return res.send(response);
    });
  } catch (error) {
    return res.send(error);
  }
});

router.post("/", async (req, res) => {
  let newMeetup = new Meetup({
    ...req.body,
  });
  await newMeetup.save();

  return res.send(newMeetup);
});

router.put("/:id", async (req, res) => {
  const id = req.params.id;
  const updateMeetup = await Meetup.findByIdAndUpdate(
    { _id: id },
    { ...req.body },
    { new: true }
  );

  return res.send(updateMeetup);
});

module.exports = router;
