from __future__ import absolute_import
from rest_framework import viewsets

from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt

from .serializers import DrugsSerializer
from fda.apps.drugs import models


# ViewSets define the view behavior.
class DrugsViewSet(viewsets.ReadOnlyModelViewSet):
    model = models.Drug
    queryset = model.objects.all()
    serializer_class = DrugsSerializer

    @method_decorator(csrf_exempt)
    def dispatch(self, *args, **kwargs):
        return super(DrugsViewSet, self).dispatch(*args, **kwargs)