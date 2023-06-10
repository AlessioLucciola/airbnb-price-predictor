# Introduction
The goal of this project was to build a price prediction for Airbnbs using their characteristics. Three algorithms were used that are Linear Regression, Random Forest and Gradient Boosted Trees (the latter gave the best results). Also, a score prediction model (for overall rating and location) was created but it turned out that it isn't possible to correctly predict them due to the low correlation between the scores and the other available features (see notebook 3 for further information).

# Results
## Price Prediction Models
### Linear Regression
Best parameters for linear regression:
- aggregationDepth = 2
- elasticNetParam = 0.0
- epsilon = 1.35
- featuresCol = features
- fitIntercept = True
- labelCol = price
- loss = squaredError
- maxBlockSizeInMB = 0.0
- maxIter = 100
- predictionCol = prediction
- regParam = 0.0
- solver = auto
- standardization = True
- tol = 1e-06

Results:
- MSE for linear regression on training set: 0.24646070799188008
- RMSE for linear regression on training set: 0.49644809194102063
- MAE for linear regression on training set: 0.3873444914908169
- R2 for linear regression on training set: 0.4360307324880086
- R2_adj for linear regression on training set: 0.43602322391035564
- MSE for linear regression on testing set: 0.2498254351155321
- RMSE for linear regression on testing set: 0.49982540463198954
- MAE for linear regression on testing set: 0.3899726515939456
- R2 for linear regression on testing set: 0.43255128549239363
- R2_adj for linear regression on testing set: 0.4325109703750838

### Random Forest
Best parameters for random forest:
- bootstrap = True
- cacheNodeIds = False
- checkpointInterval = 10
- featureSubsetStrategy = auto
- featuresCol = features
- impurity = variance
- labelCol = price
- leafCol = 
- maxBins = 32
- maxDepth = 10
- maxMemoryInMB = 256
- minInfoGain = 0.0
- minInstancesPerNode = 1
- minWeightFractionPerNode = 0.0
- numTrees = 80
- predictionCol = prediction
- seed = -9210051078898526106
- subsamplingRate = 1.0

Results:
- MSE for random forest regressor on training set: 0.18574261851608875
- RMSE for random forest regressor on training set: 0.4309786752451782
- MAE for random forest regressor on training set: 0.3327328946278369
- R2 for random forest regressor on training set: 0.5750197494996999
- R2_adj for random forest regressor on training set: 0.575014080728073
- MSE for random forest regressor on testing set: 0.18492630218749198
- RMSE for random forest regressor on testing set: 0.43003058285137347
- MAE for random forest regressor on testing set: 0.3321758293935531
- R2 for random forest regressor on testing set: 0.5807815684757687
- R2_adj for random forest regressor on testing set: 0.5807518577435558

### Gradient Boosted Trees
Best parameters for gradient-boosted trees:
- cacheNodeIds = False
- checkpointInterval = 10
- featureSubsetStrategy = all
- featuresCol = features
- impurity = variance
- labelCol = price
- leafCol = 
- lossType = squared
- maxBins = 32
- maxDepth = 6
- maxIter = 13
- maxMemoryInMB = 256
- minInfoGain = 0.0
- minInstancesPerNode = 1
- minWeightFractionPerNode = 0.0
- predictionCol = prediction
- seed = -7454223888317409867
- stepSize = 0.2
- subsamplingRate = 1.0
- validationTol = 0.01

Results:
- MSE for gradient-boosted tree regressor on training set: 0.15446737792813656
- RMSE for gradient-boosted tree regressor on training set: 0.39302338089245603
- MAE for gradient-boosted tree regressor on training set: 0.3000783912817505
- R2 for gradient-boosted tree regressor on training set: 0.6465776918056215
- R2_adj for gradient-boosted tree regressor on training set: 0.6465729775386629
- MSE for gradient-boosted tree regressor on testing set: 0.16046163530958224
- RMSE for gradient-boosted tree regressor on testing set: 0.40057662851142756
- MAE for gradient-boosted tree regressor on testing set: 0.3053352055527062
- R2 for gradient-boosted tree regressor on testing set: 0.6362417120843388
- R2_adj for gradient-boosted tree regressor on testing set: 0.6362159319080158

