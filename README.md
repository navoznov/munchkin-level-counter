# Munchkin Level Counter

An AI generated (vibe coded) application.
A simple and clean web application to track player levels for the Munchkin card game. Built with React and TypeScript, this app provides a straightforward interface to manage the game state without any backend.

![image](https://github.com/ivan-noskov/munchkin-level-counter/assets/38481483/108ec96a-0865-4d7a-b509-f83696f8c7b4)


## ✨ Features

- **Add & List Players**: Easily add new players to the game session.
- **Level Tracking**: Each player has a level counter that starts at 1.
- **Increase/Decrease Level**: Simple `+` and `-` buttons to modify a player's level.
- **Level 1 Minimum**: Player levels cannot go below 1.
- **Clean UI**: A minimalist interface that focuses on functionality.

## 🛠️ Tech Stack

- **[React](https://reactjs.org/)**: A JavaScript library for building user interfaces.
- **[TypeScript](https://www.typescriptlang.org/)**: A typed superset of JavaScript that compiles to plain JavaScript.
- **[Create React App](https://create-react-app.dev/)**: Used to set up the development environment.
- **[GitHub Pages](https://pages.github.com/)**: For easy deployment and hosting.

## 🚀 Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) (or yarn) installed on your machine.

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/YOUR_USERNAME/munchkin-level-counter.git](https://github.com/YOUR_USERNAME/munchkin-level-counter.git)
    ```
    *(Don't forget to replace `YOUR_USERNAME` with your actual GitHub username)*

2.  **Navigate to the project directory:**
    ```bash
    cd munchkin-level-counter
    ```

3.  **Install dependencies:**
    ```bash
    npm install
    ```

4.  **Run the development server:**
    ```bash
    npm start
    ```
    The application will open automatically in your browser at `http://localhost:3000`.

## 🚢 Deployment

This project is configured for easy deployment to GitHub Pages.

To deploy the app, simply run the following command:

```bash
npm run deploy
```

This command will build the application and push the contents of the `build` folder to a `gh-pages` branch on your repository.

## 🔮 Future Improvements

- [ ] Save game state to `localStorage` to persist between browser sessions.
- [ ] Add a "Gear" or "Strength" tracker for each player.
- [ ] Implement a dice roller.
- [ ] Create a "Winner" declaration when a player reaches level 10.