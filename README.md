# Shopper challenge

## Context

A simple api integrated with Google Gemini to read data from images.

This is a service to read water or gas meter with gemini api help.

## Run with Docker

### Prerequisites

⚠️ Make sure you have [Docker](https://www.docker.com/get-started/) installed on your machine:

Also set up `GEMINI_API_KEY` on your env variables, this is needed to used google api. [Get tour key here](https://ai.google.dev/gemini-api/docs/api-key).

### Steps:

1. Clone repository:

```BASH
git clone git@github.com:mairess/shopper-challenge.git

cd shopper-challenge
```

2. Run application:

```BASH
docker compose up -d --build 
```

## Run locally

To run this project locally, follow these steps:

### Prerequisites

Make sure you have the following installed on your machine:

⚠️ [Node](https://nodejs.org/en)

⚠️ [Docker](https://www.docker.com/get-started/)

Don't forget to set `GEMINI_API_KEY` on your env variables, this is needed to used google api. [Get tour key here](https://ai.google.dev/gemini-api/docs/api-key).

### Steps:

1. Clone repository:

```BASH
git clone git@github.com:mairess/shopper-challenge.git

cd shopper-challenge
```

2. Start database:

```BASH
docker compose up -d database
```

3. Install dependencies:

```BASH
npm install
```

4. Start backend:

```BASH
npm run dev
```
