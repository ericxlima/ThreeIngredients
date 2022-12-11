FROM python:3.10

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

WORKDIR /app

ADD ./server /app/server/

# COPY . /app

RUN pip install --upgrade pip
# RUN pip install gunicorn
RUN pip install -r server/requirements.txt

ADD ./docker /app/docker
# ADD ./server /app/server



# RUN python3 manage.py makemigrations 
# RUN python3 manage.py migrate --skip-checks

# CMD gunicorn -b 0.0.0.0:8000 --worker-class=gevent --worker-connections=1000 --workers=5 backeng.wsgi