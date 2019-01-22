FROM java:8
LABEL maintainer=“bryant.qin@gmail.com”
VOLUME /tmp
EXPOSE 4100
ADD target/boot211-0.0.1-SNAPSHOT.jar boot211-0.0.1-SNAPSHOT.jar
ENTRYPOINT ["java","-jar","boot211-0.0.1-SNAPSHOT.jar"]