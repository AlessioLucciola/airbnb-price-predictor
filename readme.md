# Airbnb Price Prediction
This is the final project for the Big Data Course A.Y. 2022/2023 at the University of Rome La Sapienza.

<strong>Airbnb</strong> is an online platform and marketplace that connects people who want to rent out their properties, such as apartments, houses, or even rooms, with travelers seeking accommodations. It allows individuals to list their properties for short-term rentals and provides a platform for travelers to search and book these accommodations.
Airbnb facilitates the booking process, allowing hosts to create listings with photos, descriptions, and pricing details, while guests can search for available accommodations based on their desired location, travel dates, and other specific criteria. The platform provides a secure payment system, review and rating features, and customer support to ensure a reliable and trustworthy experience for both hosts and guests.
In order to add a new listing, a host has to visit the Airbnb website, register an account and finally add the needed information such as the name and a description of the accommodation, its characteristics (beds, bedrooms, bathrooms, etc..), its positions, the amenities and finally a price.
The host's property price before fees will depend on various things, such as the property location and quality, the amenities it has, and how in demand it is. For this reason, setting the right price is an important operation that can determine the success of Airbnb.

In this project, the goal is to create a price predictor using some <strong>Machine Learning</strong> techniques. The model will be trained on a dataset containing some characteristics of Airbnb. Finally, the model will be evaluated and tested on a real scenario. All the methods are implemented using <strong>Pyspark</strong> in order for the data to work on a distributed system. The models were trained with data obtained from the [Inside Airbnb](insideairbnb.com) website by aggregating the datasets of various European cities in order to have a consistent dataset with more than 320k instances.

The project is composed by 3 notebooks:
- `Data Cleaning`: The dataset contained lots of features with different formats (strings, lists, floats). The goal was to remove the useless data and put everything in a ML friendly format by doing some feature engineering in order to extract further information from location features;
- `Price Model`: Data analysis, feature selection and model training for price prediction models;
- `Score Models`: Tests on the creation of a model for predicting location and overall rating scores.

The folder structure is the following:
- `Notebooks`: Contains the notebooks described before;
- `AirbnbWebApplications`: Contains the code of a demo web application built to test the models in a real scenario. The app was built using React, Django and MySql. In that folder you can find some instructions on how to run the web application;
- `Demo`: Contains some videos that shows how the application works;
- `Models`: Contains the models trained with Spark.

## Web Application Demo
https://www.youtube.com/watch?v=CLMlq0RHy-0&ab_channel=AlessioLucciola

## Technologies Used
Python • PySpark • Django • Javascript • React • SCSS • MySQL • Docker