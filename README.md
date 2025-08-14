# Joachim Duplat - Portfolio

A modern and interactive portfolio developed with Laravel, Inertia.js and React, showcasing the skills and projects of Joachim Duplat, Full Stack Developer.

## Technologies Used

### Backend

-   **Laravel 12** - Modern PHP framework
-   **Inertia.js** - Bridge between Laravel and React
-   **Laravel Breeze** - Authentication and authorization
-   **Laravel Sanctum** - API authentication

### Frontend

-   **React 18** - JavaScript library for user interface
-   **Inertia.js React** - React integration with Laravel
-   **Tailwind CSS** - Utility CSS framework
-   **Vite** - Build tool and bundler

### Development Tools

-   **TypeScript** - TypeScript support for React
-   **PostCSS** - CSS processing
-   **Autoprefixer** - Automatic CSS prefixes

## 📁 Project Architecture

```
joachimduplatportfolio/
├── app/                          # Laravel business logic
│   ├── Http/Controllers/         # Controllers
│   ├── Models/                   # Eloquent models
│   └── Providers/                # Service providers
├── resources/
│   ├── js/                       # JavaScript/React code
│   │   ├── Components/           # Reusable React components
│   │   │   ├── SocialButtons.jsx # Social buttons with tooltips
│   │   │   ├── TypeWriter.jsx    # Typing animation
│   │   │   ├── BlinkingBar.jsx   # Blinking input bar
│   │   │   └── Tooltip.jsx       # Tooltip component
│   │   ├── Pages/                # React pages (routes)
│   │   │   ├── Welcome.jsx       # Homepage with name input
│   │   │   ├── Hello.jsx         # Personalized welcome page
│   │   │   ├── Projects.jsx      # Project portfolio
│   │   │   ├── CV.jsx           # CV page with printing
│   │   │   └── Auth/            # Authentication pages
│   │   ├── Layouts/              # React layouts
│   │   └── app.jsx              # React entry point
│   ├── css/
│   │   └── app.css              # Tailwind styles + design system
│   └── views/
│       └── app.blade.php        # Main Laravel template
├── routes/
│   ├── web.php                  # Main routes
│   └── auth.php                 # Authentication routes
├── public/                      # Public assets
│   ├── img/                     # Images and logos
│   └── video/                   # Demo videos
├── config/                      # Laravel configuration
├── database/                    # Migrations and seeders
└── tests/                       # Automated tests
```

## Design System

The project uses a consistent design system with:

### Colors

-   **Main background** : Black (`bg-black`)
-   **Text** : White with variable opacities
-   **Accents** : White with transparency for borders

### Typography

-   **Titles** : `text-3xl md:text-5xl font-bold`
-   **Subtitles** : `text-xl md:text-2xl font-semibold`
-   **Normal text** : `text-white/70`
-   **Secondary text** : `text-white/60`

### Components

-   **Cards** : `.card` with semi-transparent background
-   **Buttons** : `.btn-primary`, `.btn-ghost`, `.btn-icon`
-   **Messages** : `.message-bubble` for chat
-   **Inputs** : `.input` with modern style

## Local Installation and Deployment

### Prerequisites

-   **PHP 8.2+**
-   **Composer**
-   **Node.js 18+**
-   **npm** or **yarn**
-   **Git**

### Installation Steps

1. **Clone the repository**

    ```bash
    git clone <repository-url>
    cd joachimduplatportfolio
    ```

2. **Install PHP dependencies**

    ```bash
    composer install
    ```

3. **Install Node.js dependencies**

    ```bash
    npm install
    ```

4. **Environment configuration**

    ```bash
    cp .env.example .env
    php artisan key:generate
    ```

5. **Database configuration**

    ```bash
    # Create SQLite database (recommended for development)
    touch database/database.sqlite

    # Or configure MySQL/PostgreSQL in .env
    ```

6. **Run migrations**

    ```bash
    php artisan migrate
    ```

7. **Start development server**

    ```bash
    # Terminal 1: Laravel server
    php artisan serve

    # Terminal 2: Vite build (hot reload)
    npm run dev
    ```

8. **Access the application**

    ```
    http://localhost:8000
    ```

### Development Scripts

```bash
# Complete development (server + build + logs)
composer run dev

# Production build
npm run build

# Tests
composer test
```

## Main Features

### 1. Interactive Homepage

-   **TypeWriter animation** : Text that displays character by character
-   **Name input** : Chat interface to capture visitor's name
-   **Local storage** : Save name in localStorage
-   **Blinking bar** : Visual indicator for input

### 2. Social Navigation

-   **Interactive buttons** : CV, Projects, GitHub, LinkedIn, Email
-   **Informative tooltips** : Guide user step by step
-   **Smart navigation** : Internal vs external links
-   **Email copy** : Clipboard copy functionality

### 3. CV Page

-   **Responsive layout** : Two columns on desktop, one on mobile
-   **Detailed sections** : Education, experience, technical skills
-   **Optimized printing** : Browser print button
-   **Professional design** : Style consistent with the rest of the site

### 4. Project Portfolio

-   **Detailed presentation** : Adopte un Box, Studi, etc.
-   **Displayed technologies** : Technical stack for each project
-   **Demo videos** : Integrated multimedia content
-   **Smooth navigation** : Inertia.js transitions

## Advanced Configuration

### Environment Variables

```env
APP_NAME="Joachim Duplat Portfolio"
APP_ENV=local
APP_DEBUG=true
APP_URL=http://localhost:8000

DB_CONNECTION=sqlite
DB_DATABASE=database/database.sqlite

VITE_APP_NAME="Joachim Duplat Portfolio"
```

### Design Customization

Styles are centralized in `resources/css/app.css` with custom Tailwind classes:

-   `.page` : Main layout
-   `.message-bubble` : Message styling
-   `.btn-*` : Button variants
-   `.card` : Surface components

### Adding New Pages

1. Create React component in `resources/js/Pages/`
2. Add route in `routes/web.php`
3. Use `Inertia::render('PageName')`

## Production Deployment

### Preparation

```bash
# Build assets
npm run build

# Laravel optimization
php artisan config:cache
php artisan route:cache
php artisan view:cache
```

### Web Server

-   **Nginx** or **Apache** configured for Laravel
-   **PHP-FPM** for performance
-   **SSL** required in production

### Database

-   **MySQL** or **PostgreSQL** recommended
-   **Redis** for caching (optional)

## Testing

```bash
# PHP tests
php artisan test

# Tests with coverage
php artisan test --coverage
```

## Component Structure

### SocialButtons.jsx

-   **Props** : `withTooltips`, `showProjects`
-   **Features** : Navigation, tooltips, email copy
-   **Reusable** : Used on Welcome and Hello

### TypeWriter.jsx

-   **Props** : `text`, `speed`, `delay`, `onComplete`
-   **Animation** : Progressive text display
-   **Callback** : Animation completion notifications

### BlinkingBar.jsx

-   **Props** : `onEnter`, `onNameSubmit`
-   **Input** : Keyboard key capture
-   **Validation** : Empty input handling

## Contributing

1. Fork the project
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## Author

**Joachim Duplat**

-   Email : joachim@shakepoint.tech
-   LinkedIn : [Joachim Duplat](https://www.linkedin.com/in/joachim-d-645aa5180/)
-   GitHub : [joachimdplt](https://github.com/joachimdplt)
