curl https://api.permit.io/v2/facts/my_project/my_environment/users \
  --request POST \
  --header 'Authorization: Bearer YOUR_SECRET_TOKEN' \
  --header 'Content-Type: application/json' \
  --data '{
  "key": "user|892179821739812389327",
  "email": "jane@coolcompany.com",
  "first_name": "Jane",
  "last_name": "Doe",
  "attributes": {
    "department": "marketing",
    "age": 30,
    "subscription": {
      "tier": "pro",
      "expired": false
    }
  }
}