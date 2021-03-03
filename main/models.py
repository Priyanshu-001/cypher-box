from django.db import models

# Create your models here.

	
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
	def __str__(self):
		return self.name