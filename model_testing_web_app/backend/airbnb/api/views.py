#Define all the API here by creating a new function with the name of the API
from django.conf import settings
from django.http import JsonResponse, QueryDict
from django.views.decorators.csrf import csrf_exempt
from airbnb.settings import MODEL
from .utils.dbconnector import dbconnector as db
from .utils.distances import get_distances as distance
from .utils.indexer import indexer_solver
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
                }
                output_data.append(airbnb_instance)
            print(output_data)
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
        pred_list = [input_data['accommodates'], input_data['bedrooms'], input_data['n_bathrooms'], input_data['children_friendly'], input_data['availability_365'], input_data['has_tv'], input_data['is_bathroom_shared'], indexer_solver.get_room(input_data['room_type']), input_data['has_bathtub'], 4.5, input_data['has_self_checkin'], input_data['has_private_entrance'], input_data['has_security_devices'], 3, input_data['has_patio'], input_data['is_smoking_allowed'], distances[1], input_data['has_free_parking'], input_data['host_identity_verified'], distances[0], input_data['review_scores_cleanliness'], input_data['host_is_superhost'], input_data['instant_bookable'], input_data['host_response_time'], input_data['has_elevator'], 4.5, input_data['has_cooking_basics'], 4.5, input_data['number_of_reviews'], input_data['review_scores_checkin'], 4.5, indexer_solver.get_city(input_data['city'])]
        try:
            output_data['price'] = round(math.exp(MODEL.make_price_prediction(pred_list)), 2)
            output_data['review_location'] = 4.5
            output_data['review_rating'] = 4.5
            return JsonResponse({"message": "OK", "data": json.dumps(output_data)}, status=200)
        except:
            return JsonResponse({"message": "Something bad happened."}, status=500)
    return JsonResponse({"message": "Request not valid."}, status=400)

@csrf_exempt
def add_airbnb(request, *args, **kargs):
    input_data = {}

    if request.method == "POST":
        req_data = request.POST
        for key, value in req_data.items():
            input_data[key] = value
        distances = distance.get_distances(float(input_data['latitude']), float(input_data['longitude']), input_data['city'])
        conn = db.dbconnector()
        try:
            cursor = conn.cursor()
            query = "INSERT INTO airbnb(id, accommodates, bedrooms, n_bathrooms, is_children_friendly, availability_365, has_tv, is_bathroom_shared , room_type, has_bathtub, review_scores_rating, has_self_checkin, has_private_entrance, has_security_devices, calculated_host_listings_count, has_patio, is_smoking_allowed, city_center_dist, has_free_parking, host_identity_verified, station_dist, review_scores_cleanliness, host_is_superhost, instant_bookable, host_response_time, has_elevator, review_scores_location, has_cooking_basics, review_scores_value, number_of_reviews, review_scores_checkin, review_scores_communication, city, name) VALUES (DEFAULT, '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}')".format(input_data['accommodates'], input_data['bedrooms'], input_data['n_bathrooms'], input_data['children_friendly'], input_data['availability_365'], input_data['has_tv'], input_data['is_bathroom_shared'], indexer_solver.get_room(input_data['room_type']), input_data['has_bathtub'], 4.5, input_data['has_self_checkin'], input_data['has_private_entrance'], input_data['has_security_devices'], 3, input_data['has_patio'], input_data['is_smoking_allowed'], distances[1], input_data['has_free_parking'], input_data['host_identity_verified'], distances[0], input_data['review_scores_cleanliness'], input_data['host_is_superhost'], input_data['instant_bookable'], input_data['host_response_time'], input_data['has_elevator'], 4.5, input_data['has_cooking_basics'], 4.5, input_data['number_of_reviews'], input_data['review_scores_checkin'], 4.5, indexer_solver.get_city(input_data['city']), input_data['name'])
            cursor.execute(query)
            conn.commit()
            return JsonResponse({"message": "OK"}, status=200) 
        except SystemError as err:
                conn.rollback()
                return JsonResponse({"message": err}, status=500)
    return JsonResponse({"message": "Request not valid."}, status=400)