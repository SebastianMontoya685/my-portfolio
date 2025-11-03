#!/bin/bash

echo "=== Email Verification Script ==="
echo ""

# Wait a moment for backend to be ready
sleep 2

echo "1. Testing configuration endpoint..."
CONFIG=$(curl -s http://localhost:8080/api/contact/test 2>/dev/null)

if echo "$CONFIG" | grep -q "passwordSet"; then
    echo "   ✓ New code is running!"
    echo ""
    echo "$CONFIG" | python3 -m json.tool 2>/dev/null || echo "$CONFIG"
    echo ""
    
    PASSWORD_SET=$(echo "$CONFIG" | grep -o '"passwordSet":[^,]*' | cut -d: -f2 | tr -d ' ')
    if [ "$PASSWORD_SET" = "true" ]; then
        echo "   ✓ Password is configured!"
    else
        echo "   ✗ Password is NOT set - check GMAIL_PASSWORD environment variable"
    fi
else
    echo "   ⚠ Backend is still running old code or not responding"
    echo "   Please restart your backend and try again"
    exit 1
fi

echo ""
echo "2. Sending test email..."
RESPONSE=$(curl -s -X POST "http://localhost:8080/api/contact" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "message": "This is a test email from the verification script."
}')

if [ "$RESPONSE" = "Received" ]; then
    echo "   ✓ Request accepted"
    echo ""
    echo "   ⚠ IMPORTANT: Check your backend terminal output for:"
    echo "      - '=== Starting email send process ===' (should see this)"
    echo "      - '✓ Email sent successfully' (success)"
    echo "      - '✗ FAILED to send email!' (error - check the details)"
    echo ""
    echo "   Also check your email inbox: juanmontoyas2003@gmail.com"
else
    echo "   ✗ Request failed: $RESPONSE"
fi

