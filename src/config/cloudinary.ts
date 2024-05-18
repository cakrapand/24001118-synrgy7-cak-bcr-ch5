import cloudinary from "cloudinary";

const cloudinaryConfig = cloudinary.v2;

cloudinaryConfig.config({
  cloud_name: "djclnpeld",
  api_key: "538692472873867",
  api_secret: "GDUnSybTH7IJNddZ62nw2JFAfco",
  secure: true,
});

export default cloudinaryConfig;
