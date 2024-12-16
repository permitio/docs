curl -X POST "https://api.permit.io/v2/facts/your_project_id/your_env_id/users" \
-H "Authorization: Bearer your_bearer_token" \
-H "Content-Type: application/json" \
-d '{
  "key": "user|123456789",
  "email": "john@smith.com",
  "first_name": "John",
  "last_name": "Smith"
}'
