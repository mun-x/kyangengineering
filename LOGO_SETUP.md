# Logo Setup Instructions

## Quick Start

Your logo integration is already coded! Just follow these 2 steps:

### Step 1: Add Your Logo File

Place your company logo file in the `public/` folder and name it `logo.png`:

```
kyang-engineering-app/
├── public/
│   └── logo.png          ← Put your logo HERE
├── src/
└── ...
```

**Logo Requirements:**
- **Filename**: Must be named `logo.png` (or update the code if using different name)
- **Format**: PNG, JPG, or SVG (PNG with transparent background recommended)
- **Size**: Recommended 200x200px minimum (will be automatically scaled)
- **Aspect Ratio**: Square or close to square works best

### Step 2: Run the Development Server

```bash
npm install    # First time only
npm run dev    # Start development server
```

Open `http://localhost:3000` and your logo will appear!

---

## Using a Different Filename

If your logo is named differently (e.g., `company-logo.svg`), update these files:

**In `src/components/Header.jsx` (line ~51):**
```jsx
<img 
  src="/company-logo.svg"    // ← Change filename here
  alt="K.Yang Engineering" 
  className="logo-image"
/>
```

**In `src/components/Footer.jsx` (line ~18):**
```jsx
<img 
  src="/company-logo.svg"    // ← Change filename here
  alt="K.Yang Engineering" 
  className="footer-logo-image"
/>
```

---

## Logo Styling (Optional)

If you need to adjust logo size or styling, edit `src/App.css`:

**Header logo (currently 48px x 48px):**
```css
.logo-image {
  width: 3rem;      /* Change to adjust size */
  height: 3rem;     /* Change to adjust size */
  border-radius: 0.25rem;
  object-fit: contain;
}
```

**Footer logo (currently 40px x 40px):**
```css
.footer-logo-image {
  width: 2.5rem;    /* Change to adjust size */
  height: 2.5rem;   /* Change to adjust size */
  border-radius: 0.25rem;
  object-fit: contain;
}
```

---

## What's Been Changed

The following files have been updated to use your logo:

✅ `src/components/Header.jsx` - Logo in navigation bar
✅ `src/components/Footer.jsx` - Logo in footer
✅ `src/App.css` - Styling updated for logo display

All placeholders have been removed. Just add your `logo.png` file and you're done!

---

## Troubleshooting

**Logo doesn't appear?**
- Check the filename is exactly `logo.png` in the `public/` folder
- Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
- Check browser console for errors (F12)

**Logo looks stretched?**
- Use `object-fit: contain` (already set) to maintain aspect ratio
- Consider using a square logo or adjust CSS as shown above

**Logo too big/small?**
- Adjust the `width` and `height` values in the CSS as shown above
