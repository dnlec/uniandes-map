from django.contrib import admin
from .models import Buildings


class BuildingsAdmin(admin.ModelAdmin):
    list_display = ("name", "letters")
    search_fields = ("name", "letters")


admin.site.register(Buildings, BuildingsAdmin)
