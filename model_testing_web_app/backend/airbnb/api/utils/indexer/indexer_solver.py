rooms = {'Entire home/apt': 0, 'Private room': 1, 'Hotel room': 2, 'Shared room': 3}
properties = {'Entire place': 0, 'Private room': 1, 'Shared room': 2, 'Other': 3}
cities = {'Madrid': 3, 'Dublin': 11, 'Berlin': 8, 'London': 0, 'Paris': 1, 'Athens': 9, 'Lyon': 10, 'Milan': 4, 'Barcelona': 5, 'Amsterdam': 12, 'Brussels': 13, 'Lisboa': 6, 'Munich': 14, 'Vienna': 7, 'Rome': 2}

def get_city(city):
    return cities[city]

def get_room(room):
    return rooms[room]

def get_property(property):
    return properties[property]