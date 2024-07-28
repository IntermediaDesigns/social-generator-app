import { Client, Account } from "appwrite";

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject(process.env.REACT_APP_APPWRITE_PROJECT_ID);                 // Your project ID

const account = new Account(client);

const promise = account.createVerification('https://example.com'); // Your verification URL

promise.then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
});
