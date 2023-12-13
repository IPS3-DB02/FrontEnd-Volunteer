# Volunteer Front-End

The Volunteer Project is designed to facilitate and streamline the process of connecting potential volunteers with non-profit organizations. It provides a user-friendly web interface through which users can explore and learn about various non-profit organizations and their missions.

## Getting Started

### Production

```bash
git clone https://github.com/VolunteerConnect/VolunteerFrontend
yarn build
yarn start
```

### Development

```bash
git clone https://github.com/VolunteerConnect/VolunteerFrontend
yarn prepare
yarn dev
```

## Tech Stack

- Frontend: Next.js

We chose Next.js for our project because of its exceptional blend of performance, SEO benefits, and developer convenience. Next.js offers Server-Side Rendering (SSR) for faster page loading and improved SEO, giving my project a competitive edge. The framework's focus on performance optimization through features like automatic code splitting and pre-rendering ensures an excellent user experience. Its developer-friendly features, including hot module replacement and built-in support for CSS, simplify the development process. The thriving Next.js community and ecosystem provide ample resources and support. With Next.js, I have a versatile and production-ready tool at my disposal, ready to help me build a high-quality web application.

- Authentication and authorization service: Auth0

We selected Auth0 for our project because it provides a reliable and straightforward solution for user authentication and identity management. Its robust security features, ease of integration, and strong documentation streamline the development process. Auth0 offers a secure and efficient way to manage user identities, making it the right choice for our project's authentication needs.

## Definition of Done

- Code follows coding standards and best practices.
- All code related to the user story or feature is written and reviewed.
- Code has been reviewed by at least one other team member for quality, correctness, and adherence to coding standards.
- Any identified issues or improvements have been addressed.
- The user story or feature has undergone user acceptance testing by stakeholders or users.
- There are no known defects or critical issues related to the user story or feature.
- The code is ready for deployment to the production environment.

## Components

In NextJs, we use components because we don't want to write code twice. When we can reuse code, we will with components.

## User Story

**As a potential volunteer, I want to see an overview of non-profit organizations so that I can choose which organization I want to assist.**

**Acceptance Criteria**

- I should see a list of 5 non-profit organizations with their names, brief descriptions and a picture or logo.
