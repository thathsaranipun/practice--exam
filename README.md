# EXAM PROJECT

---

## Project Structure

### 1. WebApplication1 (Backend)

### 2. Frontend or performance-appraisal-system folder (Frontend)

### 3. Database Screenshots

### 4. Database Dump

The **database dump** file contains a backup of the `master` database, which includes all the data and schema needed to recreate the database in a new environment.

#### To Restore:
1. Use MSSQL Management Studio or equivalent to restore the database from the `.bak` file.
2. Verify that all tables and stored procedures are restored correctly.

---

## Installation

### Backend
1. Clone the repository.
2. Open **WebApplication1** in Visual Studio.
3. Restore the NuGet packages:
   - Right-click the solution > **Restore NuGet Packages**.
4. Set up the database:
   - Restore the `master` database from the **Database Dump** or configure your connection string to point to an existing MSSQL database.
5. Run the application:
   - Press **F5** or **Ctrl + F5** to start the backend API.

### Frontend
1. Clone the repository (if not already done).
2. Navigate to the `performance-appraisal-system` directory.
3. Install dependencies:
   ```bash
   npm install
