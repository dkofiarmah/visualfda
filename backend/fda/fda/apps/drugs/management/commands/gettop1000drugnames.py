# Get all drugs
import urllib2
import json
import math

from django.core.management.base import BaseCommand, CommandError
from fda.apps.drugs.models import Drug

class Command(BaseCommand):
    help = 'Get drugs names from open.api.gov and save it on our api'

    def handle(self, *args, **options):

        self.writeln("Getting drugs names")
        self.getdrugs()
        self.writeln("Finished")

    def writeln(self, *args):
        self.stdout.write(" ".join(map(str,args)))


    def getdrugs(self):

        field_names = [
            {
                'type':'event',
                'field':'patient.drug.medicinalproduct'
            },
            {
                'type':'event',
                'field':'patient.drug.openfda.brand_name'
            },
            {
                'type':'event',
                'field':'patient.drug.openfda.generic_name'
            },
            {
                'type':'label',
                'field':'openfda.generic_name'
            },
            {
                'type':'label',
                'field':'openfda.brand_name'
            },
        ]

        for field_name in field_names:
            filter = "?count={field}.exact&limit=1000".format(**{'field':field_name['field']})
            drugs = self.getdrugsfromfda(filter,field_name['type'])
            self.save_drugs(drugs)



    def save_drugs(self, drugs):
        for drug in drugs['results']:
            drug_name = drug['term']
            self.save_field(drug_name)

    def save_field(self, field):

        drug_names = field.split(",")
        for drug_name in drug_names:
            drug_name = drug_name.strip().capitalize()
            drug, created = Drug.objects.get_or_create(name=drug_name)
            self.writeln(drug_name, 'created' if created else 'updated')

    def getdrugsfromfda(self,  filter='', type='label'):
        url = "https://api.fda.gov/drug/{type}.json{filter}".format(**{'filter':filter, 'type':type})

        req = urllib2.Request(url)
        f = urllib2.urlopen(req)
        drugs = json.loads(f.read())
        f.close()

        return drugs