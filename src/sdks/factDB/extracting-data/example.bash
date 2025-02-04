docker run -it -p 7766:7000 \
  --env PDP_API_KEY=<YOUR_API_KEY> \
  --env PDP_FACTDB_ENABLED=true \
  --env PDP_ENABLE_OFFLINE_MODE=true \
  -v ./pdp-backup:/app/backup:rw \
  permitio/pdp-v2:latest