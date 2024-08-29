#!/bin/bash
MEM_USAGE=$(free -m | grep Mem: | awk '{print $3}')
DISK_USAGE=$(df -h | grep '^/dev' | awk '{print $5}')
SERVICES=$(systemctl list-units --type=service --state=running | wc -l)

mysql -u root -p'password' -e "INSERT INTO metrics (mem_usage, disk_usage, services) VALUES ('$MEM_USAGE', '$DISK_USAGE', '$SERVICES');" database_name