## Rating Score Prediction Models
### Linear Regression
Best parameters for linear regression:
- aggregationDepth = 2
- elasticNetParam = 0.0
- epsilon = 1.35
- featuresCol = features
- fitIntercept = True
- labelCol = review_scores_rating
- loss = squaredError
- maxBlockSizeInMB = 0.0
- maxIter = 100
- predictionCol = prediction
- regParam = 0.0
- solver = auto
- standardization = True
- tol = 1e-06

Results:
- MSE for linear regression on training set: 0.08766176728384167
- RMSE for linear regression on training set: 0.2960772995078172
- MAE for linear regression on training set: 0.1995544485537103
- R2 for linear regression on training set: 0.13949622215872948
- R2_adj for linear regression on training set: 0.13948505205573247
- MSE for linear regression on testing set: 0.08825597552679555
- RMSE for linear regression on testing set: 0.29707907285232255
- MAE for linear regression on testing set: 0.2002250335704628
- R2 for linear regression on testing set: 0.1364928636060968
- R2_adj for linear regression on testing set: 0.1364332318808268

### Random Forest
Best parameters for random forest:
- bootstrap = True
- cacheNodeIds = False
- checkpointInterval = 10
- featureSubsetStrategy = auto
- featuresCol = features
- impurity = variance
- labelCol = review_scores_rating
- leafCol = 
- maxBins = 32
- maxDepth = 9
- maxMemoryInMB = 256
- minInfoGain = 0.0
- minInstancesPerNode = 1
- minWeightFractionPerNode = 0.0
- numTrees = 60
- predictionCol = prediction
- seed = 426645657202394545
- subsamplingRate = 1.0

Results:
- MSE for random forest regressor on training set: 0.08427869470530525
- RMSE for random forest regressor on training set: 0.2903079308343216
- MAE for random forest regressor on training set: 0.194183001940712
- R2 for random forest regressor on training set: 0.1727050750571173
- R2_adj for random forest regressor on training set: 0.172694336034514
- MSE for random forest regressor on testing set: 0.08622627702467309
- RMSE for random forest regressor on testing set: 0.29364311165881807
- MAE for random forest regressor on testing set: 0.19632309833731257
- R2 for random forest regressor on testing set: 0.156351679180331
- R2_adj for random forest regressor on testing set: 0.1562934188570848

### Gradient Boosted Trees
Best parameters for gradient-boosted trees:
- cacheNodeIds = False
- checkpointInterval = 10
- featureSubsetStrategy = all
- featuresCol = features
- impurity = variance
- labelCol = review_scores_rating
- leafCol = 
- lossType = squared
- maxBins = 32
- maxDepth = 6
- maxIter = 11
- maxMemoryInMB = 256
- minInfoGain = 0.0
- minInstancesPerNode = 1
- minWeightFractionPerNode = 0.0
- predictionCol = prediction
- seed = -7140245879972423352
- stepSize = 0.15
- subsamplingRate = 1.0
- validationTol = 0.01

Results:
- MSE for gradient-boosted tree regressor on training set: 0.08478022314916894
- RMSE for gradient-boosted tree regressor on training set: 0.2911704365988569
- MAE for gradient-boosted tree regressor on training set: 0.1955587093203146
- R2 for gradient-boosted tree regressor on training set: 0.16778198105603248
- R2_adj for gradient-boosted tree regressor on training set: 0.16777117812729825
- MSE for gradient-boosted tree regressor on testing set: 0.08610420045756526
- RMSE for gradient-boosted tree regressor on testing set: 0.2934351724956728
- MAE for gradient-boosted tree regressor on testing set: 0.1972064708057932
- R2 for gradient-boosted tree regressor on testing set: 0.15754609107431183
- R2_adj for gradient-boosted tree regressor on testing set: 0.15748791323427735

