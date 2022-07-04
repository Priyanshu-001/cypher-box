from django import forms 
class login(forms.Form):
	userName = forms.CharField(max_length=42)
	password = forms.CharField(max_length=255)
