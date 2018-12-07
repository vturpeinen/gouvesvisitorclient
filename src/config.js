export default {
    MAX_ATTACHMENT_SIZE: 5000000,
    s3: {
      REGION: "eu-central-1",
      BUCKET: "gouves-lataukset"
    },
    apiGateway: {
      REGION: "eu-central-1",
      URL: "https://gzyhu1kyx3.execute-api.eu-central-1.amazonaws.com/prod"
    },
    cognito: {
      REGION: "eu-central-1",
      USER_POOL_ID: "eu-central-1_ORzUjv9BU",
      APP_CLIENT_ID: "6titoj78hsbu86skl0o9fathhl",
      IDENTITY_POOL_ID: "eu-central-1:7857827a-2901-45ff-a90b-b0a4d90b0b46"
    },
  };