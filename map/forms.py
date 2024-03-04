from django import forms


class BuildingsForm(forms.Form):
    start_point = forms.CharField(label="start_point", max_length=50)
    end_point = forms.CharField(label="end_point", max_length=50)