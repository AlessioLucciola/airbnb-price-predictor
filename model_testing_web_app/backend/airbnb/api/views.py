#Define all the API here by creating a new function with the name of the API
from django.conf import settings
from django.http import JsonResponse, QueryDict
from django.views.decorators.csrf import csrf_exempt
from airbnb.settings import MODEL
from .utils.dbconnector import dbconnector as db
from .utils.distances import get_distances as distance
import json
import os
import math

model = MODEL

def api(request, *args, **kwargs):
    return JsonResponse({'message': 'Test Api'})

@csrf_exempt
def get_airbnb(request, *args, **kargs):
    output_data = []

    if request.method == "GET":
        conn = db.dbconnector()
        cursor = conn.cursor()
        query = "SELECT * FROM airbnb"
        cursor.execute(query)
        ret = tuple(cursor.fetchall())
        if not ret:
            return JsonResponse({"message": "OK", "data": []}, status=200)
        else:
            for el in ret:
                airbnb_instance = {
                    "id": el[0],
                    "name": el[1],
                    "city": el[2],
                    "address": el[3],
                    "latitude": el[4],
                    "longitude": el[5],
                    "price": el[6]
                }
                output_data.append(airbnb_instance)
            return JsonResponse({"message": "OK", "data": json.dumps(output_data)}, status=200)
    return JsonResponse({"message": "Request not valid."}, status=400)

@csrf_exempt
def generate_prediction(request, *args, **kargs):
    output_data = {}
    input_data = {}

    if request.method == "POST":
        req_data = request.POST
        for key, value in req_data.items():
            input_data[key] = value
        distances = distance.get_distances(float(input_data['latitude']), float(input_data['longitude']), input_data['city'])
        a = MODEL.make_price_prediction([0, 0, 0, 8, 1, 1, 3, 1, 0.978082192, 5, 4.2, 3.8, 4.4, 4.6, 4.6, 3.4, 1, 2, 1, 1, 0, 1.0, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0.282868312, 2.269291047])
        print(math.exp(a))
        print(distances)
    print(input_data)

    '''
    if request.method == "POST":
        conn = db.dbconnector()
        cursor = conn.cursor()
        query = "SELECT * FROM airbnb"
        cursor.execute(query)
        ret = tuple(cursor.fetchall())
        if not ret:
            return JsonResponse({"message": "OK", "data": []}, status=200)
        else:
            for el in ret:
                airbnb_instance = {
                    "id": el[0],
                    "name": el[1],
                    "city": el[2],
                    "address": el[3],
                    "latitude": el[4],
                    "longitude": el[5],
                    "price": el[6]
                }
                output_data.append(airbnb_instance)
            return JsonResponse({"message": "OK", "data": json.dumps(output_data)}, status=200)
    '''
    return JsonResponse({"message": "Request not valid."}, status=400)