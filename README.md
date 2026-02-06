# 50 UI Features Demo

A comprehensive web application demonstrating 50 different UI features and interactions.

## Features Implemented

### Navigation & Layout
1. ✅ Collapsible sidebar with toggle button
2. ✅ Active sidebar menu item highlighting
3. ✅ Expand and collapse submenu items
4. ✅ Toggle header visibility on button click
5. ✅ Sticky footer that appears on scroll

### Notifications & Overlays
6. ✅ Show and hide notification banner manually
7. ✅ Auto-hide notification after few seconds
8. ✅ Floating action button (FAB)
9. ✅ Show tooltip text on icon hover
10. ✅ Hide tooltip when mouse leaves

### Dropdowns & Menus
11. ✅ Dropdown menu with open/close logic
12. ✅ Close dropdown when clicking outside
13. ✅ Toggle dropdown arrow icon direction
14. ✅ Show different icons based on state
15. ✅ Disable background interaction when overlay is active

### Cards & Data Display
16. ✅ Display cards from array data
17. ✅ Highlight card on hover
18. ✅ Select a card on click
19. ✅ Unselect previously selected card
20. ✅ Show selected card details
21. ✅ Toggle between card view and list view
22. ✅ Display count of total cards
23. ✅ Filter cards using category buttons
24. ✅ Highlight active category button
25. ✅ Reset filters using reset button
26. ✅ Show "No results found" UI when list is empty
27. ✅ Display placeholder UI while loading data
28. ✅ Replace placeholder with content after delay

### Dynamic Lists
29. ✅ Add and remove items visually from UI
30. ✅ Animate item appearance and removal

### Forms & Inputs
31. ✅ Floating label input fields
32. ✅ Highlight input border on focus
33. ✅ Show helper text while typing
34. ✅ Show error message only after blur
35. ✅ Disable submit button until input is filled
36. ✅ Toggle password visibility icon
37. ✅ Display password strength text
38. ✅ Show success message after form submit
39. ✅ Auto-clear success message after delay
40. ✅ Disable form inputs after submission

### Tabs & Steps
41. ✅ Tab navigation UI
42. ✅ Highlight active tab with underline
43. ✅ Switch content when tab changes
44. ✅ Step indicator UI
45. ✅ Highlight completed steps

### Modals & Popups
46. ✅ Show confirmation popup before action
47. ✅ Close popup using cancel button
48. ✅ Show loading spinner during action
49. ✅ Replace spinner with success message
50. ✅ Reset UI to initial state

## How to Use

1. Open `index.html` in a web browser
2. Explore all the interactive features:
   - Click the hamburger menu to collapse/expand the sidebar
   - Click the eye icon to hide/show the header
   - Use the "Show Notification" button to display a notification
   - Click on cards to select them and view details
   - Toggle between card and list views
   - Filter cards by category
   - Fill out the form to see validation and floating labels
   - Click "Add Item" to add items to the dynamic list
   - Use the dropdown menu to select options
   - Click tabs to switch between content
   - Click "Show Confirmation" to see the popup
   - Click "Reset UI" to reset everything to initial state

## Technologies Used

- HTML5
- CSS3 (with animations and transitions)
- Vanilla JavaScript (ES6+)
- Font Awesome icons

## Browser Support

Works best in modern browsers (Chrome, Firefox, Safari, Edge).

## File Structure

```
.
├── index.html          # Main HTML structure
├── package.json        # NPM dependencies and scripts
├── vite.config.js      # Vite configuration
├── vercel.json         # Vercel deployment configuration
├── .gitignore         # Git ignore file
├── src/
│   ├── main.js        # JavaScript functionality (entry point)
│   └── style.css      # All CSS styles and animations
└── README.md          # This file
```

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

This will start the Vite dev server, typically at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

### Preview Production Build

```bash
npm run preview
```

## Deployment to Vercel

1. Push your code to GitHub
2. Import your repository in Vercel
3. Vercel will automatically detect Vite and configure the build settings
4. Your app will be deployed automatically!

The `vercel.json` file is already configured for optimal Vercel deployment.

## Notes

- All features are fully functional and interactive
- Animations and transitions are smooth
- The UI is responsive and works on different screen sizes
- All 50 features are implemented and working
