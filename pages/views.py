from django.shortcuts import render
from . import views
# Create your views here.
def index(request):
    return render(request,'pages/index.html',{'name': 'jana','age':20})

def about(request):
    return render(request,'pages/about.html',{'about':'this is about page'})

def contact(request):
    return render(request,'pages/contact.html',{'number': 123456789})


