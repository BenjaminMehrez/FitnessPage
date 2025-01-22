from django.db import models
from shortuuid.django_fields import ShortUUIDField

# Create your models here.


class Product(models.Model):
    pid = ShortUUIDField(unique=True, length=10, max_length=20, alphabet='abcdefgh12345')
    category = models.ForeignKey('Category', on_delete=models.CASCADE, related_name='category')
    
    title = models.CharField(max_length=100)
    description = models.CharField(max_length=100, null=True, blank=True)
    image = models.ImageField(upload_to='product_images/', null=True, blank=True)
    specification = models.TextField(null=True, blank=True)
    
    
    def __str__(self):
        return self.title        
    

    def get_absolute_url(self):
        return f'/product/{self.pid}'

        
    
class Category(models.Model):
    cid = ShortUUIDField(unique=True, length=10, max_length=20, prefix='cat', alphabet='abcdefgh12345')
    title = models.CharField(max_length=20)
    
    class Meta:
        verbose_name_plural = 'Categories'
        
        
    def __str__(self):
        return self.title


    def get_absolute_url(self):
        return f'/category/{self.cid}'
    
    