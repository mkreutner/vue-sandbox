# +---------------------------------------------------------------------------
# : Project specific recipes
# +---------------------------------------------------------------------------
# Set the default context (service) for commands like exec, shell, logs, node, npm, yarn
# You can override this by providing the SERVICE variable, e.g.:
# just SERVICE=other-service exec <command>
# Available services: sandbox, ...  (add your services here)
# ----------------------------------------------------------------------------- 
SERVICE := "sandbox"

# Build or rebuild services
build *OPTIONS:
    @docker compose build {{OPTIONS}}

# Create and start containers (detached)
up *OPTIONS:
    @docker compose up -d {{OPTIONS}}

# Stop and remove containers, networks
down:
    @docker compose down

# Stop and remove containers, networks, remove orphans and volumes
down-pp:
    @docker compose down

# List containers
ps:
    @docker compose ps

# Restart service containers
restart:
    @docker compose restart

# Watch build context for service and rebuild/refresh containers when files are updated
watch:
    @docker compose watch

# Execute a COMMAND in SERVICE container
exec *COMMAND:
    @docker compose exec {{SERVICE}} {{COMMAND}}

# Launch SHELL in SERVICE container (default: bash)
shell SHELL="bash": 
    @docker compose exec {{SERVICE}} {{SHELL}}

# Display tdout logs in SERVICE container 
logs:
    @docker compose logs -f -n 40 {{SERVICE}}

# Run node command in SERVICE container
node *COMMAND:
    @docker compose exec {{SERVICE}} node {{COMMAND}}

# Run npm command in SERVICE container
npm *COMMAND:
    @docker compose exec {{SERVICE}} npm {{COMMAND}}

# Run yarn command in SERVICE container
yarn *COMMAND:
    @docker compose exec {{SERVICE}} yarn {{COMMAND}}

# Clean Bash History file
history-clean:
    @echo -n > ./data/tmp/.bash_history

[private]
@help:
    echo "🛟  Project Help 🛟"
    just --list --list-heading '' --list-prefix "    ↪ " --justfile {{justfile()}}

# Setting up the project
[private]
@setup:
    #!/usr/bin/env sh
    echo "🚧  Project Setup 🚧"
    cd ..
    if [ ! -e .env ]; then
        echo ">>> Create .env file"
        cp .env.example .env
    fi
    # Set user and group ID to avoid permission issues
    # Uncomment if needed 
    #uid=$(id -u)
    #gid=$(id -g)
    #sed -i "s/UID=.*/UID=$uid/" .env
    #sed -i "s/GID=.*/GID=$gid/" .env

    mkdir -p src/sandbox
    mkdir -p data
    cp -rn files data/tmp
    touch data/tmp/.bash_history
