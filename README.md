# EXAM PROJECT

---

## Project Structure

### 1. WebApplication1 (Backend)

This folder contains the backend code for the system, including API routes, data models, and business logic. The backend is built using ASP.NET Core and connects to a Microsoft SQL Server (MSSQL) database.

#### Key Components:
- **Models**: Includes the core data models such as `Employee` and `Target`.
- **Controllers**: Contains API endpoints for managing targets, employee data, and reporting.
- **Database Connection**: Uses MSSQL with a database name `master` for storing all data related to performance appraisals.

### 2. Frontend or performance-appraisal-system folder (Frontend)

The frontend folder contains the user interface for managing performance appraisals. Built with modern web technologies (e.g., React, Angular, or Vue.js), this section provides forms, reports, and other views for interacting with the backend.

#### Key Components:
- **Pages**: Various pages for target management, reporting, and user interactions.
- **Components**: Reusable UI components (e.g., target cards, employee info).
- **Services**: Handles API requests to the backend.

### 3. Database Screenshots

This folder contains screenshots that provide a clear view of the database structure. They include tables, relationships, and other vital database elements that show how the data is organized.

#### Key Screenshots:
- **Tables**: `Employee`, `Target`, etc.
- **Relationships**: Foreign keys, one-to-many or many-to-many relationships.
- **Schema**: A visual representation of the database schema.

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
