#!/bin/sh

nginx

cd /api && prisma2 lift up

# Start service
exec /sbin/tini -- "$@"