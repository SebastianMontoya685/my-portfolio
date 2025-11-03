#!/bin/bash

echo "=== Email Configuration Diagnostic ==="
echo ""

# Check if backend is running
echo "1. Checking if backend is running..."
if curl -s http://localhost:8080/api/contact/test > /dev/null 2>&1; then
    echo "   ✓ Backend is running"
    
    echo ""
    echo "2. Checking email configuration..."
    CONFIG=$(curl -s http://localhost:8080/api/contact/test)
    
    if echo "$CONFIG" | grep -q "passwordSet"; then
        echo "$CONFIG" | python3 -m json.tool 2>/dev/null || echo "$CONFIG"
        
        PASSWORD_SET=$(echo "$CONFIG" | grep -o '"passwordSet":[^,]*' | cut -d: -f2)
        if [ "$PASSWORD_SET" = "false" ] || [ "$PASSWORD_SET" = " false" ]; then
            echo ""
            echo "   ✗ PROBLEM: Gmail password is NOT set!"
            echo "   Solution: Set GMAIL_PASSWORD environment variable:"
            echo "   export GMAIL_PASSWORD='your-gmail-app-password'"
            echo "   Then restart your backend."
        else
            echo ""
            echo "   ✓ Gmail password appears to be configured"
        fi
    else
        echo "   ⚠ Backend not running updated code (404 on /test endpoint)"
        echo "   You need to restart your backend with the new code"
    fi
else
    echo "   ✗ Backend is not running or not responding"
    echo "   Start it with: cd backend && mvn spring-boot:run"
fi

echo ""
echo "3. Testing email send (this will show errors in backend logs)..."
curl -X POST "http://localhost:8080/api/contact" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Email Test",
    "email": "test@example.com",
    "message": "Diagnostic test - check backend logs for email errors"
}' \
  -s > /dev/null

echo "   ✓ Request sent - check your backend terminal for:"
echo "     - '=== Starting email send process ===' (new code)"
echo "     - '✗ FAILED to send email!' (if there's an error)"
echo "     - OR 'Processing contact request for:' (old code - needs restart)"

echo ""
echo "=== Common Issues ==="
echo "1. Backend running old code: Restart backend to see new logging"
echo "2. Missing GMAIL_PASSWORD: Set environment variable and restart"
echo "3. Wrong password: Use Gmail App Password, not regular password"
echo "4. Gmail blocking: Check Gmail security settings"

