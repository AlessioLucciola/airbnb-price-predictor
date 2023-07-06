FROM python:3.9

# Install Java
RUN apt-get update && apt-get install -y ca-certificates-java
RUN apt-get install -y openjdk-17-jdk

WORKDIR /app
COPY ./requirements.txt /app/requirements.txt
RUN pip install --no-cache-dir --upgrade -r /app/requirements.txt
COPY . /app
RUN python manage.py migrate