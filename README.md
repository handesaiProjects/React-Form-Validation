```markdown:README.md
# React Form Validation

This project demonstrates form validation in a React application using the React Hook Form library. It includes a simple form with fields for name, email, confirm email, and password, along with validation rules for each field.

## Features

- Form validation using React Hook Form
- Real-time validation feedback
- Customizable validation rules
- Context API for managing user data
- Responsive design with CSS

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/your-username/react-form-validation.git
   ```

2. Navigate to the project directory:
   ```
   cd react-form-validation
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm start
   ```

5. Open your browser and visit `http://localhost:3000` to see the application.

## Usage

1. Fill in the form fields with valid data.
2. The form will provide real-time validation feedback for each field.
3. If all fields are valid, the form can be submitted.
4. The submitted data will be logged to the console and the user's name will be displayed in the header.

## Dependencies

- React
- React DOM
- React Hook Form
- Font Awesome
- React Icons

## File Structure

- `public/index.html`: The main HTML file.
- `src/index.js`: The entry point of the application.
- `src/App.js`: The main component that sets up the context and renders the header and form.
- `src/components/Header.js`: The header component that displays the user's name.
- `src/components/Form.js`: The form component with validation rules.
- `src/contexts/UserContext.js`: The context for managing user data.
- `src/styles/App.css`: The main CSS file for the application.
- `src/styles/Header.css`: The CSS file for the header component.
- `src/styles/Form.css`: The CSS file for the form component.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvement, please open an issue or submit a pull request.

## License

This project is open-source and available under the [MIT License](https://opensource.org/licenses/MIT).
```