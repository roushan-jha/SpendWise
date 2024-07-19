# SpendWise

An Expense Tracker application.

# Demo
#### [Click here to preview...](https://spend-wise-expensetracker.vercel.app/)

![Screenshot 2024-07-19 235301](https://github.com/user-attachments/assets/8602f5ad-d37a-4d2d-a3d1-cc1be7f54cb7)

## Features
### 1) Input for Income/Expense:

- Users can input their income and expenses through an intuitive interface.
- Categories for income and expenses are available for better organization.
### 2) Visual Representation through Pie Chart:

- Utilizes React-ApexCharts to display income and expense data visually.
- Pie charts provide a clear and interactive visual representation of income vs. expenses and different expense categories.
### 3) Expense History Management:

- Maintains a history of all income and expense entries.
- Uses localStorage to persist data across sessions, ensuring users don't lose their data even after refreshing the page.
### 4) Balance Calculation:

- Displays the current balance calculated as the difference between total income and total expenses.
- Real-time updates to the balance as new entries are added.
### 5) User-Friendly Interface:

- A clean and straightforward UI with distinct sections for income, expenses, and overall financial summary.
- Easy navigation and interaction for adding new transactions and viewing the financial summary.

## Learnings

### 1) React Hooks:

- Utilized useState for managing the state of income, expenses, and balance.
- Implemented useEffect for handling side effects, such as updating the balance whenever income or expenses change.
### 2) Context API:

- Leveraged Context API for global state management, providing a seamless way to share state across components without prop drilling.
- Created and managed context for income, expenses, and historical data.
### 3) Data Visualization with React-ApexCharts:

- Integrated React-ApexCharts to dynamically generate pie charts based on the input data.
- Gained insights into manipulating chart data and updating charts in real-time.
### 4) Local Storage:

- Implemented localStorage for persistent storage of income and expense data.
- Ensured data is saved and retrieved correctly, providing a consistent user experience across sessions.