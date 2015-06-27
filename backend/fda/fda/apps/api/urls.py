from django.conf.urls import patterns, include, url
from rest_framework import routers
from fda.apps.api.drugs import views as drugs

# Routers provide an easy way of automatically determining the URL conf.
router = routers.DefaultRouter()
# Routes for drugs
router.register(r'drugs', drugs.DrugsViewSet)


urlpatterns = patterns('',
    url(r'^', include(router.urls)),
    url(r'^auth/', include('rest_framework.urls', namespace='rest_framework'))
)
