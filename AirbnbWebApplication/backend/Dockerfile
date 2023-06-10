FROM python:3.9.6
ENV PYTHONUNBUFFERED 1
ENV JAVA_HOME C:/Program Files/Java/jdk-17
WORKDIR /app
COPY requirements.txt /app/requirements.txt
RUN pip install -r requirements.txt
COPY . /app
RUN python manage.py migrate