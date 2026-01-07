# Church Website Example

A responsive church website built with Bootstrap 5, featuring multiple pages accessible through tab navigation on desktop and a hamburger menu on mobile devices.

## Features

- **Responsive Navigation**: Tab-based navigation on desktop (PC) that transforms into a hamburger menu on mobile devices
- **Home Page**: Welcome section with mission statement, community information, and service times
- **Events Page**: Displays upcoming church events including worship services, Bible study, youth group, and community outreach
- **Facebook Page**: Embedded Facebook page plugin to stay connected with the church community
- **Admin Dashboard**: Secure login area with admin panel showing statistics and quick action buttons

## Pages

1. **Home** - Welcome message, church mission, community information, and about us section
2. **Events** - Upcoming events with dates, times, and locations
3. **Facebook** - Embedded Facebook page feed (requires actual Facebook page URL to be configured)
4. **Admin** - Administrative dashboard with login (demo credentials: username: `admin`, password: `password`)

## Technologies Used

- **Bootstrap 5.3.0** - Responsive framework
- **Bootstrap Icons 1.10.0** - Icon library
- **HTML5** - Markup
- **CSS3** - Custom styling
- **JavaScript** - Interactive functionality
- **Facebook SDK** - For Facebook page embedding

## Getting Started

### Viewing the Website

Simply open `index.html` in a web browser, or use a local web server:

```bash
# Using Python 3
python3 -m http.server 8080

# Using Node.js (with http-server)
npx http-server -p 8080

# Then navigate to http://localhost:8080
```

### Customization

1. **Facebook Page**: Replace the Facebook page URL in `index.html` (line with `data-href="https://www.facebook.com/facebook"`) with your church's actual Facebook page URL.

2. **Church Information**: Update contact details, service times, and church name in the footer and header sections.

3. **Events**: Modify the events section with your actual church events.

4. **Colors**: Customize the color scheme by modifying the Bootstrap theme variables or the custom CSS in `styles.css`.

5. **Admin Authentication**: For production use, implement proper backend authentication instead of the client-side demo login.

## File Structure

```
church-website-example/
├── index.html          # Main HTML file with all pages
├── styles.css          # Custom CSS styling
├── script.js           # JavaScript for interactivity
└── README.md          # This file
```

## Browser Compatibility

The website is compatible with all modern browsers including:
- Chrome
- Firefox
- Safari
- Edge
- Opera

## Responsive Design

- **Desktop (≥992px)**: Navigation displayed as horizontal tabs
- **Mobile (<992px)**: Navigation displayed as hamburger menu
- Content adapts to screen size using Bootstrap's responsive grid system

## Admin Panel

The admin panel includes:
- Login form with demo credentials
- Dashboard with statistics (Members, Events, Messages, Posts)
- Quick action buttons for common administrative tasks

**Demo Login Credentials:**
- Username: `admin`
- Password: `password`

## License

This is an example project for demonstration purposes.

## Notes

- External resources (Bootstrap, Bootstrap Icons) are loaded from CDN
- Facebook page embedding requires proper configuration with your church's Facebook page
- The admin authentication is for demonstration only and should be replaced with secure backend authentication for production use