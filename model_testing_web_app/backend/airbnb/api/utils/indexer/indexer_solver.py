rooms = {'Entire home/apt': 0, 'Private room': 1, 'Hotel room': 2, 'Shared room': 3}
properties = {'Entire place': 0, 'Private room': 1, 'Shared room': 2, 'Other': 3}
cities = {'Madrid': 0, 'Dublin': 1, 'Berlin': 2, 'London': 3, 'Paris': 4, 'Athens': 5, 'Lyon': 6, 'Milan': 7, 'Barcelona': 8, 'Amsterdam': 9, 'Brussels': 10, 'Lisboa': 11, 'Munich': 12, 'Vienna': 13, 'Rome': 14}

def get_city(city):
    return cities[city]

def get_room(room):
    return rooms[room]

def get_property(property):
    return properties[property]