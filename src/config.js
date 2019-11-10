export default {
  MAX_ATTACHMENT_SIZE: 5000000,
  s3: {
    REGION: "us-east-1",
    BUCKET: "react-example-uploads"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://m07z07b9a7.execute-api.us-east-1.amazonaws.com/prod"
  }
};