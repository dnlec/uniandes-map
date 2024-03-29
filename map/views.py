from django.shortcuts import render
from .forms import BuildingsForm
from .models import Buildings
from django.http import Http404

import networkx as nx
import pandas as pd

# what is edge_key??
df = pd.read_csv("static/csv/tablemap.csv")
MAP = nx.from_pandas_edgelist(df, source="Start", target="End", edge_attr="weight")

# Create your views here.


def index(request):
    return render(request, "index.html")


def uniandes_map(request):
    context = {}
    buildings = Buildings.objects.all().order_by("letters").values()
    context['buildings'] = buildings
    if request.method == "POST":
        form = BuildingsForm(request.POST)
        if form.is_valid():
            start_point = form.cleaned_data["start_point"]
            end_point = form.cleaned_data["end_point"]
            mode = form.cleaned_data['mode']
            print(mode)
            velocity = 66
            if mode == 'Discapacitado':
                velocity = 48

            total_distance, path = nx.single_source_dijkstra(MAP, source=start_point, target=end_point, weight='weight')
            walk_time = total_distance / velocity
            print(walk_time)
            if walk_time < 1:
                walk_time *= 60
                walk_time = f"{walk_time:.0f} seg"
            else:
                walk_time = f"{walk_time:.0f} min"

            total_distance = f'{total_distance} metros'
            path_length = len(path)

            clean_path = []
            for point in path:
                if 'In' not in point:
                    clean_path.append(point)

            context['total_distance'] = total_distance
            context['walk_time'] = walk_time
            context['path_length'] = path_length - 1
            context['path'] = path
            context['clean_path'] = clean_path

            return render(request, "path_result.html", context)

        else:
            raise Http404

    return render(request, "uniandes_map.html", context)
