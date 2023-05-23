#Define all the API here by creating a new function with the name of the API
from django.conf import settings
from django.http import JsonResponse, QueryDict
from django.views.decorators.csrf import csrf_exempt
from .utils.dbconnector import dbconnector as db
import imghdr
import json
import os

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