export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "us-east-1",
    BUCKET: "react-example-uploads"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: process.env.REACT_APP_API_URL
  }
};