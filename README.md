# K.Yang Engineering Website

Professional fire safety and engineering solutions website built with React and designed for Flask backend integration.

## Project Structure

```
kyang-engineering-app/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Header.jsx       # Navigation header with dropdown
│   │   ├── Footer.jsx       # Site footer
│   │   └── ServiceCard.jsx  # Service display card
│   ├── pages/               # Page components
│   │   ├── HomePage.jsx     # Landing page
│   │   ├── ServiceDetailPage.jsx  # Individual service pages
│   │   ├── WorkPage.jsx     # Portfolio page
│   │   └── ContactPage.jsx  # Contact form page
│   ├── data/                # Data and configuration
│   │   ├── translations.js  # English/Chinese translations
│   │   └── serviceData.js   # Service details and process steps
│   ├── utils/               # Utility functions (for future use)
│   ├── assets/              # Images, fonts, etc.
│   ├── App.jsx              # Main app component with routing
│   ├── App.css              # Global styles
│   └── main.jsx             # React entry point
├── public/                  # Static assets
│   └── logo.png             # Place your company logo here
├── index.html               # HTML entry point
├── package.json             # Dependencies
├── vite.config.js           # Vite configuration with Flask proxy
└── README.md                # This file
```

## Features

- ✅ **Modular Architecture**: Clean separation of concerns with reusable components
- ✅ **Easy to Extend**: Add new services by editing `serviceData.js`
- ✅ **Bilingual Support**: Full English/Chinese translations
- ✅ **Flask Ready**: Configured proxy for Flask backend API calls
- ✅ **Responsive Design**: Works on mobile, tablet, and desktop
- ✅ **Professional UI**: Corporate design focused on readability

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Add Your Logo

Place your company logo at `/public/logo.png` (or any image format)

Then update the logo in `src/components/Header.jsx` and `src/components/Footer.jsx`:

```jsx
// Replace this:
<div className="logo-image">
  <span className="logo-placeholder">LOGO</span>
</div>

// With this:
<img src="/logo.png" alt="K.Yang Engineering" className="logo-image" />
```

### 3. Run Development Server

```bash
npm run dev
```

The app will be available at `http://localhost:3000`

### 4. Build for Production

```bash
npm run build
```

The production files will be in the `dist/` folder.

## Flask Backend Integration

### Contact Form Example

The contact form in `src/pages/ContactPage.jsx` has a placeholder for Flask API integration:

```jsx
const handleSubmit = async (e) => {
  e.preventDefault();
  
  // Send to Flask backend
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
  });
  
  const data = await response.json();
  // Handle response...
};
```

### Flask Backend Example

Create a simple Flask backend:

```python
# app.py
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/api/contact', methods=['POST'])
def contact():
    data = request.json
    name = data.get('name')
    email = data.get('email')
    message = data.get('message')
    
    # Process the contact form (send email, save to database, etc.)
    # ...
    
    return jsonify({'success': True, 'message': 'Thank you for contacting us!'})

if __name__ == '__main__':
    app.run(port=5000, debug=True)
```

The Vite proxy (configured in `vite.config.js`) automatically forwards `/api/*` requests to `http://localhost:5000`.

## Adding New Services

To add a new service:

1. **Add translation** in `src/data/translations.js`:
```js
services: {
  // ... existing services
  newService: 'New Service Name'
}
```

2. **Add service data** in `src/data/serviceData.js`:
```js
export const serviceData = {
  // ... existing services
  newService: {
    en: {
      title: 'New Service',
      subtitle: 'Service description',
      // ... process steps, services included, etc.
    },
    zh: {
      // Chinese translation
    }
  }
};

// Add to serviceKeys array
export const serviceKeys = ['scdf', 'fireRenewal', 'dieselTank', 'acDucting', 'heatLoad', 'newService'];
```

That's it! The new service will automatically appear in the navigation dropdown and homepage.

## Customization

### Colors

Edit colors in `src/App.css`. Main color scheme uses:
- Primary: `#111827` (dark gray/black)
- Secondary: `#6b7280` (medium gray)
- Background: `#f9fafb` (light gray)
- Borders: `#e5e7eb`

### Fonts

Current font: Inter. To change, update the Google Fonts import in `src/App.css`:

```css
@import url('https://fonts.googleapis.com/css2?family=YourFont:wght@300;400;600;700&display=swap');

body {
  font-family: 'YourFont', sans-serif;
}
```

## File Size & Performance

- Main bundle: ~150KB (gzipped)
- Components: Lazy-loadable (add React.lazy() for code splitting if needed)
- Images: Optimize all images before adding to `/public/`

## Future Enhancements

- Add React Router for URL-based routing (currently using state-based routing)
- Add loading states and error boundaries
- Implement image gallery for portfolio/work page
- Add testimonials section
- Add blog/news section
- Integrate CMS (Strapi, Contentful, etc.) for non-technical content updates

## Support

For questions or issues, contact the development team.
