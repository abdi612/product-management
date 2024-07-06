# Product Management Application

This is a simple Product Management Application built with Angular and NgRx for state management. The application allows users to create, update, and view products.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [Best Practices Followed](#best-practices-followed)
- [Contributing](#contributing)
- [License](#license)

## Features

- View a list of products
- Add a new product
- Edit an existing product
- Delete a product
- State management using NgRx
- Form validation using Reactive Forms

## Technologies Used

- Angular
- NgRx (for state management)
- Angular Router
- Angular Forms
- TypeScript
- Angular Material (optional, for UI components)
- JSON Server (for API mocking in development)

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine
- Angular CLI installed globally (`npm install -g @angular/cli`)

### Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/abdi612/product-management.git
   cd product-management
   ```

2. Install the dependencies:

   ```sh
   npm install
   ```

### Running the Application

1. Start the JSON server to mock API:

   ```sh
   npm run server
   ```

2. In a separate terminal, start the Angular development server:

   ```sh
   ng serve
   ```

3. Open your browser and navigate to `http://localhost:4200/products`.

## Project Structure

src/
|-- app/
| |-- core/
| | |-- interceptors/
| | |-- services/
| |-- product-form/
| | |-- product-form.component.html
| | |-- product-form.component.ts
| | |-- product-form.component.css
| | |-- product-form.module.ts
| |-- products/
| | |-- product-list/
| | |-- product.model.ts
| | |-- product.service.ts
| | |-- products-routing.module.ts
| | |-- products.module.ts
| |-- state/
| |-- product.actions.ts
| |-- product.reducer.ts
| |-- product.effects.ts
| |-- index.ts
|-- assets/
|-- environments/
|-- styles.css

## Best Practices Followed

1. **Module Organization**

   - Organized the project into feature and shared modules for better separation of concerns and reusability.

2. **Component-Based Architecture**

   - Created dedicated components for each part of the UI to encapsulate logic and promote reusability.

3. **State Management with NgRx**

   - Used NgRx for predictable state management and to handle business logic separately from UI components.

4. **Routing**

   - Configured routing with dedicated routing modules to handle navigation and lazy loading efficiently.

5. **Reactive Forms**

   - Used reactive forms for form validation and dynamic form handling.

6. **Service Layer**

   - Created a service layer for handling HTTP requests to separate business logic from UI components.

7. **Interceptors**

   - Used HTTP interceptors for centralized error handling and other cross-cutting concerns.

8. **In-Memory Web API for Development**

   - Used `angular-in-memory-web-api` to simulate an API during development.

9. **Type Safety with TypeScript**
   - Used TypeScript interfaces and type annotations for better type safety and code documentation.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request if you would like to contribute to the project.

1. Fork the repository.
2. Create your feature branch: `git checkout -b feature/YourFeature`.
3. Commit your changes: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature/YourFeature`.
5. Open a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
