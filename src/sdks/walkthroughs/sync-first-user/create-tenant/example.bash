curl https://api.permit.io/v2/facts/tenants \
  --request POST \
  --header 'Authorization: Bearer YOUR_SECRET_TOKEN' \
  --header 'Content-Type: application/json' \
  --data '{
  "key": "marketing",
  "name": "Marketing",
}'