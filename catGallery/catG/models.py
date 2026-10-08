from django.db import models
from django.contrib.auth.models import User
from django.utils import timezone

# Create your models here.
# TODO: Finish models

class Image(models.Model):
    tags = models.TextField()

class Comment(models.Model):
    image = models.ForeignKey(Image, related_name='comments', on_delete=models.CASCADE)
    user = models.TextField()
    date_posted = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return f'{self.user}'