curl https://api.permit.io/v2/schema/demo_project/demo_env/users/bob@example.com/user-permissions \
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