## Location Score Prediction Models
### Linear Regression
Best parameters for linear regression:
- aggregationDepth = 2
- elasticNetParam = 0.0
- epsilon = 1.35
- featuresCol = features
- fitIntercept = True
- labelCol = review_scores_location
- loss = squaredError
- maxBlockSizeInMB = 0.0
- maxIter = 100
- predictionCol = prediction
- regParam = 0.0
- solver = auto
- standardization = True
- tol = 1e-06

Results:
- MSE for linear regression on training set: 0.06947194728274286
- RMSE for linear regression on training set: 0.2635753161484263
- MAE for linear regression on training set: 0.1716466134931466
- R2 for linear regression on training set: 0.04181942074833511
- R2_adj for linear regression on training set: 0.04180698271373773
- MSE for linear regression on testing set: 0.06801539957070972
- RMSE for linear regression on testing set: 0.260797621865518
- MAE for linear regression on testing set: 0.17137367033836448
- R2 for linear regression on testing set: 0.04315479792112953
- R2_adj for linear regression on testing set: 0.043088720493611565

### Random Forest
Best parameters for random forest:
- bootstrap = True
- cacheNodeIds = False
- checkpointInterval = 10
- featureSubsetStrategy = auto
- featuresCol = features
- impurity = variance
- labelCol = review_scores_location
- leafCol = 
- maxBins = 32
- maxDepth = 8
- maxMemoryInMB = 256
- minInfoGain = 0.0
- minInstancesPerNode = 1
- minWeightFractionPerNode = 0.0
- numTrees = 60
- predictionCol = prediction
- seed = -120836638351030548
- subsamplingRate = 1.0

Results:
- MSE for random forest regressor on training set: 0.06463023275074947
- RMSE for random forest regressor on training set: 0.25422476816932976
- MAE for random forest regressor on training set: 0.16444647271430168
- R2 for random forest regressor on training set: 0.1085979841295438
- R2_adj for random forest regressor on training set: 0.1085864129399855
- MSE for random forest regressor on testing set: 0.06365011774844859
- RMSE for random forest regressor on testing set: 0.2522897495905226
- MAE for random forest regressor on testing set: 0.16451913087805053
- R2 for random forest regressor on testing set: 0.10456587532001049
- R2_adj for random forest regressor on testing set: 0.1045040387937447

### Gradiend Boosted Trees
Best parameters for gradient-boosted trees:
- cacheNodeIds = False
- checkpointInterval = 10
- featureSubsetStrategy = all
- featuresCol = features
- impurity = variance
- labelCol = review_scores_location
- leafCol = 
- lossType = squared
- maxBins = 32
- maxDepth = 6
- maxIter = 11
- maxMemoryInMB = 256
- minInfoGain = 0.0
- minInstancesPerNode = 1
- minWeightFractionPerNode = 0.0
- predictionCol = prediction
- seed = 139281562653389808
- stepSize = 0.15
- subsamplingRate = 1.0
- validationTol = 0.01

Results:
- MSE for gradient-boosted tree regressor on training set: 0.06419461902229595
- RMSE for gradient-boosted tree regressor on training set: 0.25336657045138367
- MAE for gradient-boosted tree regressor on training set: 0.164447129738267
- R2 for gradient-boosted tree regressor on training set: 0.11460611591489334
- R2_adj for gradient-boosted tree regressor on training set: 0.11459462271621967
- MSE for gradient-boosted tree regressor on testing set: 0.06336614939030245
- RMSE for gradient-boosted tree regressor on testing set: 0.2517263382928025
- MAE for gradient-boosted tree regressor on testing set: 0.16452775388195578
- R2 for gradient-boosted tree regressor on testing set: 0.10856076122451619
- R2_adj for gradient-boosted tree regressor on testing set: 0.10849920057545936
