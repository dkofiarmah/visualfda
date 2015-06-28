# Get all drugs
import urllib2
import json
import math

from django.core.management.base import BaseCommand, CommandError
from fda.apps.drugs.models import Drug

class Command(BaseCommand):
    help = 'Get drugs names from open.api.gov and save it on our api'

    def add_arguments(self, parser):
        parser.add_argument('skip', nargs='+', type=int)

    def handle(self, *args, **options):
        self.limit = 100
        self.skip = options['skip']
        self.total = 0



        self.writeln("Getting drugs names")
        self.getdrugs()
        self.writeln("Finished")

    def writeln(self, *args):
        self.stdout.write(" ".join(map(str,args)))


    def getdrugs(self):

        self.field_names = [
            'generic_name',
            'brand_name',
            'substance_name',
        ]

        drugs = self.getdrugsfromfda()
        self.total = drugs['meta']['results']['total']
        pages = int(math.ceil(float(self.total)/float(self.limit)))
        self.writeln("total", self.total, "pages", pages)

        for i in xrange(pages):
            self.writeln("skip", self.skip, "page", i)
            drugs = self.getdrugsfromfda()
            self.save_drugs(drugs)

    def save_drugs(self, drugs):
        for drug in drugs['results']:
            openfda = drug['openfda']
            for field_name in self.field_names:
                if field_name in openfda:
                    self.save_field(openfda[field_name], field_name)
        self.skip += self.limit

    def save_field(self, fields, field_name):

        for field in fields:
            drug_names = field.split(",")
            for drug_name in drug_names:
                drug_name = drug_name.strip().capitalize()
                drug, created = Drug.objects.get_or_create(name=drug_name, field=field_name)
                self.writeln(drug_name, 'created' if created else 'updated')

    def getdrugsfromfda(self):
        base_url = "https://api.fda.gov/drug/label.json"
        if self.skip == 0:
            url = base_url;
        else:
            url = "%s?limit=%d&skip={skip}" % (base_url, self.limit)

        req = urllib2.Request(url.format(**{'skip':self.skip}))
        f = urllib2.urlopen(req)
        drugs = json.loads(f.read())
        f.close()

        return drugs