curl -X PATCH 'https://api.permit.io/v2/projects/{proj_id}/envs/{env_id}' \
  -H 'Content-Type: application/json' -H 'Accept: application/json' \
  -H 'Authorization : Bearer {api_key}' \
  --data-raw '{
      "settings": {
            "factdb_enabled":true,
            "allow_legacy_data_store":true
      }
    }'