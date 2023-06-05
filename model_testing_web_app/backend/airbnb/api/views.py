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
                    "accommodates": el[1],
                    "bedrooms": el[2],
                    "n_bathrooms": el[3],
                    "is_children_friendly": el[4],
                    "availability_365": el[5],
                    "has_tv": el[6],
                    "is_bathroom_shared": el[7],
                    "room_type": el[8],
                    "has_bathtub": el[9],
                    "review_scores_rating": el[10],
                    "has_self_checkin": el[11],
                    "has_private_entrance": el[12],
                    "has_security_devices": el[13],
                    "has_patio": el[15],
                    "is_smoking_allowed": el[16],
                    "city_center_dist": el[17],
                    "has_free_parking": el[18],
                    "host_identity_verified": el[19],
                    "station_dist": el[20],
                    "review_scores_cleanliness": el[21],
                    "host_is_superhost": el[22],
                    "instant_bookable": el[23],
                    "has_elevator": el[25],
                    "review_scores_location": el[26],
                    "has_cooking_basics": el[27],
                    "review_scores_value": el[28],
                    "review_scores_checkin": el[30],
                    "review_scores_communication": el[31],
                    "city": el[32],
                    "name": el[33],
                    "price": el[34],
                    "address": el[35],
                    "poi_dist": el[36],
                    "house_number": el[37],
                    "minimum_nights": el[38],
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
        pred_list_price_static = [input_data['accommodates'], input_data['bedrooms'], input_data['n_bathrooms'], input_data['children_friendly'], input_data['availability_365'], input_data['has_tv'], input_data['is_bathroom_shared'], indexer_solver.get_room(input_data['room_type']), input_data['has_bathtub'], input_data['has_self_checkin'], input_data['has_private_entrance'], input_data['has_security_devices'], 3, input_data['has_patio'], input_data['is_smoking_allowed'], distances[2], input_data['has_free_parking'], input_data['host_identity_verified'], distances[0], input_data['review_scores_cleanliness'], input_data['host_is_superhost'], input_data['instant_bookable'], input_data['host_response_time'], input_data['has_elevator'], input_data['review_scores_rating'], input_data['review_scores_location'], input_data['has_cooking_basics'], input_data['number_of_reviews'], indexer_solver.get_city(input_data['city']), input_data['has_paid_parking'], input_data['minimum_nights']]
        pred_list_rating = [3, input_data['host_is_superhost'], input_data['instant_bookable'], input_data['has_patio'], input_data['host_greets_you'], input_data['has_security_devices'], input_data['has_paid_parking'], input_data['has_free_parking'], distances[2], input_data['host_response_rate'], input_data['availability_365'], input_data['host_acceptance_rate'], input_data['host_response_time'], distances[0], input_data['has_security_devices'], input_data['has_fireplace'], indexer_solver.get_city(input_data['city']), input_data['children_friendly'], input_data['has_bathtub'], input_data['has_breakfast'], input_data['has_cooking_basics'], input_data['has_tv'], input_data['is_smoking_allowed'], input_data['accommodates'], input_data['is_email_verified'], input_data['is_phone_verified'], input_data['is_work_email_verified'], input_data['is_bathroom_shared']]
        pred_list_location = [distances[1], distances[0], distances[2], input_data['host_is_superhost'], input_data['has_free_parking'], indexer_solver.get_city(input_data['city']), input_data['has_paid_parking'], input_data['has_city_skyline_view'], input_data['has_elevator']]

        try:
            price_static = round(math.exp(MODEL.make_price_prediction(pred_list_price_static)), 2)
            location_score = round(MODEL.make_rating_score_prediction(pred_list_rating), 2)
            rating_score = round(MODEL.make_location_score_prediction(pred_list_location), 2)
            pred_list_price_dynamic = [input_data['accommodates'], input_data['bedrooms'], input_data['n_bathrooms'], input_data['children_friendly'], input_data['availability_365'], input_data['has_tv'], input_data['is_bathroom_shared'], indexer_solver.get_room(input_data['room_type']), input_data['has_bathtub'], input_data['has_self_checkin'], input_data['has_private_entrance'], input_data['has_security_devices'], 3, input_data['has_patio'], input_data['is_smoking_allowed'], distances[2], input_data['has_free_parking'], input_data['host_identity_verified'], distances[0], input_data['review_scores_cleanliness'], input_data['host_is_superhost'], input_data['instant_bookable'], input_data['host_response_time'], input_data['has_elevator'], rating_score, location_score, input_data['has_cooking_basics'], input_data['number_of_reviews'], indexer_solver.get_city(input_data['city']), input_data['has_paid_parking'], input_data['minimum_nights']]
            price_dynamic = round(math.exp(MODEL.make_price_prediction(pred_list_price_dynamic)), 2)

            output_data['price_static'] = price_static
            output_data['location_score'] = rating_score if location_score <= 5 else 5.0
            output_data['rating_score'] = location_score if location_score <= 5 else 5.0
            output_data['price_dynamic'] = price_dynamic
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
            query = "INSERT INTO airbnb(id, accommodates, bedrooms, n_bathrooms, is_children_friendly, availability_365, has_tv, is_bathroom_shared , room_type, has_bathtub, review_scores_rating, has_self_checkin, has_private_entrance, has_security_devices, calculated_host_listings_count, has_patio, is_smoking_allowed, city_center_dist, has_free_parking, host_identity_verified, station_dist, review_scores_cleanliness, host_is_superhost, instant_bookable, host_response_time, has_elevator, review_scores_location, has_cooking_basics, review_scores_value, number_of_reviews, review_scores_checkin, review_scores_communication, city, name, price, address, poi_dist, house_number, minimum_nights) VALUES (DEFAULT, '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}', '{}')".format(input_data['accommodates'], input_data['bedrooms'], input_data['n_bathrooms'], input_data['children_friendly'], input_data['availability_365'], input_data['has_tv'], input_data['is_bathroom_shared'], indexer_solver.get_room(input_data['room_type']), input_data['has_bathtub'], 4.5, input_data['has_self_checkin'], input_data['has_private_entrance'], input_data['has_security_devices'], 3, input_data['has_patio'], input_data['is_smoking_allowed'], distances[1], input_data['has_free_parking'], input_data['host_identity_verified'], distances[0], input_data['review_scores_cleanliness'], input_data['host_is_superhost'], input_data['instant_bookable'], input_data['host_response_time'], input_data['has_elevator'], 4.5, input_data['has_cooking_basics'], 4.5, input_data['number_of_reviews'], input_data['review_scores_checkin'], 4.5, indexer_solver.get_city(input_data['city']), input_data['name'], input_data['price'], input_data['address'], distances[2], input_data['house_number'], input_data['minimum_nights'])
            cursor.execute(query)
            conn.commit()
            return JsonResponse({"message": "OK"}, status=200) 
        except SystemError as err:
                conn.rollback()
                return JsonResponse({"message": err}, status=500)
    return JsonResponse({"message": "Request not valid."}, status=400)