curl https://api.permit.io/v2/facts/tenants//users \
  --request POST \
  --header 'Authorization: Bearer YOUR_SECRET_TOKEN' \
  --header 'Content-Type: application/json' \
  --data '{
  "key": "user|123456789",
  "email": "john@smith.com",
  "first_name": "John",
  "last_name": "Smith",
  "role_assignments": [
    {
      "role": "Manager",
      "tenant": "Marketing"
    }
  ]
}'