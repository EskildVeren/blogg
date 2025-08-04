# Use a small base image with Java runtime
FROM eclipse-temurin:21-jre-alpine

# Set app directory inside container
WORKDIR /app

# Copy the built jar file into the container
COPY target/*.jar app.jar
COPY ./blogPosts /app/blogPosts

# Run the jar file
ENTRYPOINT ["java", "-jar", "app.jar"]