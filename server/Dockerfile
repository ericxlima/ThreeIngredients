# syntax=docker/dockerfile:1
FROM python:3

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

WORKDIR /api

COPY requirements.txt /api/

RUN pip install -r requirements.txt && pip install --upgrade pip

COPY . /api/

CMD python3 manage.py makemigrations && python3 manage.py migrate && python3 manage.py runserver