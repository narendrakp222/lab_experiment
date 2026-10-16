# Experiment 4 — Git and GitHub
Run these commands in a **new practice folder**, not in the existing lab folders. Replace example names, email and URLs with your own. Do not commit a personal access token.

## 4(a) Setup
1. Install Git from https://git-scm.com/download/win if `git --version` is unavailable.
2. Run `git --version`, `git config --global user.name "Your Name"`, `git config --global user.email "you@example.com"`, and `git config --global --list`.
3. Create your own account at https://github.com/signup and verify your email. For HTTPS authentication, create a fine-grained token under GitHub Settings → Developer settings → Personal access tokens with access only to the needed repository. Save it in a password manager; never put it in source files. You must perform account and token steps yourself.

## 4(b) Basic workflow (PowerShell)

```powershell
New-Item -ItemType Directory git-practice
Set-Location git-practice
git init -b main
Set-Content index.html '<!DOCTYPE html><html><body><h1>Welcome to GitHub</h1></body></html>'
git add index.html
git status
git commit -m "Initial commit"
git log --oneline
```

Create an empty repository on GitHub before using your own real URL below:

```powershell
git remote add origin https://github.com/YOUR-USERNAME/git-practice.git
git remote -v
git push -u origin main
```

## 4(c) Branch and merge
```powershell
git checkout -b feature1
Set-Content index.html '<!DOCTYPE html><html><body><h1>Welcome to Git and GitHub</h1></body></html>'
git add index.html
git commit -m "Updated feature1"
git checkout main
git merge feature1
git push origin main
```

A conflict occurs only when **both branches change the same lines** before merging. To practice one, create another branch from `main`, edit and commit `index.html` there, return to `main`, edit and commit the same line differently, then `git merge BRANCH_NAME`. Open the file, choose the intended text, remove `<<<<<<<`, `=======`, and `>>>>>>>` markers, then run `git add index.html` and `git commit -m "Resolved merge conflict"`. No conflict is expected in the ordinary example above.
