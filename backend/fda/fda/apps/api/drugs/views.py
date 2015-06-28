from __future__ import absolute_import
from rest_framework import viewsets

from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt

from .serializers import DrugsSerializer
from fda.apps.drugs import models


# ViewSets define the view behavior.
class DrugsViewSet(viewsets.ReadOnlyModelViewSet):
    model = models.Drug
    serializer_class = DrugsSerializer

    def get_queryset(self):
        """
        This view should return a list of all drug names
        filtered by searchText
        """
        queryset = self.model.objects.all()
        searchText = self.request.query_params.get('searchText', None)
        if searchText is not None:
            queryset = self.model.objects.filter(name__istartswith=searchText)
        return queryset

    @method_decorator(csrf_exempt)
    def dispatch(self, *args, **kwargs):
        return super(DrugsViewSet, self).dispatch(*args, **kwargs)