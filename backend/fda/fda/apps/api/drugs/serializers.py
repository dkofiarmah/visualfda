from rest_framework import serializers
from fda.apps.drugs import models as drugs


class DrugsSerializer(serializers.ModelSerializer):
    class Meta:
        model = drugs.Drug