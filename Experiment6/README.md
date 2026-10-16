# Experiment 6 — Express.js
From PowerShell, run `Set-Location Experiment6`, then `npm install`. Start **one server at a time**, because each example uses port 3000. Press Ctrl+C before changing examples.

| Exercise | Command | Request | Expected result |
| --- | --- | --- | --- |
| 6(a) Hello World | `npm run 6a` or `npm start` | `http://localhost:3000/` | Hello World |
| 6(b) Routes | `npm run 6b` | `/`, `/about`, `/contact` | Welcome to Home Page, About Us Page, Contact Us Page |
| 6(c) Console | `npm run 6c` | `/` | Browser: Check Terminal for Output; **server terminal**: Hello World |
| 6(d) CRUD | `npm run 6d` | `/students` | Initial Ganesh and Arun records |
| 6(e) MySQL | `npm run 6e` | `/students` | Ganesh, Priya and Arun records from MySQL |

### 6(d) Try CRUD (PowerShell)
With the server running in another terminal:

```powershell
Invoke-RestMethod http://localhost:3000/students
Invoke-RestMethod http://localhost:3000/students -Method Post -ContentType 'application/json' -Body '{"id":3,"name":"Priya"}'
Invoke-RestMethod http://localhost:3000/students/3 -Method Put -ContentType 'application/json' -Body '{"name":"Divya"}'
Invoke-RestMethod http://localhost:3000/students/3 -Method Delete
Invoke-RestMethod http://localhost:3000/students
```

GET and POST match the sample outputs. PUT edits the matching student, DELETE removes it; missing IDs return 404. Data is in memory and resets when you restart the server. A browser address bar sends only GET; use PowerShell or an API client for other methods.

### 6(e) MySQL prerequisite
Install and start a MySQL server separately. From `Experiment6`, import the schema with `mysql -u root -p < database/init.sql` in **Command Prompt/Git Bash** (or open `database/init.sql` in MySQL Workbench and execute it). PowerShell users can use `Get-Content database/init.sql -Raw | mysql -u root -p` if their mysql client accepts piped input; Workbench is simpler. Set `DB_HOST`, `DB_USER`, `DB_PASSWORD`, `DB_NAME` environment variables if the defaults (`localhost`, `root`, empty password, `college`) differ. For example, `$env:DB_PASSWORD = 'your-password'` before `npm run 6e`. Never commit real credentials. The API starts only after a successful database connection; MySQL setup cannot be verified without your running server.
