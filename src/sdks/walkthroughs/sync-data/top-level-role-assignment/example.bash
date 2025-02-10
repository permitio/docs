curl 'https://api.permit.io/v2/facts/{proj_id}/{env_id}/role_assignments' \
  --request POST \
  --data '{
  "user": "jane@coolcompany.com",
  "role": "admin",
  "tenant": "stripe-inc"
}'