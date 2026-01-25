curl https://api.permit.io/v2/facts/my_project/my_environment/resource_instances \
  --request POST \
  --header 'Authorization: Bearer YOUR_SECRET_TOKEN' \
  --header 'Content-Type: application/json' \
  --data '{
  "key": "react",
  "resource": "repository",
  "tenant": "default",
  "attributes": {
    "private": "false",
    "owner": "Company C"
  }
}'