Movie Searching App

The Movie Searching App is a web application that allows users to search for movies, view details, and manage a personal watchlist. The app integrates with the OMDB API to fetch movie data and provides an intuitive user interface.

Features

1. Search Movies

Users can enter a search term in the input box to look for movies.

Results are displayed in a responsive card layout.

Each card displays:

Movie Title

Release Year

Movie Poster

Type (e.g., Movie, Series, Episode)

2. Add to Watchlist

Users can bookmark movies by clicking the Add to Watchlist button on a movie card.

Duplicates are prevented by checking if the movie is already in the watchlist.

3. Watchlist Management

The watchlist dynamically displays all added movies.

Movies are persisted during the session.

4. Responsive Design

Fully responsive layout with dynamic resizing for mobile, tablet, and desktop.

Cards adapt their dimensions based on screen size.

5. Pagination

Implements pagination to navigate through multiple pages of search results.

Users can move between pages using "Next" and "Previous" buttons.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
