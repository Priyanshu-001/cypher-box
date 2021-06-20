from django.db import models
from django.contrib.auth.models import User
# Create your models here.

class cryptUser(models.Model):
	user = models.OneToOneField(User, on_delete=models.CASCADE)
	name = models.CharField(max_length=40)
	email = models.EmailField(max_length=254)
class resources(models.Model):
	name = models.CharField(max_length=30)
	link = models.CharField(max_length=120)
	def __str__(self):
		return self.name


class variations(models.Model):
	name = models.CharField(max_length=30)
	link = models.CharField(max_length=120)
	description = models.TextField('description', max_length=400)

	def __str__(self):
		return self.name

class tool(models.Model):
	id = models.AutoField(primary_key=True)
	name = models.CharField('name of the tool', max_length=30)
	urlName = models.CharField(max_length=30)
	description = models.TextField('description', max_length=1000)
	link = models.CharField(max_length=100)
	resources = models.ManyToManyField(resources,blank=True, null=True)
	variations = models.ManyToManyField(variations, blank=True, null=True)
	isReady = models.BooleanField(default=True)
	color = models.CharField(max_length=7,default="#ede7e6")
	grad1 = models.CharField(max_length=24,default="rgb(196, 20, 98)")
	grad2 = models.CharField(max_length=24, default="rgb(4, 8, 0)")
	cat = models.CharField(max_length=12, default="Traditional")
	def __str__(self):
		return self.name