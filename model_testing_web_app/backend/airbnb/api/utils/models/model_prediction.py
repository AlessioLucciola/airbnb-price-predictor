import pyspark
from pyspark.ml.regression import GBTRegressionModel
from pyspark.ml.linalg import Vectors
from pyspark.ml.feature import VectorAssembler
from pyspark.sql import *
from pyspark.sql.types import *
from pyspark.sql.functions import *
from pyspark import SparkContext, SparkConf
from airbnb.paths import MODELS_ROOT
import os

class Models():
    def __init__(self):
        self.spark_session = self.create_spark_session()
        self.price_prediction_model_path = os.path.join(MODELS_ROOT, 'price_model')
        self.price_score_prediction_model_path = ''
        self.price_prediction_model = self.load_price_prediction_model()
    
    def create_spark_session(self):
        conf = SparkConf().\
                set('spark.ui.port', '4050').\
                set('spark.executor.memory', '4G').\
                set('spark.driver.memory', '45G').\
                set('spark.driver.maxResultSize', '10G').\
                set('spark.executor.extraJavaOptions', '-XX:+UseG1GC').\
                setAppName('PySparkTutorial').\
                setMaster('local[*]')

    # Create the context
        sc = pyspark.SparkContext.getOrCreate(conf=conf)
        spark = pyspark.sql.SparkSession.builder.getOrCreate()
        return sc, spark

    def load_price_prediction_model(self):
        model = GBTRegressionModel.load(self.price_prediction_model_path)
        return model
    
    def make_price_prediction(self, data):
        data = self.spark_session.createDataFrame([(Vectors.dense(data),)], ["features"])
        predictions = self.price_prediction_model.transform(data)
        prediction_result = predictions.select("prediction").head()[0]
        return prediction_result
