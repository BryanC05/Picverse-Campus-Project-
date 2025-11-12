# Picverse

**Creativity Thrives, Artists Connect**

Picverse is a dynamic web platform dedicated to digital artists and art enthusiasts. It provides a seamless and accessible space to share, explore, and grow within a vibrant community. The platform is designed to showcase creativity, foster collaboration, and empower artists.

## Key Features

  * **Homepage:** A welcoming landing page featuring a main slideshow of artworks, a secondary slideshow of famous art, and a list of currently trending tags.
  * **Art Gallery:** A filterable gallery where users can browse art by popular categories, including "Persona," "Building," and "Food".
  * **Artwork Viewer:** A modal popup that displays detailed information about an artwork, including its title, artist, full description, and like count.
  * **Community Hub:** A central page to foster community interaction, featuring:
      * Active Forum Discussions
      * A Recent Activity feed (new forums, follows, comments, uploads)
      * A grid of Active Users with their taglines
  * **Art Submission Form:** A comprehensive form for artists to submit their work. The form includes fields for email, title, description, and tags.
  * **AI Art Declaration:** A key feature of the submission process is a mandatory selection where artists must declare if their work is AI-generated or human-made.
  * **Client-Side Validation:** The submission form features robust, real-time validation for all fields, including email format, character counts (20-500 for description), tag limits (max 5), and file validation (type and size).
  * **Responsive Design:** The website is fully responsive, with a mobile-friendly navigation menu and layouts that adapt to various screen sizes.

## Tech Stack

  * **Frontend:** HTML5, CSS3, and vanilla JavaScript (ES6+)
  * **Styling:** Modern CSS, including Flexbox, Grid, custom properties, and media queries, is used for layout and responsiveness.
  * **Client-Side Logic:** All interactivity is powered by vanilla JavaScript. This includes:
      * Mobile menu and profile dropdowns
      * Homepage slideshows
      * Dynamic gallery population and modal interactions
      * Complex form validation for the submission page
  * **Fonts:** The project uses several custom fonts:
      * **P5Hatty** (Persona5MenuFontPrototype)
      * **earwig** (earwig factory rg)
      * **Cats Show**
      * **Heavy Heap** (hot-wheels-font)

## Getting Started

No build step or server is required to run this project. All functionality is client-side.

1.  Clone or download this repository.
2.  Open any of the `.html` files (e.g., `HomePage.html`) directly in your web browser.

## File Structure

```
/
├── HomePage.html           # Main landing page
├── AboutUs.html            # Project vision and mission
├── CommunityPage.html      # Forums and user activity
├── GalleryPage.html        # Browsable artwork gallery
├── SubmissionPage.html     # Art upload form
├── styles.css              # All project styles
├── script.js               # All project JavaScript logic
│
├── assets/                 # Images, logos, and icons
│   ├── logo.png
│   ├── persona1.jpg
│   ├── food1.jpg
│   ├── building1.jpg
│   ├── followicon.png
│   └── ...
│
└── fonts/                  # Font files and licenses
    ├── p5hatty.woff2
    ├── earwig factory rg.woff
    ├── Cats Show.otf
    ├── hot-wheels-font.zip/
    └── ...
```

## Asset & Font Licenses

This project utilizes several fonts with specific licensing terms:

  * **Persona 5 Menu Font (p5hatty):** Free for personal use. A commercial license must be purchased from the author, ActionFonts.com.
  * **Heavy Heap (hot-wheels-font):** This is a freeware font by Ray Larabie. It is free for both personal and commercial use, though donations or product samples are appreciated for commercial projects.
  * **Cats Show:** Copyright (c) 2025 by Khurasan & Jalembe. All rights reserved.
  * **Earwig Factory:** (c) 1998-2012 Typodermic Fonts Inc. Use is subject to the attached license agreement.
