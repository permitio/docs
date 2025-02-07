docker run -it -p 7766:7000 \
  --name pdp-online \
  --env PDP_API_KEY=<YOUR_API_KEY> \
  --env PDP_FACTDB_ENABLED=true \
  permitio/pdp-v2:latest