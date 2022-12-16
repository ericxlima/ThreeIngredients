FROM python:3.10

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1
ENV PIP_DEFAULT_TIMEOUT=100

WORKDIR /app

ADD ./server /app/server/

RUN pip install --upgrade pip
RUN pip install -r server/requirements.txt

ADD ./docker /app/docker
