module.exports = (mongoose) => {
  var schema = mongoose.Schema(
    {
      user_id: String,
      time_start: String,
      time_end: String,
      day: Number,
    },
    { timestamps: true }
  );

  schema.method("toJSON", function () {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const Schedules = mongoose.model("schedule", schema);
  return Schedules;
};
