# Link Shortener Project

This is a simple link shortener project consisting of a Node.js server and a Next.js client application. The project is part of IDASO company's Technical Assignment.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Client Application](#client-application)
- [Planned Improvements](#planned-improvements)

## Getting Started

### Prerequisites

Before you begin, ensure you have the following dependencies installed:

- [Docker Desktop](https://www.docker.com/products/docker-desktop/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/ribeironicolas/idaso_challenge.git
   cd idaso_challenge
   ```

   or
   [Download the zip file](https://github.com/ribeironicolas/idaso_challenge/archive/refs/heads/main.zip)

2. Build and start the containers:
   ```bash
   docker-compose up --build
   ```
   The Docker Compose command will handle everything, including installing dependencies and starting the services.

## Usage

The server will run on port 4000, and the client will run on port 3000 by default. You can access the client application in your web browser at http://localhost:3000.

## API Endpoints

The server provides the following API endpoints:

1. **POST /url/shortId:** Shorten a long URL. Send a JSON object with the url property to create a short link.

2. **GET /:shortId:** Redirect to the original URL associated with the provided short code.

3. **GET /url/analytics/:shortId:** returns the total number of clicks on the URL and the visit history

You can test the API endpoints using tools like [Postman](https://www.postman.com/downloads/) or [curl](https://curl.se/download.html).

## Client Application

The client application allows users to interact with the link shortening service.

Application built with Next.js, Tailwind CSS, axios, and react-icons. Focused on only one page (index.tsx), if the 'shortId' state exists, the 'Copy' component will be rendered; otherwise, the 'Paste' component will be rendered.

## Planned Improvements

1. Authentication login system.

2. User-generated link history.

3. Implementation of advertisements for monetization

4. Selection of plans for users, in which they can receive a portion of the monetization based on the number of link clicks.

5. System to delete URLs that have not been accessed within a one-month period.
