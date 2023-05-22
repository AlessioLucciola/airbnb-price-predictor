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