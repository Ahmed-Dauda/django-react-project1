
from django.contrib import admin
from django.urls import path
from django.views.generic import TemplateView

from rest_framework import routers                 
from todo import views                             
from django.urls import path,include  
router = routers.DefaultRouter()                   
router.register(r'todos', views.TodoView, 'todo')  



urlpatterns = [
    path("admin/", admin.site.urls),
    path('', TemplateView.as_view(template_name = 'index.html')),
    path('api/', include(router.urls)) 
]
