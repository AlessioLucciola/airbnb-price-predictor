from airbnb.paths import DISTANCES_ROOT
from numpy import cos, sin, arcsin, sqrt
from math import radians
import json
import os

def get_city_distance_file():
    with open(os.path.join(DISTANCES_ROOT, 'city_center_coordinates.json'), 'r') as file:
        return json.loads(file.read())
    
def get_station_distance_file():
    with open(os.path.join(DISTANCES_ROOT, 'transport_result.json'), 'r', encoding='utf16') as file:
        return json.loads(file.read())

def get_poi_distance_file():
    with open(os.path.join(DISTANCES_ROOT, 'poi_coordinates.json'), 'r') as file:
        return json.loads(file.read())

def haversine(lon1, lat1, lon2, lat2):
    lon1, lat1, lon2, lat2 = map(radians, [lon1, lat1, lon2, lat2])
    dlon = lon2 - lon1 
    dlat = lat2 - lat1 
    a = sin(dlat/2)**2 + cos(lat1) * cos(lat2) * sin(dlon/2)**2
    c = 2 * arcsin(sqrt(a)) 
    km = 6367 * c
    return float(km)

def compute_city_distance(lat, lon, city):
    all_city_centers = get_city_distance_file()
    city_center = all_city_centers[city]
    return haversine(lon, lat, city_center['lon'], city_center['lat'])

def compute_station_distance(lat, lon, city):
    min_distance = None
    all_transport = get_station_distance_file()
    for coordinates in all_transport[city]:
        dist = haversine(lon, lat, coordinates['lon'], coordinates['lat'])
        if min_distance == None or dist < min_distance: min_distance = dist
    return min_distance

def compute_poi_distance(lat, lon, city):
    min_distance = None
    pois = get_poi_distance_file()
    for coordinates in pois[city]:
        dist = haversine(lon, lat, coordinates['lon'], coordinates['lat'])
        if min_distance == None or dist < min_distance: min_distance = dist
    return min_distance

def get_distances(lat, lon, city):
    return compute_station_distance(lat, lon, city), compute_city_distance(lat, lon, city), compute_poi_distance(lat, lon, city)