from django.db import models


class Buildings(models.Model):
    name = models.CharField(max_length=100)
    letters = models.CharField(max_length=10)
    description = models.CharField(max_length=3000)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name_plural = "Buildings"

