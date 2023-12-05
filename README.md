# Portfolio - Next.js

## This is my personal portfolio built with Next.js. It showcases information about me, my projects, skills, and experiences.

---

### Release
**0.04**

## View Live Demo
Check out the live version of this portfolio [here](https://alexcesar.dev).

[//]: # (TODO ADD IMAGE)

---

## Running

To get started with this project, follow the steps below:

1. **Clone this repository:**

   ```bash
   git clone https://github.com/thealexcesar/portfolio.git && cd portfolio
   ```

2. **Running with Docker:**
    - Make sure you have Docker installed on your system.
    - Run the following command to build and start the Docker container:
      ```bash 
      docker build -t portfolio .
      docker run -it -p 3000:3000 -v .:/usr/src/app portfolio
      ```
      or using docker-compose
    - ```bash
      docker-compose up --build
      ```
    - The application will be accessible at [http://localhost:3000](http://localhost:3000).

3. **Running with Yarn:**
    - Make sure you have Node.js and Yarn installed on your system.
    - Install dependencies using Yarn:
      ```bash
      yarn install
      ```
    - Start the application locally:
      ```bash
      yarn dev
      ```
    - The application will be accessible at [http://localhost:3000](http://localhost:3000).

> **Note:** Before running the application, make sure to set up your GitHub API key. Follow the steps below:

#### Setting Up Your GitHub API Key

To ensure the proper functioning of the application, you'll need to set up your own GitHub API key. Follow the steps below:

1. If you don't have a GitHub API key, create one by following the instructions at [GitHub Developer Settings](https://github.com/settings/developers).
2. In the project directory, create a file named `.env.local`.
3. Add your GitHub API key to the .env.local file. Open the file and insert the following line:
GITHUB_TOKEN=<your_github_token_value_here>

Alternatively, you can use the following command to create the file and append the key:
```bash
echo 'GITHUB_TOKEN=your_github_token_value_here' >> .env.local
```
Be cautious not to share your API keys publicly to ensure the security of your account.

### Referencing the API Key in Your Code

In your code, where you reference the GitHub API key, you can use environment variables to access the key.
Ensure you check whether the environment variable is defined before using it to avoid errors.

## Libraries

- **[dotenv](https://www.npmjs.com/package/dotenv):** Library for fluid and expressive animations in React.
- **[framer-motion](https://www.framer.com/api/motion/):** Library for fluid and expressive animations in React.
- **[next](https://nextjs.org/docs/getting-started):** React framework for production.
- **[react](https://reactjs.org/docs/getting-started.html):** Library for building user interfaces in React.
- **[react-dom](https://reactjs.org/docs/react-dom.html):** Responsible for rendering the DOM for the web.
- **[react-icons](https://react-icons.github.io/react-icons/):** Package of icons for React.
- **[sass](https://sass-lang.com/documentation):** CSS extension offering powerful features.

---

## Contributing

If you'd like to contribute to this project, please follow these guidelines:

1. Fork the repository.
2. Create a new branch: git checkout -b feature/new-feature.
3. Make your changes and commit them: git commit -m 'Add new feature'.
4. Push to the branch: git push origin feature/new-feature.
5. Submit a pull request.

---

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/thealexcesar/portfolio/blob/main/LICENSE) file for details.

---
