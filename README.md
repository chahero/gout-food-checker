# Gout Food Checker

A web application that helps users manage gout by searching and checking purine content levels in various foods and beverages.

## Overview

**Gout Food Checker** is a comprehensive food database application designed specifically for people with gout. It provides quick access to purine content information for over 354 different foods and drinks, helping users make informed dietary choices based on medical guidelines.

The application uses purine classification standards from:
- **2021 Hou Guidelines**
- **2014 Kaneko Guidelines**

## Features

- **Food Search**: Quickly search through 354+ foods and beverages by name
- **Purine Content Database**: View detailed purine levels for each food item
- **Risk Classification**: Foods are categorized by risk level (High, Moderate, Low)
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Information Guide**: Learn about gout, purine, and dietary management
- **Modern UI**: Clean, dark-themed interface with intuitive navigation

## Tech Stack

- **Frontend Framework**: React 18.3
- **Routing**: React Router DOM 6.20
- **Build Tool**: Vite 5.4
- **Styling**: CSS (with inline styles and global styles)
- **Deployment**: Netlify

## Project Structure

```
gout-food-checker/
├── src/
│   ├── pages/
│   │   ├── Home.jsx          # Main food search and database page
│   │   └── Info.jsx          # Information and guide page
│   ├── data/                 # Food database and reference data
│   ├── App.jsx               # Main app component with routing
│   └── main.jsx              # Application entry point
├── public/                   # Static assets
├── index.html                # HTML template
├── package.json              # Project dependencies
├── vite.config.js            # Vite configuration
└── netlify.toml              # Netlify deployment config
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/chahero/gout-food-checker.git
cd gout-food-checker
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start the development server with hot reload
- `npm run build` - Build the application for production
- `npm run preview` - Preview the production build locally

## Building for Production

```bash
npm run build
npm run preview
```

The optimized production build will be generated in the `dist/` directory.

## Deployment

This project is configured for deployment on Netlify. The `netlify.toml` file contains the necessary configuration.

To deploy:
1. Push your code to a Git repository (GitHub, GitLab, Bitbucket)
2. Connect your repository to Netlify
3. Netlify will automatically build and deploy the application

**Live Demo**: https://gout-food-checker.netlify.app/
**GitHub Repository**: https://github.com/chahero/gout-food-checker

## Data Source

The food database contains comprehensive purine content data for:
- Common fruits and vegetables
- Grains and bread
- Dairy products
- Meat and seafood
- Beverages
- Processed foods

Each entry includes:
- Food name (Korean and English)
- Purine content (mg/100g)
- Risk level classification
- Serving information

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contributing

Contributions are welcome! Please feel free to submit issues or pull requests to improve the application.

## License

This project is open source and available under the MIT License.

## Disclaimer

This application provides general information about purine content in foods for educational purposes. It should not be used as a substitute for professional medical advice. Please consult with a healthcare provider or nutritionist before making significant dietary changes for gout management.

## Contact & Support

For issues, questions, or suggestions, please open an issue on the GitHub repository.

---

**Version**: 0.3.0
**Last Updated**: October 2024
