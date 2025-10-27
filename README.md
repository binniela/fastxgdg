# FastXGDG - SQL Injection Demonstration

This is an educational web application built with Next.js that demonstrates SQL injection vulnerabilities in a controlled environment. It simulates a Cal Poly Pomona login system that is intentionally vulnerable to various SQL injection attacks.

## ⚠️ Educational Purpose Only

**This application is designed for educational purposes to teach about SQL injection vulnerabilities. Never use these techniques on systems you don't own or without explicit permission!**

## Features

- **Vulnerable Login Form**: Simulates a real login system with SQL injection vulnerabilities
- **Real-time SQL Query Display**: Shows how user input is directly inserted into SQL queries
- **Injection Detection**: Identifies and explains different types of SQL injection attempts
- **Educational Feedback**: Provides detailed explanations of each injection type
- **Multiple Attack Vectors**: Supports various SQL injection techniques

## Getting Started

1. Install dependencies:
```bash
npm install --legacy-peer-deps
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) with your browser

4. Try various SQL injection payloads in the BroncoName field (see `SQL_INJECTION_EXAMPLES.md`)

## Quick Test Examples

Try these in the BroncoName field:
- `' OR '1'='1` - Authentication bypass
- `admin'--` - Comment injection
- `' UNION SELECT 1,2,3--` - Union-based injection
- `'; DROP TABLE users;--` - Destructive command (shows error)

## Project Structure

- `/app` - Next.js app directory with main page and layout
- `/components` - React components including form and results display
- `/components/ui` - Reusable UI components (shadcn/ui)
- `/lib` - Utility functions
- `/public` - Static assets including Cal Poly Pomona logo
- `SQL_INJECTION_EXAMPLES.md` - Comprehensive list of injection payloads to test

## Technologies Used

- **Next.js 16** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **shadcn/ui** - UI components
- **Lucide React** - Icons

## Learning Objectives

After using this application, you should understand:
- How SQL injection vulnerabilities occur
- Different types of SQL injection attacks
- Why input validation and parameterized queries are essential
- How to identify potential injection attempts
- The importance of secure coding practices

## Security Best Practices (What NOT to do)

This application demonstrates several security anti-patterns:
- ❌ Direct string concatenation in SQL queries
- ❌ No input validation or sanitization
- ❌ No parameterized queries
- ❌ No proper error handling

## Proper Security Implementation

In a real application, you should:
- ✅ Use parameterized queries/prepared statements
- ✅ Validate and sanitize all user input
- ✅ Implement proper error handling
- ✅ Use least privilege database access
- ✅ Implement proper authentication and authorization

## Contributing

This is an educational project. Feel free to submit issues or pull requests to improve the learning experience.

## License

This project is for educational purposes only.
