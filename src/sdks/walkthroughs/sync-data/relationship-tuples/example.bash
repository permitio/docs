curl https://api.permit.io/v2/facts/my_project/my_environment/relationship_tuples \
  --request POST \
  --header 'Authorization: Bearer YOUR_SECRET_TOKEN' \
  --header 'Content-Type: application/json' \
  --data '{
  "subject": "organization:permitio",
  "relation": "owner",
  "object": "repo:test",
  "tenant": "public"
}`