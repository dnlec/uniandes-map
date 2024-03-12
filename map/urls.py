from django.urls import path
from . import views

urlpatterns = [
    path("", views.uniandes_map, name="uniandes_map"),
]