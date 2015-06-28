from __future__ import absolute_import
from rest_framework import viewsets

from django.views.decorators.csrf import csrf_exempt

from .serializers import DrugsSerializer
from fda.apps.drugs import models


# ViewSets define the view behavior.
@csrf_exempt
class DrugsViewSet(viewsets.ReadOnlyModelViewSet):
    model = models.Drug
    queryset = model.objects.all()
    serializer_class = DrugsSerializer