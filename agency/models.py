from django.db import models
from filer.fields.image import FilerImageField


class Photo(models.Model):
    name = models.CharField(blank=True, max_length=255)
    photo = FilerImageField(
        on_delete=models.CASCADE,
        related_name="logo_company"
    )
