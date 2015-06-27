from __future__ import absolute_import
from rest_framework import viewsets
from fda.apps.drugs import models
from .serializers import DrugsSerializer

# ViewSets define the view behavior.
class DrugsViewSet(viewsets.ReadOnlyModelViewSet):
    model = models.Drug
    queryset = model.objects.all()
    serializer_class = DrugsSerializer