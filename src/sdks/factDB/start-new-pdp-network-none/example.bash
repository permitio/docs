docker run -it -p 7766:7000 \
  --name pdp-offline \
  --network none \
  --env PDP_API_KEY=<YOUR_API_KEY> \
  --env PDP_FACTDB_ENABLED=true \
  --env PDP_ENABLE_OFFLINE_MODE=true \
  -v pdp-offline-backup:/app/backup:rw \
  permitio/pdp-v2:latest