# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('drugs', '0002_auto_20150627_2014'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='drug',
            name='field',
        ),
    ]
