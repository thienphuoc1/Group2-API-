import mongoose from "mongoose";
import Subject from "../models/Subject.js";

export function CreateSubject(req, res) {
  const subject = new Subject({
    _id: mongoose.Types.ObjectId(),
    subName: req.body.subName,
    subID: req.body.subID,
    totalPeriod: req.body.totalPeriod,
    subType: req.body.subType
  });

  return subject.save().then((newSubject) => {
    return res.status(201).json({
      success: true,
      message: "New subject created successfully",
      Subject: newSubject,
    });
  });
}

export function GetSubject(req, res) {
  const id = req.params.subjectID;
  //console.log(id);
  Subject.findOne({ _id: id })
    .then((docs) => {
      return res.status(200).json({
        success: true,
        message: "Found Subject",
        Subject: docs,
      });
    })
    .catch((err) => {
      return res.status(500).json({
        success: false,
        message: "Server error. Please try again",
        error: err.message,
      });
    });
}

export function ListSubject(req, res) {
  Subject.find({})
    .then((docs) => {
      return res.status(200).json({
        success: true,
        message: "A list of all subject",
        subject: docs,
      });
    })
    .catch((err) => {
      return res.status(500).json({
        success: fasle,
        message: "Server error. Please try again",
        error: err.message,
      });
    });
}

export function UpdateSubject(req, res) {
  const id = req.params.subjectID;
  const updateSubject = req.body;

  console.log(id);

  Subject.updateOne({ _id: id }, { $set: updateSubject })
    .exec()
    .then((docs) => {
      return res.status(200).json({
        success: true,
        message: "Updated",
        Subject: docs,
      });
    })
    .catch((err) => {
      return res.status(500).json({
        success: false,
        message: "Server error. Please try again",
        err: err.message,
      });
    });
}

export function DeleteSubject(req, res) {
  const id = req.params.subjectID;

  Subject.remove({ _id: id })
    .then((docs) => {
      return res.status(204).json({
        success: true
      });
    })
    .catch((err) => {
      return res.status(500).json({
        success: false,
        message: "Server error. Please try again",
        err: err.message
      });
    });
}
