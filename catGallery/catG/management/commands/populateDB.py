from django.core.management.base import BaseCommand, CommandError
from catG.models import Image
import requests

class Command(BaseCommand):
    help = 'Populates model with images once and only once'

    def handle(self, *args, **options):
        # Limited to 10 cats, modify value of limit to change no. cats returned
        limit = '10'
        apiURL = 'https://cataas.com/api/cats?limit=' + limit + '&skip=0'

        # if Image model has not been populated
        if not Image.objects.exists():
            response = requests.get(apiURL)
            data = response.json()

            for item in data:
                obj, created = Image.objects.get_or_create(
                    id = item['id'],
                    catData = item
                )