from django.shortcuts import render
from .forms import BuildingsForm
from .models import Buildings
from django.http import Http404

import networkx as nx
import pandas as pd

# what is edge_key??
df = pd.read_csv("static/csv/umap.csv")
MAP = nx.from_pandas_edgelist(df, source="Start", target="End", edge_attr="weight")

# Create your views here.


def index(request):
    return render(request, "index.html")


def uniandes_map(request):
    context = {}
    if request.method == "POST":
        form = BuildingsForm(request.POST)
        print(form)
        if form.is_valid():
            start_point = form.cleaned_data["start_point"]
            end_point = form.cleaned_data["end_point"]

            total_distance, path = nx.single_source_dijkstra(MAP, source=start_point, target=end_point, weight='weight')
            walk_time = total_distance / 82
            if walk_time < 1:
                walk_time *= 60
                walk_time = f"{walk_time:.0f} seg"
            else:
                walk_time = f"{walk_time:.0f} min"

            total_distance = f'{total_distance} metros'

            context['route'] = [total_distance, walk_time, path]

        else:
            raise Http404

    return render(request, "uniandes_map.html", context)
