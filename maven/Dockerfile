FROM maven:3.9-eclipse-temurin-17
RUN mvn --version > /tmp/mvn_version.txt
EXPOSE 8080
CMD ["sh", "-c", "cat /tmp/mvn_version.txt && while true; do { echo -e 'HTTP/1.1 200 OK\r\n\r\n'; cat /tmp/mvn_version.txt; } | nc -l -p ${PORT:-8080} -q 1; done"]