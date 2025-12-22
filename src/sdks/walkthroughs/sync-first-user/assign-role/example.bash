curl -X POST "https://api.permit.io/v2/facts/your_project_id/your_env_id/users/your_user_id/roles" \
-H "Authorization: Bearer your_bearer_token" \
-H "Content-Type: application/json" \
-d '{
  "role": "admin",
  "tenant": "default"
}'
