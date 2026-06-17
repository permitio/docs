curl http://localhost:7766/authorized_users \
  --request POST \
  --header "Authorization: Bearer YOUR_SECRET_TOKEN" \
  --header "Content-Type: application/json" \
  --data '{
    "action": "read",
    "resource": {
      "type": "blog_post",
      "id": "blog_post:3"
    },
    "context": {},
    "sdk": "curl"
  }'