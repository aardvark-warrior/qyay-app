# QYay App!

This is a monorepo that contains the client and server applications for the QYay application.

- The client is a React app bootstrapped with Vite.
- The server is a Nest.js application with PostgreSQL DB.

This application is build with PERN stack.

https://github.com/cs421sp24-homework/homework-aardvark-warrior

## Getting Started

To get started with this project, follow these steps:

1. **Prerequisites**: Make sure you have Git, Node, and PNPM (the new package manager for Node) installed. If you don't have PNPM, you can install it globally with `npm install -g pnpm`. Additionally, you need to have Docker set up and running to spin up a local Postgres server. If you're new to Docker, you can refer to [this helpful guide](https://docs.docker.com/get-started/).
2. **Repository Setup**: Clone the repository and navigate to the root folder in the terminal.
3. **Dependencies**: Run `pnpm install` to install the dependencies for both the client and server.
4. **Environment Configuration**: Add a `.env` file in each the `app` and `api` sub-folders, similar to their respective `.env.example` files, and fill in the required environment variables.
5. **Database Setup**: Run `pnpm docker:up` to initialize the Postgres server.
6. **Run Locally**: To start the server, run `pnpm start:api`. To start the client, run `pnpm start:app`. Alternatively, you can run `pnpm start:all` to start both the client and server applications.

## Iteration 3

1. **Event Host Registration/Login**: Visit `http://localhost:5173/`. Click the `Register` button and create a new account by providing `Username`, `Password`, and `Display Name`. After that, you can login using your username and password and begin creating events.

2. **Creating Events (Host)**: After logging in, you can use the plus icon on the left sidebar to create a new event - simply provide the name of your Event. 

3. **Deleting Events (Host)**: Note: all events hosted on the app (including those created by other users) will show up in the feed. However, you will only be able to edit/delete the events that you have created (authorization provided by logging in).

4. **Joining an Event**: One way to ask questions for an event is by joining the event itself. Starting in the Home Page (`http://localhost:5173`), you can click the `Join Event` button in the top right corner of the event you are interested in. This will take you to a new page with a unique link for that event. There, you can ask questions anonymously clicking the green `Ask a Question` button. A dialog will pop-up, prompting you to enter in your question.

5. **Leaving Question 2**: There is another way you can leave questions for an event. From the Home Page, you can click `View Questions` in the bottom of the event you are interested in, and then click `Ask a Question`. A dialog will pop-up, prompting you for your question.

6. **Event Actions**: Whether you are the creator or an attendee of an event, the action buttons in en event box will disappear when you opt to `Join Event`. They will re-appear once you return to the home page.

7. **Navigating home**: There are several ways you can navigate home. One way is to click the `Home` button in the top left corner of the app. Another way is by typing in the Base URL of the app `http://localhost:5173/`.