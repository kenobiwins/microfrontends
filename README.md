## How to run (local with Docker Compose)

1. From repository root `microfrontends/` ensure both `main-app` and `support-app` have `package.json` scripts (`serve` runs `webpack serve`).
2. Build and run containers:

```bash
# from microfrontends/
docker compose up --build
```

3. Open your browser:
- Main app (host): `http://localhost:3000`
- Support app (remote dev server): `http://localhost:3001` (optional)

4. When you navigate in main app to `/support`, Module Federation will load `remoteEntry.js` from `http://localhost:3001/remoteEntry.js` and render the remote component.

5. To stop and remove containers:

```bash
docker compose down
```