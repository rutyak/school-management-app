const cloudinary = require('../storage/Cloudinary');

const createController = (model) => {
  return async (req, res) => {
    const {
      name,
      photo,
      id,
      gender,
      dob,
      contact,
      fees,
      salary,
      className,
      classlimit,
      year,
      teacher,
      assignedClass,
      address,
      father,
      attendance,
      classconducted
    } = req.body;

    try {

      // let imageFile;


      // if (req.file) {
      //   // Upload the image to Cloudinary
      //   const result = await cloudinary.uploader.upload_stream(
      //     { resource_type: 'auto', folder: 'Images' },
      //     (error, result) => {
      //       if (error) {
      //         return res.status(500).json({ message: "Cloudinary error", error });
      //       }
      //       imageFile = result.url; // URL of uploaded image
      //     }
      //   ).end(req.file.buffer); // Send the file buffer to Cloudinary
      // } else {
      //   return res.status(400).json({ message: "No file uploaded" });
      // }

      // Format date of birth if provided
      let formattedDob = dob ? new Date(dob).toLocaleDateString("en-GB") : undefined;

      let newData;

      switch (model.modelName) {
        case "Student":
          newData = await model.create({
            photo,
            name,
            id,
            gender,
            dob: formattedDob,
            contact,
            fees,
            className,
            address,
            father,
            attendance
          });
          break;
        case "Teacher":
          newData = await model.create({
            photo,
            name,
            id,
            gender,
            dob: formattedDob,
            contact,
            salary,
            assignedClass,
            address,
            father,
            classconducted
          });
          break;
        case "Class":
          newData = await model.create({
            className,
            teacher,
            classlimit,
            year,
          });
          break;
        default:
          return res.status(400).json({ message: "Invalid model type" });
      }

      res.status(201).json(newData);
    } catch (error) {
      console.error("Error creating data:", error);
      res.status(500).json({ message: error.message });
    }
  };
};

module.exports = createController;
