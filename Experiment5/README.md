# Experiment 5 — Upload a React project to GitHub
Use the existing React application in `Experiment2/React1` (Vite instead of the older Create React App). Its `.gitignore` already excludes `node_modules`. Alternatively run `npm create vite@latest myapp --template react` in a new folder and `npm install` there. The steps below assume you copied the project into a **separate folder** named `myapp`, excluding `node_modules` and `dist`, to avoid nesting a Git repository inside the lab workspace.

```powershell
Set-Location myapp
npm install
npm run dev
git init -b main
git status
git add .
git commit -m "Initial React project"
```

Create your own empty `myapp` repository on GitHub first; replace `YOUR-USERNAME` below. Authentication and creation of a GitHub account/token must be done by you.

```powershell
git remote add origin https://github.com/YOUR-USERNAME/myapp.git
git push -u origin main
git checkout -b feature/navbar
```

Edit the navigation in `src/Lab.jsx`, then:

```powershell
git add .
git commit -m "Added navigation bar"
git push -u origin feature/navbar
git checkout main
git checkout -b feature/form
```

Edit the form in `src/labExamples.jsx`, then:

```powershell
git add .
git commit -m "Added student form"
git push -u origin feature/form
```

For pull-request practice, open each branch on GitHub and use **Compare & pull request** to review and merge it into `main`; then run `git checkout main` and `git pull origin main`. **Alternatively**, to practice local merges rather than PRs, run:

```powershell
git checkout main
git merge feature/navbar
git merge feature/form
git push origin main
```

Do not merge the same branches both locally and through pull requests. Confirm `git status` is clean and `git ls-files node_modules` returns no files. These remote operations are instructions, not actions performed in your account.
