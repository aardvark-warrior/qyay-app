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
5. **Database Setup**: Run `pnpm docker:up` from project root to initialize the Postgres server.
6. **Run Locally**: To start the server, run `pnpm start:api` (from project root). To start the client, run `pnpm start:app` (from project root). Alternatively, you can run `pnpm start:all` to start both the client and server applications (from project root).

## Iteration 4
### User stories
1.  As an attendee, I want to view and upvote questions submitted by others, so that the most popular questions can be identified. (Must-Have)

2. As an organizer, I want to view a real-time list of questions, so that I can manage and respond to them effectively during the event. (Must-Have)

3. As an organizer, I want to mark questions as answered, so that the audience knows which questions have been addressed. (Nice-to-Have)

### Instructions
* **Note**: To simultaneously see the Host and Audience view of the app, open a regular browser window and an incognito/private browsing window side-by-side. Visit the website in both windows. Login as Host in one of the windows and remain as guest in the other. 

1. **Preparation**: Refer to [Iteration 3](#iteration-3) for instructions on registering, logging in, and creating an event as Host. Get the unique `Event ID` for your event and provide it to your audience (Host side). In the other browser window, click `Join Event` from the home page and paste in the `Event ID` (Audience side).

2. **Audience Join Event**: After joining the event on the Audience side, you can begin asking questions by clicking the `Ask a Question` button, typing in your question, and pressing `Save`. 

3. **Audience Upvote Questions**: Everyone in the event will be able to see each other's questions. You can upvote any question on the page by clicking the `Upvote` button. This will show the Host which questions are most popular.

4. **Host View Questions**: On the Host side, you can moderate an event by clicking the `Moderate Event` button on the event you created. This will take you to a real-time list of questions submitted by the Audience.

5. **Host Marking Questions as Answered**: From the list of real-time questions, you can click on the `Answered`/`Not Answered` button in the bottom left of each question. Toggling this will update the Audience side in real-time to show which questions have been answered and which ones are still pending.

## Iteration 3

### User stories
1. "As an attendee, I want to join the event using a unique link or code, so that I can submit my questions."

2. "As an attendee, I want to submit questions anonymously, so that I can freely ask questions without any privacy concerns."

### Instructions

1. **Event Host Registration/Login**: Visit `http://localhost:5173/`. Click the `Register` button and create a new account by providing `Username`, `Password`, and `Display Name`. After that, you can login using your username and password and begin creating events.

2. **Creating Events (Host)**: After logging in, you can use the `New Event` on the left sidebar to create a new event. Simply provide your event's name (required) and description (optional). Click `Save`, and your event should show up in the middle column of the page.

3. **Event Actions (Host)**: There are three action buttons for each event - 1. `Event ID`, which shows the unique ID the your audience can enter into the app to join your event. 2. `Change Event`, which shows a drop down with `Delete` option. 3. `Moderate Event`, which takes you to the event's page with all the questions that the audience has asked.

4. **Joining an Event (Audience)**: Starting in the Home Page (`http://localhost:5173`), click the `Join Event` button in the left side bar. This will show a pop-up textbox for you to enter the unique `Event ID` provided by the Host. Click `Join` to be taken to the event's Q&A page. Note: if you entered the wrong ID or the event page failed to load, press the `Home` button in the left sidebar to restart at the home page.

5. **Asking Questions (Audience)**:
In the event Q&A page, click the `Ask a Question` button to type in your question and click `Save`.

6. **Navigating home**: There are several ways you can navigate home. One way is to click the `Home` button in the top left corner of the app. Another way is by typing in the Base URL of the app `http://localhost:5173/`.
