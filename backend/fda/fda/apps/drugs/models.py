# -*- coding: utf-8 -*-
from django.db import models

class Drug(models.Model):
    name = models.CharField(max_length=255, unique=True)
    field = models.CharField(max_length=255)

    def __str__(self):
        return self.name