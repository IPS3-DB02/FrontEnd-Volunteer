# Volunteer Front-End

The Volunteer Project is designed to facilitate and streamline the process of connecting potential volunteers with non-profit organizations. It provides a user-friendly web interface through which users can explore and learn about various non-profit organizations and their missions.

## Getting Started

First of all you need to install Yarn. You can find the instructions [here](https://classic.yarnpkg.com/lang/en/docs/install).

```bash
npm install -g yarn
```

### Production

```bash
git clone https://github.com/VolunteerConnect/VolunteerFrontend
yarn install
yarn build
yarn start
```

### Development

```bash
git clone https://github.com/VolunteerConnect/VolunteerFrontend
yarn install
yarn prepare
yarn dev
```

## Tech Stack

- Frontend: Next.js

We chose Next.js for our project because of its exceptional blend of performance, SEO benefits, and developer convenience. Next.js offers Server-Side Rendering (SSR) for faster page loading and improved SEO, giving my project a competitive edge. The framework's focus on performance optimization through features like automatic code splitting and pre-rendering ensures an excellent user experience. Its developer-friendly features, including hot module replacement and built-in support for CSS, simplify the development process. The thriving Next.js community and ecosystem provide ample resources and support. With Next.js, I have a versatile and production-ready tool at my disposal, ready to help me build a high-quality web application.

- Authentication and authorization service: Auth0

We selected Auth0 for our project because it provides a reliable and straightforward solution for user authentication and identity management. Its robust security features, ease of integration, and strong documentation streamline the development process. Auth0 offers a secure and efficient way to manage user identities, making it the right choice for our project's authentication needs.

- Testing: Jest

We chose Jest for our project because it is a powerful and versatile testing framework. Jest's built-in support for mocking and code coverage makes it easy to write comprehensive tests. Its simple and intuitive API makes it easy to use, and its large community and ecosystem provide ample resources and support. Jest is a reliable and efficient testing framework that will help us ensure the quality of our project.

To run tests:

```bash
yarn jest
```
