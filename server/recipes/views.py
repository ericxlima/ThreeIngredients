from django.http import HttpResponse
from django.shortcuts import render


def home(request):
    return render(request, HttpResponse('<h1>Hello</h1>'), status=200)
