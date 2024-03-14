# BrewMaster
App to illustrate how to make coffee in the different coffee makers (ratio of coffee and water, grinders and levels, roast suggestions, specialties with ingredients, equipment, instructions)

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Development Environment

### Docker Compose (Preferred)

Create the brew network :coffee:

```bash
docker network create brew-network
```

Build and Run:
This will run all the containers neccessary to run the NextJS app among other containers needed for persistance.

```bash
docker-compose -f docker-compose.dev.yml build

docker-compose -f docker-compose.dev.yml up
```

### Locally
Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

### Connect to the Database Locally

To connect is recommended to use `psql` within the container. The command to connect should look like the folowing:

```bash
docker exec -it brew-postgres psql -U postgres -d brew-db
```

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# How to Test

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
