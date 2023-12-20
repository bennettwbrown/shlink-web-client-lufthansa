set -e

ME=$(basename $0)

setup_single_shlink_server() {
  [ -n "$SHLINK_SERVER_URL" ] || return 0
  [ -n "$SHLINK_SERVER_API_KEY" ] || return 0
  local name="${SHLINK_SERVER_NAME:-Shlink}"
  local json_file="/usr/share/nginx/html/servers.json"

  # Check if servers.json is a directory and remove if it is
  if [ -d "$json_file" ]; then
    rm -rf "$json_file"
  fi

  echo "[{\"name\":\"${name}\",\"url\":\"${SHLINK_SERVER_URL}\",\"apiKey\":\"${SHLINK_SERVER_API_KEY}\"}]" > "$json_file"
}

setup_single_shlink_server

exit 0
