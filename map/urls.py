from django.urls import path
from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("map/", views.uniandes_map, name="uniandes_map"),
    path("map/path", views.uniandes_map, name="uniandes_map")
]