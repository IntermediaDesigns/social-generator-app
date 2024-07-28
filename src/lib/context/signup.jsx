import { Client, Account, ID } from "appwrite";
require("dotenv").config();
const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1") // Your API Endpoint
  .setProject(process.env.REACT_APP_APPWRITE_PROJECT_ID); // Your project ID

const account = new Account(client);

await account.create(
  ID.unique(),
  'Name',
  'email@example.com',
  'password'
);

