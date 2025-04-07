# funinthesun - Portfolio Website

A modern portfolio website built with Next.js showcasing skills, experience, and services.

## Features

- Responsive design with Tailwind CSS
- Interactive language skill slider
- Contact form with email validation
- Professional sections for:
  - Hero/introduction
  - Services offered
  - Experience details
  - Technology stack visualization

## Technologies Used

- Next.js 13+ (App Router)
- React
- TypeScript
- Tailwind CSS
- EmailJS (for contact form)
- Various SVG icons and images

## Project Structure

```
funinthesun/
├── public/                 # Static assets
│   ├── LanguageSlider/     # Technology icons
│   └── various SVGs and images
├── src/
│   ├── app/                # Next.js app router files
│   │   ├── layout.tsx      # Root layout
│   │   ├── page.jsx        # Main page
│   │   └── globals.css     # Global styles
│   ├── pages/              # Page components
│   │   ├── Hero.jsx        # Introduction section
│   │   ├── Services.jsx    # Services section
│   │   ├── ExperienceText.jsx # Experience section
│   │   ├── LanguageSlider.jsx # Interactive tech stack
│   │   ├── Contact.jsx     # Contact form
│   │   └── Navbar.jsx      # Navigation component
│   ├── middleware/         # Middleware
│   │   └── emailValidation.js # Email validation
│   └── pages/api/          # API routes
│       └── validateEmail.js # Email validation endpoint
```

## Getting Started

1. Clone the repository
2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Create a `.env` file based on `emailJS.env` for EmailJS configuration

4. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Environment Variables

The following environment variables are required (see `emailJS.env`):
- `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
- `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
- `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`

## Deployment

This project is configured for easy deployment on Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fyour-username%2Ffuninthesun)

## Customization

To customize the content:
- Update `Hero.jsx` for your introduction
- Modify `Services.jsx` for your services
- Edit `ExperienceText.jsx` for your experience
- Add/remove icons in `public/LanguageSlider/` for tech stack

## License

[MIT](https://choosealicense.com/licenses/mit/)
