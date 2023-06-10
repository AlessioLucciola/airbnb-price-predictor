import csv
import json
import os

def read_file(path):
    with open(path, encoding="utf8") as file:
        file = json.load(file)
        return file

def extract_info(path):
    node_list = []
    file = read_file(path)
    for node in file["features"]:
        node_info = {}
        #node_info["city"] = path.split('.')[0].split('\\')[-1]
        if "name" in node["properties"]:
            #node_info["name"] = node["properties"]["name"]
            lat, lon = extract_coordinates(node)
            node_info["lat"] = lat
            node_info["lon"] = lon
            if bool(node_info):
                node_list.append(node_info)
        elif "@relations" in node["properties"]:
            #node_info["name"] = node["properties"]["@relations"][0]["reltags"]["name"]
            lat, lon = extract_coordinates(node)
            node_info["lat"] = lat
            node_info["lon"] = lon
            if bool(node_info):
                node_list.append(node_info)
    return node_list

def extract_coordinates(node):
    if node["geometry"]["type"] == "Polygon":
        lat = node["geometry"]["coordinates"][0][0][1]
        lon = node["geometry"]["coordinates"][0][0][0]
        return lat, lon
    elif node["geometry"]["type"] == "LineString" or node["geometry"]["type"] == "MultiLineString":
        lat = node["geometry"]["coordinates"][0][1]
        lon = node["geometry"]["coordinates"][0][0]
        if isinstance(lat, list): #There are some cases in which the structure is different
            lat = lon[1]
            lon = lon[0]
        return lat, lon
    elif node["geometry"]["type"] == "Point":
        lat = node["geometry"]["coordinates"][1]
        lon = node["geometry"]["coordinates"][0]
        return lat, lon
    
def scrape_files(dir_path):
    res = {}
    for path in os.listdir(dir_path):
        if os.path.isfile(os.path.join(dir_path, path)) and os.path.join(dir_path, path).endswith(".geojson"):
            city_name = path.split('.')[0]
            res[city_name] = extract_info(os.path.join(dir_path, path))
    data = json.dumps(res)
    file = open(os.path.join(dir_path, 'transport_result.json'), "w", encoding="utf16", newline="")
    file.write(data)
    '''
    writer = csv.writer(file)
    writer.writerow(['city', 'name', 'lat', 'lon'])
    writer.writerow(['city', 'lat', 'lon'])
    for node in res:
        writer.writerow(node.values())
    '''
    file.close()


scrape_files("C:\\Users\\Alessio\\Downloads\\DB-Datasets\\Utilities\\TransportFiles")