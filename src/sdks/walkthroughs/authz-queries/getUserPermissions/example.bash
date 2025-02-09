curl https://pdp-api.permit.io/user-permissions \
  --request POST \
  --header "Authorization: Bearer YOUR_SECRET_TOKEN" \
  --header "Content-Type: application/json" \
  --data '{
    "user": {
      "id": "bob@example.com"
    },
    "tenants": ["tenant_123"],
    "resources": ["blog_post:3"],
    "resource_types": ["blog_post"],
    "context": {}
  }'