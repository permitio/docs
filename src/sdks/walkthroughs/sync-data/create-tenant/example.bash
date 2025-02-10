curl https://api.permit.io/v2/facts/my_project/my_environment/tenants \
  --request POST \
  --header 'Authorization: Bearer YOUR_SECRET_TOKEN' \
  --header 'Content-Type: application/json' \
  --data '{
  "key": "stripeinc",
  "name": "Stripe Inc",
  "attributes": {
    "allowed_locations": [
      "US",
      "CA"
    ]
  }
}'