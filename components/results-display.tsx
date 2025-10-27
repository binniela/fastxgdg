"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle2, XCircle } from "lucide-react"

interface ResultsDisplayProps {
  sqlQuery: string
  results: any[]
  originalQuery: string
  injectionAttempt: string
}

export function ResultsDisplay({ sqlQuery, results, originalQuery, injectionAttempt }: ResultsDisplayProps) {
  const isInjection =
    originalQuery.includes("'") &&
    (originalQuery.toLowerCase().includes("or") ||
      originalQuery.includes("--") ||
      originalQuery.toLowerCase().includes("union"))

  return (
    <div className="mb-6 space-y-4">
      {/* Injection Attempt Detection */}
      {injectionAttempt && (
        <Card className="bg-red-50 border-red-200 shadow-lg">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg text-red-800">🚨 SQL Injection Detected!</CardTitle>
              <Badge variant="destructive" className="gap-1">
                <XCircle className="h-3 w-3" />
                VULNERABLE
              </Badge>
            </div>
            <CardDescription className="text-red-700">
              The system detected a potential SQL injection attempt
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="rounded-lg bg-red-100 p-4 border border-red-300">
              <p className="text-sm font-medium text-red-800 mb-2">Injection Type:</p>
              <p className="text-sm text-red-700">{injectionAttempt}</p>
            </div>
            <div className="mt-4 rounded-lg bg-yellow-50 p-4 border border-yellow-300">
              <p className="text-sm font-medium text-yellow-800 mb-2">Educational Note:</p>
              <p className="text-sm text-yellow-700">
                This is a demonstration of SQL injection vulnerabilities. In a real application, 
                input should be sanitized and parameterized queries should be used.
              </p>
            </div>
          </CardContent>
        </Card>
      )}
      {/* SQL Query Display */}
      <Card className="bg-white shadow-lg">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg text-gray-900">Generated SQL Query</CardTitle>
            {isInjection ? (
              <Badge variant="destructive" className="gap-1">
                <XCircle className="h-3 w-3" />
                Vulnerable
              </Badge>
            ) : (
              <Badge className="gap-1 bg-[#1e5631] hover:bg-[#163f24]">
                <CheckCircle2 className="h-3 w-3" />
                Normal Query
              </Badge>
            )}
          </div>
          <CardDescription className="text-gray-600">
            This is the SQL query that would be executed on the database
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-lg bg-gray-100 p-4">
            <code className="font-mono text-sm text-gray-900">{sqlQuery}</code>
          </div>
          {isInjection && (
            <div className="mt-4 rounded-lg border border-red-300 bg-red-50 p-4">
              <p className="text-pretty text-sm font-medium text-red-800">
                ⚠️ SQL Injection Detected! The query has been manipulated to bypass authentication or retrieve
                unauthorized data.
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Results Display */}
      <Card className="bg-white shadow-lg">
        <CardHeader>
          <CardTitle className="text-lg text-gray-900">Query Results</CardTitle>
          <CardDescription className="text-gray-600">
            {results.length} user{results.length !== 1 ? "s" : ""} found
          </CardDescription>
        </CardHeader>
        <CardContent>
          {results.length === 0 ? (
            <p className="text-center text-gray-600">No users found</p>
          ) : (
            <div className="space-y-3">
              {results.map((user) => (
                <div
                  key={user.id}
                  className="flex items-center justify-between rounded-lg border border-gray-200 bg-white p-4"
                >
                  <div className="space-y-1">
                    <p className="font-mono font-semibold text-gray-900">{user.username}</p>
                    <p className="text-sm text-gray-600">{user.email}</p>
                  </div>
                  <Badge
                    variant={user.role === "COMPROMISED" || user.role === "SYSTEM_ERROR" ? "destructive" : "secondary"}
                    className={user.role === "COMPROMISED" || user.role === "SYSTEM_ERROR" ? "" : "bg-[#1e5631] text-white hover:bg-[#163f24]"}
                  >
                    {user.role}
                  </Badge>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
