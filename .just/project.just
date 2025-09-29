# +---------------------------------------------------------------------------
# : Project specific recipes
# +---------------------------------------------------------------------------
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

# Execute a COMMAND in CONTAINER container
exec CONTAINER *COMMAND:
    @docker compose exec {{CONTAINER}} {{COMMAND}}

# Launch SHELL in CONTAINER
shell CONTAINER SHELL="bash": 
    @docker compose exec {{CONTAINER}} {{SHELL}}

# Display tdout logs in CONTAINER 
logs CONTAINER:
    @docker compose logs -f -n 40 {{CONTAINER}}

# Clean Bash History file
history-clean CONTAINER:
    @echo -n > ./src/{{CONTAINER}}/.bash_history

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
        cp .env.dist .env
    fi
    uid=$(id -u)
    gid=$(id -g)
    sed -i "s/UID=.*/UID=$uid/" .env
    sed -i "s/GID=.*/GID=$gid/" .env

    mkdir -p src/sandbox
    mkdir -p data/tmp
    touch data/tmp/.bash_history
