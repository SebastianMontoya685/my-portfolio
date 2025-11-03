#!/bin/bash

# Test script for contact form endpoint
# Usage: ./test-contact.sh

BACKEND_URL="${BACKEND_URL:-http://localhost:8080}"
ENDPOINT="${BACKEND_URL}/api/contact"

echo "Testing contact form endpoint: ${ENDPOINT}"
echo "=========================================="
echo ""

# Test 1: Basic contact request
echo "Test 1: Sending basic contact request..."
curl -X POST "${ENDPOINT}" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "phone": "123-456-7890",
    "service": "Web Development",
    "message": "This is a test message from the terminal."
}' \
  -w "\nHTTP Status: %{http_code}\n" \
  -s

echo ""
echo "=========================================="
echo ""

# Test 2: Minimal contact request (only required fields)
echo "Test 2: Sending minimal contact request..."
curl -X POST "${ENDPOINT}" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "john.doe@example.com",
    "message": "Quick test message"
}' \
  -w "\nHTTP Status: %{http_code}\n" \
  -s

echo ""
echo "=========================================="
echo ""

# Test 3: Check email configuration
echo "Test 3: Checking email configuration..."
curl -X GET "${BACKEND_URL}/api/contact/test" \
  -H "Content-Type: application/json" \
  -s | python3 -m json.tool 2>/dev/null || echo "Response received (install python3 to format JSON)"

echo ""
echo "=========================================="
echo ""
echo "Check your backend logs and email inbox!"
echo ""
echo "If emails aren't sending, check:"
echo "  1. Gmail credentials are set correctly (GMAIL_USERNAME, GMAIL_PASSWORD)"
echo "  2. Gmail app password is correct (not regular password)"
echo "  3. Backend logs show any error messages"
echo "  4. Run: export GMAIL_PASSWORD='your-app-password' before starting backend"

