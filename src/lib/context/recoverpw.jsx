import { Client, Account } from "appwrite";

const client = new Client()
    .setEndpoint('https://cloud.appwrite.io/v1') // Your API Endpoint
    .setProject(process.env.REACT_APP_APPWRITE_PROJECT_ID);                 // Your project ID

const account = new Account(client); // Create an instance of the Account class

const promise = account.createRecovery('email@example.com', 'https://example.com'); // Your recovery URL and email

promise.then(function (response) {
    console.log(response); // Success
}, function (error) {
    console.log(error); // Failure
});
