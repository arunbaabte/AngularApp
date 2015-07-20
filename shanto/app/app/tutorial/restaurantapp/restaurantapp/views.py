
from django.shortcuts import render

# Create your views here.
from django.views.decorators.csrf import csrf_exempt
from rest_framework.decorators import api_view
from rest_framework.response import Response
# from pymongo import Connection
from models import Restaurant
from serializers import RestaurantSerializer
import json
from rest_framework.parsers import JSONParser
import pymongo
from pymongo import MongoClient
from django.conf import settings
from django.http import HttpResponse
@csrf_exempt
@csrf_exempt
@api_view(['GET','POST'])
def restaurants(request):
    #connect to our local mongodb
    db = MongoClient('localhost',27017)
    #get a connection to our database
    dbconn = db.restaurants
    restaurantCollection = dbconn['restaurants']

    if request.method == 'GET':
        #get our collection
        restaurants = []
        for r in restaurantCollection.find():
            restaurant = Restaurant(r["_id"],r["name"],r["address"])
            restaurants.append(restaurant)
        serializedList = RestaurantSerializer(restaurants, many=True)
        return Response(serializedList.data)
    elif request.method == 'POST':
        #get data from the request and insert the record
        name = request.POST.get('_content')
        address = request.POST.get('_content')
        print name
        print address
        try:
            restaurantCollection.insert({"name" : name, "address": address})
        except:
            return Response({ "ok": "false" })
        return Response({ "ok": "true" }) 